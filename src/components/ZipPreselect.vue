<template>
    <f7-block>
      <f7-block-title>Bitte wählen Sie Ihre PLZ</f7-block-title>

        <f7-list ref="zipSelect">
            <f7-list-item
                radio
                v-for="(zipData, index) in availableZipCodes"
                name="zip"
                :key="index"
                @change="persistSelectedValue($event)"
                :value="zipData.zip"
                :title="zipData.zip + '(' + zipData.place + ')'"></f7-list-item>
        </f7-list>

      <!-- select
            class="input-with-value"
            ref="zipSelect"
            @change="deprecated_persistSelectedValue">
            <option v-for="(zipData, index) in availableZipCodes"
                    :key="index"
                    :value="zipData.zip">
                            {{zipData.zip}} ({{zipData.place}})</option>
        </select -->
    </f7-block>
</template>

<script>

import store from '../store'
import _ from 'lodash'
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
    persistSelectedValue: function(event) {
        const checked = _.get(event, 'target.checked');
        const value = _.get(event, 'target.value');

        if (checked) {
            store.dispatch('preselectZip', value)
            this.$emit('selected', value)
        }
    },

    deprecated_persistSelectedValue: function() {
        const value = this.$refs.zipSelect.value
        store.dispatch('preselectZip', value)
        this.$emit('selected', value)
    }
  },
  props: {}
}

</script>

<style>

.sheet-modal-inner .block,
.sheet-modal-inner .block .list {
    height: 100%;
}


.sheet-modal-inner .block .list ul {
    overflow-y: scroll;
    height: calc(100% - 82px);
}

select.input-with-value {
    margin-left: 20px !important;
}

</style>