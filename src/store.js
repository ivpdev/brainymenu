import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import axios from 'axios'
import OrderSubmittingService from './services/OrderSubmittingService'

Vue.use(Vuex)

//TODO enforce unique name

const createItemForCart = (item) => {
    return {
        name: item.name,
        price: item.price,
        quantity: 1,
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
    const rows = cartData.map(item => `${item.name}: ${item.quantity} x ${item.price} = ${item.quantity * item.price}`)

    return rows.join('\n')
}

const checkoutFormClearState = {
   name: {
       value: null,
       valid: false
   },
   street: {
       value: null,
       valid: false
   },
   zip: {
       value: null,
       valid: false
   },
   email: {
       value: null,
       valid: false
   }
}

const store = new Vuex.Store({
  state: {
    cartData: [],
    menuData: appConfig.cafeData,
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
    }
  },

  actions: {

    addToCart: function({commit, state, dispatch}, item) {
        commit('addToCart', item)

        if (!state.preselectedZip) {
            dispatch('requestZipPreselection')
        }
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
        commit('setOrderSubmitPending')

        OrderSubmittingService
            .submitOrder(state.cartData)
                .then(() => {
                    dispatch('handleOrderSuccess')})
                .catch(error => {
                    commit('unsetOrderSubmitPending')

                    dispatch('showGlobalMessage', 'Submit order failed. Reason: ' + error)})
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
    }
  }
})

store.eventBus = new Vue()

export default store
