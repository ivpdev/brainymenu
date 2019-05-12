<template>
  <f7-block class="allergens-container">
    <span v-for="(allergen, index) in allergens">{{renderAllergen(allergen, index, allergens)}}</span>
    <!-- f7-chip v-for="(allergen, index) in allergens" :text="allergen" color="red" small class="allergen"></f7-chip -->
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
  methods: {
    renderAllergen(allergen, index, allergens) {
        const isLast = index === (allergens.length - 1)

        return isLast ? allergen : allergen + "; "
    }
  },
  props: {
    allergens: Array
  }
}
</script>

<style>
.chip.allergen {
    margin-right: 7px;

    font-size: 12px;
    height: 26px;
}

.allergens-container.block {
    margin: 17px 0;
}
</style>