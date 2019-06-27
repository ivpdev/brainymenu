<template>
    <f7-block>
      <f7-block-title>Bitte wählen Sie Ihre PLZ</f7-block-title>

      <select
            class="input-with-value"
            ref="zipSelect"
            @change="persistSelectedValue">
            <option v-for="(zipData, index) in availableZipCodes"
                    :key="index"
                    :value="zipData.zip">
                            {{zipData.zip}} ({{zipData.place}})</option>
        </select>
    </f7-block>
</template>

<script>

import store from '../store'
import { f7Block, f7BlockTitle, f7List, f7ListItem, f7Icon, f7Input, f7Label } from 'framework7-vue'

const appConfig = window.appConfig

export default {
  name: 'CheckoutSum',
  data: function() {
      return {
          availableZipCodes: appConfig.supportedZipCodes
      }
  },
  components: {
    f7Block,
    f7BlockTitle,
    f7List,
    f7ListItem,
    f7Icon,
    f7Input,
    f7Label
  },
  methods: {
    persistSelectedValue: function() {
        const value = this.$refs.zipSelect.value
        store.dispatch('preselectZip', value)
        this.$emit('selected', value)
    }
  },
  props: {}
}

</script>

<style>

select.input-with-value {
    margin-left: 20px !important;
}

</style>