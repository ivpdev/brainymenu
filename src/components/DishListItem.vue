<template>
<div class="item-content dish-list-item">
    <div class="item-media">
      <img v-bind:src="thumbnail" class="thumbnail" ref="thumbnail">
    </div>
    <div class="item-inner">
      <div class="item-title-row">
        <div class="item-title">{{item.name}}</div>
        <div class="item-after">
            <f7-button fill round
                color="orange"
                icon-fa="cart-plus"
                @click="addToCart(item, $event)">
                {{item.price}} &euro;
            </f7-button>
        </div>
      </div>
      <div class="item-text">{{item.note || item.description}}</div>
    </div>
</div>
</template>

<script>
import store from '../store'
import { f7Button } from 'framework7-vue'

export default {
  name: 'DishListItem',
  components: {
    f7Button
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
</style>
