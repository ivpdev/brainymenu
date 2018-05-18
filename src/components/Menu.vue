<template>
        <f7-list v-bind:media-list="true" class="menu-root">
            <f7-list-item v-for="(category, index) in data.menu" class="category-li">
                <li class="list-group-title">{{category.category}}</li>
                <f7-list-group>
                   <DishListItem v-for="(item, index) in category.items" v-bind:item="item"/>
                </f7-list-group>
            </f7-list-item>
        </f7-list>

</template>

<script>

import { f7Card, f7List, f7ListGroup, f7ListItem, f7Button } from 'framework7-vue'
import Framework7 from 'framework7'
import DishListItem from './DishListItem'

export default {
  name: 'Menu',
  components: {
    f7Card,
    f7List,
    f7ListItem,
    f7Button,
    f7ListGroup,
    DishListItem
  },
  props: {
    data: Object
  }
}
</script>

<style>

.list-group>ul {
    padding-left: 0 !important;
}

.category-li>.item-content {
    padding-left: 0 !important;
}
.category-li>.item-content>.item-inner {
    padding: 0 !important;
}

.menu-root {
    margin: 0 !important;
}

.thema-red .list-group-title {
    background: #b70a0a;
    color: white;
}

</style>
