<template>
<div class="item-content dish-list-item">
    <div class="item-media">
      <img v-bind:src="thumbnail" class="thumbnail" ref="thumbnail">
    </div>
    <div class="item-inner">
      <div class="item-title-row">
        <div class="item-title">{{item.name}}</div>
        <div class="item-after">
            <f7-button
                fill
                round
                color="orange"
                icon-fa="cart-plus"
                @click="addToCart(item, $event)">
                {{item.price}} &euro;
            </f7-button>
        </div>
      </div>

     <Spiciness v-if="item.spiciness" :spiciness="item.spiciness"></Spiciness>

      <div class="item-text">
        {{item.note || item.description}}
      </div>

      <!-- TODO vegan -->

     <!-- TODO check if nutrition facts are not empty -->
     <div v-if="item.nutritionFacts">
        <f7-button
            round
            small

            color="green"
            popover-open=".popover-nutrition-facts"
            class="button-in-list-content">
            Nährwerte
        </f7-button>
        <f7-popover ref="nutritionFactsPopover" class="popover-nutrition-facts">
            <NutritionFacts v-bind:nutritionFacts="item.nutritionFacts"></NutritionFacts>
        </f7-popover>
     </div>

     <div v-if="item.allergens">
        <f7-button
            round
            small
            color="red"
            @click="openAllergensPopover"
            class="button-in-list-content">
            Allergene
        </f7-button>
        <f7-popover
            ref="allergensPopover"
            class="popover-allergens">
            <Allergens :allergens="item.allergens"></Allergens>
        </f7-popover>
     </div>
     <div v-if="item.additives">
        <f7-button
            round
            small

            color="orange"
            @click="openAdditivesPopover"
            class="button-in-list-content">
            Zusatzstoffen
        </f7-button>
        <f7-popover
            ref="additivesPopover"
            class="popover-additives">
            <Additives :additives="item.additives"></Additives>
        </f7-popover>
     </div>
    </div>
</div>
</template>

<script>
import store from '../../store'
import { f7Button, f7Popover, f7Chip } from 'framework7-vue'
import NutritionFacts from './NutritionFacts'
import Allergens from './Allergens'
import Additives from './Additives'
import Spiciness from './Spiciness'

export default {
  name: 'DishListItem',
  components: {
    f7Button,
    f7Popover,
    f7Chip,
    NutritionFacts,
    Allergens,
    Additives,
    Spiciness
  },
  computed: {
    thumbnail: function() {
        const pics = this.item.pics
        //TODO small size for thumbnail

        if (pics && pics.length && pics.length > 0) {
            const mainPic = pics[0]

            return mainPic || this.defaultImage || ''
        } else {
            return this.defaultImage || ''
        }
    }
  },
  methods: {
    addToCart: function(item) {
      store.dispatch("addToCart", item)

      this.performFlyToCartAnimation()
    },

    openAdditivesPopover: function(e) {
      this.$refs.additivesPopover.open(e.target)
    },

    openAllergensPopover: function(e) {
      this.$refs.allergensPopover.open(e.target)
    },

    performFlyToCartAnimation: function() {
        const target = $('.fa-shopping-cart') //TODO avoid doing lookup every time
        const targetPosition = target.offset()

        const itemThumbnail = $(this.$refs.thumbnail)
        const startPosition = itemThumbnail.offset()

        const flyingItem = itemThumbnail.clone()
        flyingItem.appendTo(itemThumbnail.parent())

        flyingItem.css('position', 'fixed')
        flyingItem.css('top', startPosition.top)
        flyingItem.css('left', startPosition.left)
        flyingItem.animate({
            top: (targetPosition.top - 10) + 'px',
            left: (targetPosition.left - 10) + 'px',
            width: '40px',
            height: '40px'
        }, 700)

        setTimeout(function() {
            flyingItem.remove()
        }, 700)
    }
  },
  props: {
    item: Object,
    defaultImage: String
  }
}
</script>

<style>
/* TODO title no cut */

.thumbnail {
    width: 8em;
    height: 6em;
}

.thema-red .dish-list-item .item-inner {
    border-bottom: 1px solid #e28b8b;
}

.thema-red .item-title {
    /*color: #880707;*/
}

.button-in-list-content.button {
    display: table;
    border: solid 1px;
    float: left;
    margin-right: 4px;
    margin-top: 3px;
}

.spicy-3 {
    background: #7d0000;
}

.spicy-2 {
    background: #ea2707;
}

.spicy-1 {
    background: #ff5346;
}
</style>
