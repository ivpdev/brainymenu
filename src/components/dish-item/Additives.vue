<template>
  <f7-block class="additives-container">
    <f7-chip
        v-for="(additive, index) in additives"
        :text="additive"
        color="orange"
        class="additive"></f7-chip>
  </f7-block>
</template>

<script>
import Framework7 from 'framework7'
import { f7Chip, f7Block } from 'framework7-vue'

export default {
  name: 'Additives',
  components: {
    f7Chip,
    f7Block
  },
  props: {
    additives: Array
  }
}
</script>

<style>
.additive {
    margin-right: 7px;
}

.additives-container.block {
    margin: 17px 0;
}
</style>