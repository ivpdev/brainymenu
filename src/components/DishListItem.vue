<template>
<div class="item-content">
    <div class="item-media">
      <img v-bind:src="thumbnail" class="thumbnail">
    </div>
    <div class="item-inner">
      <div class="item-title-row">
        <div class="item-title">{{item.name}}</div>
        <div class="item-after">
            <f7-button fill round
                color="orange"
                icon-fa="cart-plus"
                @click="addToCart(item)">
                {{item.price}} &euro;
            </f7-button>
        </div>
      </div>
      <!-- div class="item-subtitle">item.note</div -->
      <div class="item-text">{{item.note}}</div>
    </div>
</div>
</template>

<script>
import store from '../store'
import { f7Button } from 'framework7-vue'
import Framework7 from 'framework7'

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

            return mainPic || ''
        } else {
            return ''
        }
    }
  },
  methods: {
    addToCart: function(item) {
      store.dispatch("addToCart", item)
    }
  },
  props: {
    item: Object
  }
}
</script>

<style>
.thumbnail {
    width: 6em;
    height: 6em;
}

.thema-red .item-inner {
    border-bottom: 1px solid #e28b8b;
}
.thema-red .item-title {
    /*color: #880707;*/
}
</style>
