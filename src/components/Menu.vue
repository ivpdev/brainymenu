<template>
        <f7-list v-bind:media-list="true" v-bind:accordion="true" class="menu-root">
            <f7-list-item v-for="(category, index) in data.menu" class="category-li"
                v-on:click="onCategoryHeaderClick(category, index)">

            <!-- f7-list-item accordion-item title="Accordion Item 1">
                <f7-accordion-content>
                  <f7-block>
                    <p>Accordion Item 1 Content</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu felis volutpat, rutrum ex quis, lobortis ex. Curabitur quis mattis lorem. Nullam magna lacus, interdum vel maximus nec, vestibulum non quam. Phasellus ornare efficitur porttitor. Quisque neque diam, imperdiet in fermentum nec, congue vitae ante. Nullam imperdiet maximus commodo. Morbi pharetra id purus ac ultrices. Duis non posuere libero.</p>
                  </f7-block>
                </f7-accordion-content>
              </f7-list-item -->


                <li class="list-group-title">{{category.category}}</li>
                <f7-list-group>
                   <DishListItem v-for="(item, index) in category.items" v-bind:item="item"/>
                </f7-list-group>
            </f7-list-item>
        </f7-list>

</template>

<script>

import { f7Card, f7List, f7ListGroup,
    f7ListItem, f7Button, f7Accordion, f7AccordionItem,
    f7AccordionToggle, f7AccordionContent, f7Block } from 'framework7-vue'
import Framework7 from 'framework7'
import DishListItem from './DishListItem'

const localState = {
    collapsed: {}
}

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
    f7Block
  },
  props: {
    data: Object
  },

  methods: {
    isCollapsed: function(categoryIndex) {
        return localState.collapsed[categoryIndex]
    },

    onCategoryHeaderClick: function(category, index) {
        this.toggleCollapsed(index)
    },

    toggleCollapsed: function(categoryIndex) {
        localState.collapsed[categoryIndex] = !localState.collapsed[categoryIndex]
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

.thema-red .list-group-title {
    background: #ce7474;
    color: white;
}

.chevron-down {
    background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D'13px'%20height%3D'8px'%2…209%202%209%209%202%209%202%2011%2010%2011'%3E%3C%2Fpolygon%3E%3C%2Fsvg%3E);
    background-size: 13px 13px;
}

.list-collapsed {
    display: none;
}

</style>
