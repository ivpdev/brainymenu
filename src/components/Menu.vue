<template>
    <f7-list v-bind:media-list="true" v-bind:accordion="true" class="menu-root">
        <f7-list-item v-for="(category, index) in menuDataToDisplay" class="category-li"
            :key="index"
            v-on:click="onCategoryHeaderClick(category, index, $event)">
            <li class="list-group-title">
                <!-- f7-icon :fa="expanded[index] ? 'angle-up' : 'angle-down'"></f7-icon --> {{category.category}}</li>
            <f7-list-group :class="/*expanded[index]*/ true ? 'category-expanded' : 'category-collapsed'">
               <DishListItem
                    v-for="(item, index) in category.items"
                    :key="index"
                    :item="item"
                    :defaultImage="defaultImage" />
            </f7-list-group>
        </f7-list-item>
        <!-- FootNote :data="footNoteData"
                  :contact="footNoteContact"/ -->
    </f7-list>
</template>

<script>

import { f7Card, f7List, f7ListGroup,
    f7ListItem, f7Button, f7Accordion, f7AccordionItem,
    f7AccordionToggle, f7AccordionContent, f7Block,
    f7Icon } from 'framework7-vue'
import DishListItem from './dish-item/DishListItem'
import FootNote from './FootNote'
import Dom7 from 'dom7'

const $$ = Dom7

export default {
  name: 'Menu',
  components: {
    f7Card,
    f7List,
    f7ListItem,
    f7Button,
    f7ListGroup,
    DishListItem,
    f7Accordion,
    f7AccordionItem,
    f7AccordionToggle,
    f7AccordionContent,
    f7Block,
    f7Icon,
    FootNote
  },
  props: {
    menuData: Array,
    defaultImage: String,
    footNoteData: Object,
    footNoteContact: String
  },

  data: function() {
    return {
      expanded: { }
    }
  },

  computed: {
    menuDataToDisplay: function() {
        return this.menuData.map(category => { //TODO filter empty categories
            const visibleItems = category.items.filter(item => !item.onlyAsSupplement)
            category.items = visibleItems
            return category
        })
    }
  },

  methods: {
    collapseAllCategories: function() {
        for (var key in this.expanded) {
          if (this.expanded.hasOwnProperty(key)) {
            this.$set(this.expanded, key, null)
          }
        }
    },

    onCategoryHeaderClick: function(category, index, event) {
        const el = event.target
        const clickedOnHeader = $$(el).hasClass('list-group-title')

        if (!clickedOnHeader) return

        this.toggleCollapsed(index)
    },

    toggleCollapsed: function(categoryIndex) {
        this.$set(this.expanded, categoryIndex, !this.expanded[categoryIndex])
    }
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

.list-group-title {
    cursor: pointer;
}

.thema-red .list-group-title {
    background: #b70a0a;
    color: white;
    border-bottom: 1px solid white;
}

.chevron-down {
    background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D'13px'%20height%3D'8px'%2…209%202%209%209%202%209%202%2011%2010%2011'%3E%3C%2Fpolygon%3E%3C%2Fsvg%3E);
    background-size: 13px 13px;
}

.category-collapsed {
    display: none;
}

</style>
