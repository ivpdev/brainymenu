<template>
    <div class="checkout-container">
        <f7-list no-hairlines-md>
          <f7-list-item>
              <!-- f7-icon icon="demo-list-icon" slot="media"></f7-icon -->
              <f7-label>E-Mail</f7-label>

              <f7-input type="email"
                        placeholder=""
                        :value="checkoutForm.email.value"
                        clear-button
                        @change="onFieldChange($event, 'email')"></f7-input>
          </f7-list-item>

          <f7-list-item>
            <f7-label>Firma</f7-label>
            <f7-input
                :value="checkoutForm.firma.value"
                type="text" placeholder="" clear-button
                @change="onFieldChange($event, 'firma')"></f7-input>
          </f7-list-item>

          <f7-list-item>
            <f7-label>Abteilung</f7-label>
            <f7-input
                :value="checkoutForm.department.value"
                type="text" placeholder="" clear-button
                @change="onFieldChange($event, 'department')"></f7-input>
          </f7-list-item>

        <f7-list-item>
            <f7-label>Vorname *</f7-label>
            <!-- f7-icon icon="demo-list-icon" slot="media"></f7-icon -->
            <f7-input
                required
                validate
                :value="checkoutForm.firstname.value"
                type="text" placeholder="" clear-button
                @change="onFieldChange($event, 'firstname')"></f7-input>
          </f7-list-item>

        <f7-list-item>
            <f7-label>Nachname *</f7-label>
            <!-- f7-icon icon="demo-list-icon" slot="media"></f7-icon -->
            <f7-input
                required
                validate
                :value="checkoutForm.lastname.value"
                type="text" placeholder="" clear-button
                @change="onFieldChange($event, 'lastname')"></f7-input>
          </f7-list-item>

          <f7-list-item>
            <f7-label>Strasse *</f7-label>
            <!-- f7-icon icon="demo-list-icon" slot="media"></f7-icon -->
            <f7-input
             required
             validate
             type="text"
             placeholder=""
            :value="checkoutForm.street.value"
             clear-button
             @change="onFieldChange($event, 'street')"></f7-input>
          </f7-list-item>

          <f7-list-item>
            <f7-label>Hausnummer</f7-label>
            <f7-input
                required
                :value="checkoutForm.houseNumber.value"
                type="text" placeholder="" clear-button
                @change="onFieldChange($event, 'houseNumber')"></f7-input>
          </f7-list-item>

          <f7-list-item>
            <f7-label>Etage</f7-label>
            <f7-input
                :value="checkoutForm.floor.value"
                type="text" placeholder="" clear-button
                @change="onFieldChange($event, 'floor')"></f7-input>
          </f7-list-item>

          <f7-list-item :class="zipInputClass">
            <select
                class="input-with-value"
                ref="zipSelect"
                v-model="preselectedZip"
                @change="onZipChange">

                <option v-for="(zipData, index) in availableZipCodes"
                        :key="index"
                        :value="zipData.zip">
                                {{zipData.zip}} ({{zipData.place}})</option>
            </select>
            <div class="item-input-error-message">Mindestbestellwert ist nicht erreicht. ({{priceTotalInCartFormatted}}&euro; < {{currentMinimalSum}}&euro;)</div>
          </f7-list-item>

          <f7-list-item>
            <f7-label>Telefonnummer *</f7-label>
            <!-- f7-icon icon="demo-list-icon" slot="media"></f7-icon -->
            <f7-input
                required
                validate
                :value="checkoutForm.phone.value"
                type="text" placeholder="" clear-button
                @change="onFieldChange($event, 'phone')"></f7-input>
          </f7-list-item>

          <f7-list-item>
            <f7-label>Bemerkung</f7-label>
            <!-- f7-icon icon="demo-list-icon" slot="media"></f7-icon -->
            <f7-input
                :value="checkoutForm.note.value"
                type="text"
                placeholder=""
                @change="onFieldChange($event, 'note')"
                clear-button>
            </f7-input>
          </f7-list-item>
        </f7-list>

        <CheckoutSum :minimalSum="minimalSum" :sum="priceTotalInCart"></CheckoutSum>
    </div>
</template>

<script>
import store from '../../store'
import CheckoutSum from './CheckoutSum'
import { f7Block, f7List, f7ListItem, f7Icon, f7Input, f7Label } from 'framework7-vue'
import Dom7 from 'dom7'
import utils from '../../services/utils'

const $$ = Dom7
const appConfig = window.appConfig

export default {
  name: 'Cart',
  data: function() {
    return {
        cartData: store.state.cartData,
        availableZipCodes: appConfig.supportedZipCodes
    }
  },
  computed: {
    zipInputClass: function() {
        //TODO merge with priceTotal...
        const sum = store.state.cartData.reduce((acc, item) => acc + (item.quantity * item.price), 0)

        const minimalSum = store.state.minimalSum

        if (minimalSum && sum < minimalSum) {
            return 'zip-code-input item-input-invalid'
        } else {
            return 'zip-code-input'
        }
    },

    preselectedZip: {
        get: function() {
            return store.state.checkoutForm.zip.value
                   || store.state.preselectedZip
                   || appConfig.supportedZipCodes[0].zip
        },

        set: function() {

        }
    },

    checkoutForm: function() {
      return store.state.checkoutForm
    },

    priceTotalInCart: function() {
      return utils.calculateTotalSumInCart(store.state.cartData)
    },

    priceTotalInCartFormatted: function() {
      return utils.toFixed(utils.calculateTotalSumInCart(store.state.cartData), 2)
    },

    minimalSum: function() {
      return store.state.minimalSum
    },

    currentMinimalSum: function() {
      const selectedZip = appConfig.supportedZipCodes.find(zipConfig => {
        return zipConfig.zip == store.state.checkoutForm.zip.value
      })

      return selectedZip && selectedZip.minimalSum
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

        this.validateOrderSum(value)},

    onFieldChange: function(e, fieldName) {
        const value = e.target.value
        const isInvalid = $$(e.target).hasClass('input-invalid')
        const updateActionPayload = {}

        updateActionPayload[fieldName] = {
            value: value,
            valid: !isInvalid
        }

        store.dispatch('updateCheckoutForm', updateActionPayload)
    },

    validate: function() {
        this.validateOrderSum(this.$refs.zipSelect.value)},

    validateOrderSum: function(zip) {
        const zipData = window.appConfig.supportedZipCodes.find(z => z.zip == zip)

        if (zipData) {
            const minimalSum = zipData.minimalSum

            store.dispatch('updateCheckoutForm', { zip: {
                value: zip,
                valid: true }})

            store.dispatch('selectMinimalSum', minimalSum) }}
  }
}
</script>

<style>
.checkout-container .list .item-inner {
    border-bottom: none;
}

.zip-code-input.item-input-invalid {
    margin-bottom: 10px;
}

</style>
