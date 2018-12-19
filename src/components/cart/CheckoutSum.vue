<template>
    <div class="checkout-sum">
        <h3 class="main-text">Summe total: {{sumFormatted}} &euro;</h3>
        <!-- h4 v-if="minimalSum && sum < minimalSum" class="error-message">Mindestbestellwert für Ihre Adresse ({{minimalSum}} &euro;) ist nicht erreicht.</h4 -->
    </div>
</template>

<script>
import { f7Block, f7List, f7ListItem, f7Icon, f7Input, f7Label } from 'framework7-vue'
import utils from '../../services/utils'

export default {
  name: 'CheckoutSum',
  data: function() {
    return {
    }
  },
  components: {
    f7Block,
    f7List,
    f7ListItem,
    f7Icon,
    f7Input,
    f7Label
  },
  methods: {

  },

  computed: {
    sumFormatted: function() {
        return utils.toFixed(this.sum, 2)
    }
  },

  props: {
    sum: Number,
    minimalSum: Number
  }
}
</script>

<style>
.error-message {
    color: #f44336;
}

.checkout-sum h3 {
    text-align: center;
}
</style>
