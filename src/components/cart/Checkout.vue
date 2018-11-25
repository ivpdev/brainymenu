<template>
    <div class="checkout-container">
        <f7-list no-hairlines-md>
          <f7-list-item>
              <!-- f7-icon icon="demo-list-icon" slot="media"></f7-icon -->
              <f7-label>E-Mail *</f7-label>

              <f7-input type="email"
                        validate
                        placeholder="E-mail"
                        :value="checkoutForm.email.value"
                        clear-button
                        @change="onEmailChange"></f7-input>
          </f7-list-item>

          <f7-list-item>
            <f7-label>Firma</f7-label>
            <f7-input
                :value="checkoutForm.firma.value"
                type="text" placeholder="" clear-button
                @change="onFirmaChange"></f7-input>
          </f7-list-item>

        <f7-list-item>
            <f7-label>Vorname *</f7-label>
            <!-- f7-icon icon="demo-list-icon" slot="media"></f7-icon -->
            <f7-input
                required
                validate
                :value="checkoutForm.firstname.value"
                type="text" placeholder="" clear-button
                @change="onFirstNameChange"></f7-input>
          </f7-list-item>

        <f7-list-item>
            <f7-label>Nachname *</f7-label>
            <!-- f7-icon icon="demo-list-icon" slot="media"></f7-icon -->
            <f7-input
                required
                validate
                :value="checkoutForm.lastname.value"
                type="text" placeholder="" clear-button
                @change="onLastNameChange"></f7-input>
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
             @change="onStreetChange"></f7-input>
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
                                {{zipData.zip}} ({{zipData.place}}) - Mindestbestellwert {{zipData.minimalSum}} &euro;</option>
            </select>
            <div class="item-input-error-message">Mindestbestellwert ist nicht erreicht. ({{priceTotalInCart}}&euro; < {{currentMinimalSum}}&euro;)</div>
          </f7-list-item>

          <f7-list-item>
            <f7-label>Telefonnummer *</f7-label>
            <!-- f7-icon icon="demo-list-icon" slot="media"></f7-icon -->
            <f7-input
                required
                validate
                :value="checkoutForm.phone.value"
                type="text" placeholder="" clear-button
                @change="onPhoneChange"></f7-input>
          </f7-list-item>

          <f7-list-item>
            <f7-label>Bemerkung</f7-label>
            <!-- f7-icon icon="demo-list-icon" slot="media"></f7-icon -->
            <f7-input
                :value="checkoutForm.note.value"
                type="text"
                placeholder=""
                @change="onNoteChange"
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
                   || (appConfig.supportedZipCodes && appConfig.supportedZipCodes[0].zip)
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

    minimalSum: function() {
      return store.state.minimalSum
    },

    currentMinimalSum: function() {
      const selectedZip = appConfig.supportedZipCodes
                            && appConfig.supportedZipCodes.find(zip => zip === store.state.checkoutForm.zip.value)

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
    onFirstNameChange: function(e) {
        const firstname = e.target.value
        const isInvalid = $$(e.target).hasClass('input-invalid')

        store.dispatch('updateCheckoutForm', { firstname: {
            value: firstname,
            valid: !isInvalid
        }})
    },

    onLastNameChange: function(e) {
        const lastname = e.target.value
        const isInvalid = $$(e.target).hasClass('input-invalid')

        store.dispatch('updateCheckoutForm', { lastname: {
            value: lastname,
            valid: !isInvalid
        }})
    },

    onPhoneChange: function(e) {
        const phone = e.target.value
        const isInvalid = $$(e.target).hasClass('input-invalid')

        store.dispatch('updateCheckoutForm', { phone: {
            value: phone,
            valid: !isInvalid
        }})
    },

    onStreetChange: function(e) {
        const street = e.target.value
        const isInvalid = $$(e.target).hasClass('input-invalid')

        store.dispatch('updateCheckoutForm', { street: {
            value: street,
            valid: !isInvalid

        } })
    },
    onEmailChange: function(e) {
        //TODO validate
        const email = e.target.value
        const isInvalid = $$(e.target).hasClass('input-invalid')
        store.dispatch('updateCheckoutForm', { email: {
                value: email,
                valid: !isInvalid }})},

    onZipChange: function(e) {
        const value = e.target.value

        this.validateOrderSum(value)},

    onFirmaChange: function(e) {
        const company = e.target.value
        const isInvalid = $$(e.target).hasClass('input-invalid')
        store.dispatch('updateCheckoutForm', { firma: {
                value: company,
                valid: !isInvalid }})},

    onNoteChange: function(e) {
        const note = e.target.value
        const isInvalid = $$(e.target).hasClass('input-invalid')
        store.dispatch('updateCheckoutForm', { note: {
                value: note,
                valid: !isInvalid }})},

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
