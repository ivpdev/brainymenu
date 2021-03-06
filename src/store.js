import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import axios from 'axios'
import OrderSubmittingService from './services/OrderSubmittingService'
import OpeningTimeService from './services/OpeningTimeService'
import MenuService from './services/MenuService'

Vue.use(Vuex)

//TODO enforce unique name

const createItemForCart = (item) => {
    return {
        name: item.name,
        price: item.price,
        quantity: 1,
        availableAt: item.availableAt
    }
}

const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
}

const buildOrderMessage = (cartData) => {
    //TODO refactor: move to separate service
    //TODO infer traits from description
    const rows = cartData.map(item => `${item.name}: ${item.quantity} x ${item.price} = ${item.quantity * item.price}`)

    return rows.join('\n')
}

const checkoutFormClearState = {
   firma: {
       value: null,
       valid: false
   },
   department: {
       value: null,
       valid: false
   },
   firstname: {
       value: null,
       valid: false
   },
   lastname: {
       value: null,
       valid: false
   },
   street: {
       value: null,
       valid: false
   },
   houseNumber: {
       value: null,
       valid: false
   },
   floor: {
       value: null,
       valid: false
   },
   zip: {
       value: null,
       valid: false
   },
   phone: {
       value: null,
       valid: false
   },
   email: {
       value: null,
       valid: false
   },
   note: {
       value: null,
       valid: true
   }
}


const features = {
    menuShowOnlyOpenedCategory: true,
    sortable: false,
    orderingEnabled: appConfig.orderingEnabled
}

const store = new Vuex.Store({
  state: {
    features: features,
    editMode: false,
    cartData: [],
    menuData: MenuService.prepareMenu(appConfig.cafeData.menu, appConfig.footNote),
    footNoteData: appConfig.footNote,
    footNoteContact: appConfig.footNote.contact,
    defaultImage: appConfig.cafeData.defaultImage,
    preselectedZip: null,
    minimalSum: null,
    orderSubmitPending: false,
    checkoutForm: _.cloneDeep(checkoutFormClearState),
    chatMessages: [{
        from: 'bot',
        content: 'Hi can I help you?'
    }, {
        from: 'user',
        content: 'I want something vegetarian'
    }, {
        from: 'bot',
        content: [
            'I found 3 dishes', {
            type: 'button',
            label: 'Show in menu',
            event: 'filerMenu',
            eventData: {}
        }]
    }]
  },
  mutations: {
    addToCart: function(state, item) {
        const itemInCart = state.cartData.find(i => i.name === item.name)

        if (itemInCart) {
            itemInCart.quantity = itemInCart.quantity + 1
        } else {
            state.cartData.push(createItemForCart(item))
        }
    },

    removeFromCart: function(state, item) {
        const itemInCart = state.cartData.find(i => i.name === item.name)

        if (itemInCart) {
            if (itemInCart.quantity > 1) {
                itemInCart.quantity = itemInCart.quantity - 1
            } else {
                removeFromArray(state.cartData, itemInCart)
            }
        } else {
            console.warn('trying to remove non-existing item from cart')
        }
    },

    clearCart: function(state, item) {
        state.cartData = []
    },

    selectMinimalSum: function(state, minimalSum) {
        state.minimalSum = minimalSum
    },

    updateCheckoutForm: function(state, data) {
        state.checkoutForm = Object.assign(state.checkoutForm, data)
    },

    resetCheckoutForm: function(state, data) {
        state.checkoutForm = _.cloneDeep(checkoutFormClearState)
    },

    setOrderSubmitPending: function(state, data) {
        state.orderSubmitPending = true
    },

    unsetOrderSubmitPending: function(state, data) {
        state.orderSubmitPending = false
    },

    setGlobalMessage: function(state, message) {
        state.globalMessage = message
    },

    unsetGlobalMessage: function(state) {
        state.globalMessage = null
    },

    setGlobalError: function(state, error) {
        state.globalError = error
    },

    unsetGlobalError: function(state) {
        state.globalMessage = null
    },

    preselectZip: function(state, zip) {
        state.preselectedZip = zip
    },

    admin_updateCategoryName(state, data) {
        const targetCategory = data.category;
        const newName = data.newName;
        const category = state.menuData.find(category => category == targetCategory);
        category.category = newName;
    },

    admin_deleteCategory(state, categoryArg) {
        state.menuData = _.filter(state.menuData, category => category !== categoryArg);
    },

    admin_createCategory(state, name) {
        state.menuData.push({ category: name, items: [] });
    },

  },

  actions: {
    addToCart: function({dispatch}, item) {
        dispatch('addItemsToCart', [item])
    },

    addItemsToCart: function({commit, state, dispatch}, items) {
        items.forEach(item => {
            commit('addToCart', item)
        })

        /* if (!state.preselectedZip) {
            dispatch('requestZipPreselection')
        } */
    },

    addItemWithSupplementToCart: function({commit, state, dispatch}, payload) {
        const mainItem = payload.mainItem
        const supplement = payload.supplement

        dispatch('addItemsToCart', [mainItem, supplement])
    },

    requestZipPreselection: function() {
        this.eventBus.$emit('requestZipPreselection')
    },

    preselectZip: function({commit}, zip) {
        commit('preselectZip', zip)
    },

    removeFromCart: function({commit}, item) {
        commit('removeFromCart', item)
    },

    selectMinimalSum: function({commit}, minimalSum) {
        commit('selectMinimalSum', minimalSum)
    },

    resetMinimalSum: function({commit}) {
        commit('selectMinimalSum', null)
    },

    updateCheckoutForm: function({commit}, data) {
        commit('updateCheckoutForm', data)
    },

    resetCheckoutForm: function({commit}, data) {
        commit('resetCheckoutForm', data)
    },

    submitOrder: function({commit, state, dispatch}, data) {
        const availability = MenuService.checkDishesAvailability(state.cartData)

        if (!OpeningTimeService.isOpenNow()) {
            //TODO
        }

        if (availability.available) {
            commit('setOrderSubmitPending')

            OrderSubmittingService
                .submitOrder(state.cartData, state.checkoutForm)
                    .then(() => {
                        dispatch('handleOrderSuccess')})
                    .catch(error => {
                        commit('unsetOrderSubmitPending')

                        dispatch('showGlobalMessage', 'Submit order failed. Reason: ' + error)})
        } else {
            const errorMessage =
                "Folgende Speisen können nicht bestellt werden:" +
                availability.errors.map(error => error.dishName + ' - ' + error.reason)

            dispatch('showGlobalError', errorMessage)
        }
    },

    showGlobalMessage: function(store, message) {
        this.eventBus.$emit('showGlobalMessage', message);
    },

    showGlobalError: function(store, error) {
        this.eventBus.$emit('showGlobalError', error);
    },

    handleOrderSuccess: function({commit, dispatch}) {
        commit('unsetOrderSubmitPending')
        //commit('clearCart')
        //commit('resetCheckoutForm')

        //TODO to step 1
        //commit('setGlobalMessage', 'Erledigt')

        this.eventBus.$emit('closeAllPanels');

        dispatch('showGlobalMessage', 'Ihre Bestellung ist eingegangen')
    },

    admin_updateCategoryName({commit}, data) {
        commit('admin_updateCategoryName', data);
    },

    admin_deleteCategory({commit}, category) {
        commit('admin_deleteCategory', category);
    },

    admin_createCategory({commit}, name) {
        commit('admin_createCategory', name);
    }
  }
})

store.eventBus = new Vue()

export default store
