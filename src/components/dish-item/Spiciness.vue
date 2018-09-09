<template>
  <div>
    <span :class="labelClass">{{spicinessLabel}}</span>
  </div>
</template>

<script>
import Framework7 from 'framework7'
import { f7Chip, f7Block } from 'framework7-vue'

export default {
  name: 'Spiciness',
  components: {
    f7Chip,
    f7Block
  },
  computed: {
    spicinessLabel: function() {
        if (this.spiciness === 1) {
            return 'leicht scharf'
        } else if (this.spiciness === 2) {
            return 'mittelscharf'
        } else if (this.spiciness === 3) {
            return 'sehr scharf'
        } else {
            console.error('unknown spiciness level')
            return ''
        }
    },

    labelClass: function() {
        return "spiciness-level-" + this.spiciness
    }
  },
  props: {
    spiciness: Number
  }
}
</script>

<style>
.spiciness-level-1 {
    color: #ff7474;
}
.spiciness-level-2 {
    color: #b90000;
}
.spiciness-level-3 {
    color: #8a0101;
}
</style>