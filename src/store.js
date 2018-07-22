import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import axios from 'axios'

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

export default new Vuex.Store({
  state: {
    cartData: [],
    menuData: appConfig.cafeData,
    minimalSum: null,
    checkoutForm: {
        name: {
            value: null,
            valid: false
        },
        street: {
            value: null,
            valid: false
        },
        plz: {
            value: null,
            valid: false
        },
        email: {
            value: null,
            valid: false
        }
    }
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

    selectMinimalSum: function(state, minimalSum) {
        state.minimalSum = minimalSum
    },

    updateCheckoutForm: function(state, data) {
        state.checkoutForm = Object.assign(state.checkoutForm, data)
    },

    resetCheckoutForm: function(state, data) {
        state.checkoutForm = {
            name: null,
            street: null,
            plz: null,
            email: {
                value: null,
                valid: false
            }
        }
    }
  },
  actions: {
    addToCart: function({commit}, item) {
        commit('addToCart', item)
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

    submitOrder: function({commit}, data) {
        //commit('API_DATA_PENDING')
        var bodyFormData = new FormData();

        bodyFormData.set('name', 'Fred');
        bodyFormData.set('email', 'asd@asd.com');
        bodyFormData.set('telefon', 'sds');
        bodyFormData.set('address', 'iii');
        bodyFormData.set('subject', 'hhh');
        bodyFormData.set('message', 'oooo');


        return axios.post('http://gspz24agoapagjpy.myfritz.net:5000/contact_data.php',
        bodyFormData, {
             headers:{
               "Content-Type": 'multipart/form-data'
             }
         }).then(response => {
              // sets `state.loading` to false
              // also sets `state.apiData to response`
              commit('API_DATA_SUCCESS', response.data)
            })
            .catch(error => {
              // set `state.loading` to false and do something with error

              //commit('API_DATA_FAILURE', error)
            })

    }
  }
})
