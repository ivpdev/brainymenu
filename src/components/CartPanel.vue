<template>
    <f7-popup ref="cartPanel"  class="popup-chat">
        <f7-page class="cart-page">
            <f7-navbar title="Cart" class="cart-navbar">
                <f7-nav-right>
                     <f7-link popup-close>x</f7-link>
                </f7-nav-right>
            </f7-navbar>

            <f7-block>
               <f7-block v-show="step.number==1">
                  <f7-list media-list>
                      {{cartData}}
                  <f7-list-item v-for="(item, index) in cartData" :key="index">
                     <div class="item-title-row">
                         <div class="item-title">{{item.name}}</div>

                         <div class="item-after">
                            <div class="cart-item-quantity">
                            <span class="cart-item-quantity-button cart-item-quantity-minus badge color-blue"
                                  @click="minusItem(item)">-</span>
                            <span class="cart-item-quantity-number">{{item.quantity}}</span>
                            <span class="cart-item-quantity-button cart-item-quantity-plus badge color-blue"
                                  @click="plusItem(item)">+</span>
                          </div>
                          <div class="cart-item-price">{{toFixed(item.quantity * item.price, 2)}} &euro;</div>
                        </div>
                        <!-- div class="item-subtitle">item.note</div -->
                        <!-- div class="item-text">item.note</div -->
                      </div>
                    </f7-list-item>

                    <!-- f7-list-item title="Item 2"></f7-list-item>
                    <f7-list-item title="Item 1" subtitle="Subtitle 1" text="Item 1 Text"></f7-list-item -->
                  </f7-list>
              </f7-block>

              <f7-block v-show="step.number==2">
                <Checkout ref="checkout"/>
              </f7-block>

              <f7-actions ref="finalConfirmation">
                <f7-actions-group>
                  <f7-actions-label>Zahlungspflichtig bestellen</f7-actions-label>

                  <f7-actions-button @click="submitOrder">Ok</f7-actions-button>
                </f7-actions-group>
                <f7-actions-group>
                  <f7-actions-button color="red" bold>Cancel</f7-actions-button>
                </f7-actions-group>
              </f7-actions>
            </f7-block>

            <f7-fab v-show="step.number==1"
                    class="checkout-fab"
                    :color="fabToCheckout"
                    position="right-bottom"
                    popup-open=".popup-chat"
                    @click="goToCheckout">
                Weiter (<b>{{priceTotalInCartFormatted}} &euro;</b>)
            </f7-fab>

            <f7-fab v-show="step.number==2"
                  class="checkout-fab"
                  :color="fabToFinalConfirmation"
                  position="right-bottom"
                  @click="goToFinalConfirmation">
              Weiter
            </f7-fab>

            <f7-fab v-show="step.number==2"
                  class="checkout-fab"
                  color="red"
                  position="left-bottom"
                  popup-open=".popup-chat"
                  @click="goToCartSummary">
              Zurück
            </f7-fab>
        </f7-page>
    </f7-popup>
</template>

<script>
import store from '../store'
import Checkout from './Checkout'
import { f7Block, f7List, f7ListItem, f7Swiper, f7SwiperSlide, f7Popup, f7Fab,
 f7Page, f7Navbar, f7NavRight, f7Link, f7Popover, f7Sheet,
 f7Actions, f7ActionsGroup, f7ActionsButton, f7ActionsLabel } from 'framework7-vue'

export default {
  name: 'Cart',
  data: function() {
    return {
        cartData: store.state.cartData,
        step: {
            number: 1
        }
    }
  },

  components: {
    f7Block,
    f7List,
    f7ListItem,
    Checkout,
    f7Swiper,
    f7SwiperSlide,
    f7Popup,
    f7Fab,
    f7Page,
    f7Navbar,
    f7NavRight,
    f7Link,
    f7Popover,
    f7Sheet,
    f7Actions,
    f7ActionsGroup,
    f7ActionsButton,
    f7ActionsLabel
  },

  computed: {
    priceTotalInCartFormatted: function() {
        return this.toFixed(this.priceTotalInCart(), 2)
    },

    fabToCheckout: function() {
        return this.canGoToCheckout() ? "red" : "gray"
    },
    fabToFinalConfirmation: function() {
        return this.canGoToFinalConfirmation() ? "red" : "gray"
    }
  },

  methods: {
    plusItem: function(item) {
      store.dispatch("addToCart", item)
    },

    minusItem: function(item) {
      store.dispatch("removeFromCart", item)
    },

    canGoToCheckout: function() {
        return store.state.cartData.length > 0;
    },

    toFixed: function(value, precisionArg) {
        var precision = precisionArg || 0,
            power = Math.pow(10, precision),
            absValue = Math.abs(Math.round(value * power)),
            result = (value < 0 ? '-' : '') + String(Math.floor(absValue / power));

        if (precision > 0) {
            var fraction = String(absValue % power),
                padding = new Array(Math.max(precision - fraction.length, 0) + 1).join('0');
            result += '.' + padding + fraction;
        }
        return result;
    },

    goToCheckout: function() {
        if (this.canGoToCheckout()) {
            this.$set(this.step, 'number', 2)
            this.$refs.checkout.validate()
        }
    },

    goToCartSummary: function() {
        this.$set(this.step, 'number', 1 )
    },

    priceTotalInCart: function() {
        return store.state.cartData.reduce((acc, item) => acc + (item.quantity * item.price), 0)
    },

    canGoToFinalConfirmation: function() {
        return store.state.checkoutForm.firstname.valid &&
               store.state.checkoutForm.lastname.valid &&
               store.state.checkoutForm.street.valid &&
               store.state.checkoutForm.email.valid &&
               this.priceTotalInCart() >= store.state.minimalSum
    },

    goToFinalConfirmation: function() {
        if (this.canGoToFinalConfirmation()) {
            this.$refs.finalConfirmation.open()
        }
    },

    open: function() {
        this.$refs.cartPanel.open()
    },

    submitOrder: function() {
        store.dispatch("submitOrder")
    }
  }
}
</script>

<style scoped>
.cart-item-price {
    margin-left: 1rem;
    width: 2rem;
    font-size: 18px;
    margin-top: 2px;
}

.cart-item-quantity {
    border: solid 2px #2196f3;
    border-radius: 9px;
    padding: 3px;
}

.thema-red .cart-item-quantity {
    border: solid 2px #ff9800;

}

.thema-red .cart-item-quantity-number {
    color:  #ff9800;
}

.cart-item-quantity-button {
    width: 1.5rem;
    border-radius: 7px;
}

.thema-red .cart-item-quantity-button {
    background-color: #ff9800;
}

.cart-item-quantity-button:hover {
    cursor: pointer;
}

</style>