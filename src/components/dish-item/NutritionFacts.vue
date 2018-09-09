<template>
    <div class="data-table">
      <table>
        <thead>
          <tr>
            <th class="label-cell"></th>
            <th class="label-cell">Pro 100g</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="label-cell">Brennwert</td>
            <td class="numeric-cell">{{nutritionFacts.calories}} kcal</td>
          </tr>
          <tr>
            <td class="label-cell">Fett</td>
            <td class="numeric-cell">{{nutritionFacts.fat}} g</td>
          </tr>
          <tr>
            <td class="label-cell">Kohlenhydrate</td>
            <td class="numeric-cell">{{nutritionFacts.carbohydrate}} g</td>
          </tr>
          <tr>
            <td class="label-cell">Eiweiß</td>
            <td class="numeric-cell">{{nutritionFacts.protein}} g</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import Framework7 from 'framework7';

export default {
  name: 'NutritionFacts',
  props: {
    nutritionFacts: Object
  }
}
</script>