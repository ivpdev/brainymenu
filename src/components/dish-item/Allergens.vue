<template>
  <f7-block class="allergens-container">
    <f7-chip
        v-for="(allergen, index) in allergens"
        :text="allergen"
        color="red"
        class="allergen"></f7-chip>
  </f7-block>
</template>

<script>
import Framework7 from 'framework7'
import { f7Chip, f7Block } from 'framework7-vue'

export default {
  name: 'Allergens',
  components: {
    f7Chip,
    f7Block
  },
  props: {
    allergens: Array
  }
}
</script>

<style>
.allergen {
    margin-right: 7px;
}

.allergens-container.block {
    margin: 17px 0;
}
</style>