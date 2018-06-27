<template>
    <div class="checkout-container">
        <f7-list no-hairlines-md>
          <f7-list-item>
            <f7-label>Name</f7-label>
            <!-- f7-icon icon="demo-list-icon" slot="media"></f7-icon -->
            <f7-input
                required
                validate
                type="text" placeholder="" clear-button></f7-input>
          </f7-list-item>

          <f7-list-item>
            <f7-label>Strasse</f7-label>
            <!-- f7-icon icon="demo-list-icon" slot="media"></f7-icon -->
            <f7-input
             required
             validate
             type="text" placeholder="" clear-button></f7-input>
          </f7-list-item>

          <f7-list-item>
            <!-- f7-icon icon="demo-list-icon" slot="media"></f7-icon -->
            <!-- f7-label>PLZ</f7-label -->
            <!-- f7-input
                type="select"
                @change="onZipChange">

                <option v-for="(zipData, index) in availableZipCodes">
                    {{zipData.zip}} - Mindestbestellwert {{zipData.minimalSum}} &euro;</option>

                <option value="14">1234 Mindestbestellwert 14</option>
                <option value="15">1234 Mindestbestellwert 56</option>
            </f7-input -->

            <select
                class="input-with-value"
                @change="onZipChange">
                <option v-for="(zipData, index) in availableZipCodes"
                        :value="zipData.zip">
                                {{zipData.zip}} - Mindestbestellwert {{zipData.minimalSum}} &euro;</option>
            </select>

          </f7-list-item>

          <f7-list-item>
            <!-- f7-icon icon="demo-list-icon" slot="media"></f7-icon -->
            <f7-input type="email" validate placeholder="Your e-mail" clear-button></f7-input>
          </f7-list-item>
        </f7-list>

        <CheckoutSum v-bind:minimalSum="selectedMinimalSum.value" v-bind:sum="11"></CheckoutSum>
    </div>
</template>

<script>
import store from '../store'
import CheckoutSum from './CheckoutSum'
import { f7Block, f7List, f7ListItem, f7Icon, f7Input, f7Label } from 'framework7-vue'
import Vuex from 'vuex'

const availableZipCodes = [{
    zip: 81735,
    minimalSum: 12
}, {
    zip: 81549,
    minimalSum: 10
}];

export default {
  name: 'Cart',
  data: function() {
    return {
        cartData: store.state.cartData,
        availableZipCodes: availableZipCodes,
        selectedMinimalSum: {
            value: null
        }
    }
  },
  components: {
    f7Block,
    f7List,
    f7ListItem,
    f7Icon,
    f7Input,
    f7Label,
    CheckoutSum
  },
  methods: {
    onZipChange: function(e) {
        const value = e.target.value
        const zipData = availableZipCodes.find(z => z.zip == value)
        const minimalSum = zipData.minimalSum

        this.$set(this.selectedMinimalSum, 'value', minimalSum)
    }
  }
}
</script>

<style>
.checkout-container .list .item-inner {
    border-bottom: none;
}
</style>
