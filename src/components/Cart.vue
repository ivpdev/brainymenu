<template>
    <f7-block>
          <f7-block v-show="step.number==1">
              <f7-list media-list>
                <f7-list-item v-for="(item, index) in cartData">
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
                      <div class="cart-item-price">{{item.quantity * item.price}} &euro;</div>
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
            <Checkout/>
          </f7-block>
    </f7-block>
</template>

<script>
import store from '../store'
import Checkout from './Checkout'
import { f7Block, f7List, f7ListItem, f7Swiper, f7SwiperSlide } from 'framework7-vue'

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
    f7SwiperSlide
  },
  methods: {
    plusItem: function(item) {
      store.dispatch("addToCart", item)
    },

    minusItem: function(item) {
      store.dispatch("removeFromCart", item)
    },

    goToCheckout: function() {
        this.$set(this.step, 'number', 2 )
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
