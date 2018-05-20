<template>
    <div class="app thema-red">
      <f7-view main>
          <f7-page>
            <Menu v-bind:data="menuData"/>

            <f7-fab color="red"
                position="left-bottom"
                ref="menuButton"
                class="speed-dial-opened"
                @click="openMenu">

                <f7-icon f7="menu"></f7-icon>

                <f7-fab-buttons ref="menuButtons" class="speed-dial-opened">
                  <f7-fab-button color="orange" @click="onButtonClick">A</f7-fab-button>
                  <f7-fab-button color="green" @click="onButtonClick">B</f7-fab-button>
                  <f7-fab-button color="blue" @click="onButtonClick">C</f7-fab-button>
                </f7-fab-buttons>
              </f7-fab>
              <f7-fab color="red"
                      position="right-bottom" >
                  <f7-icon fa="shopping-cart"></f7-icon>
                  <f7-badge class="shopping-cart-count" color="orange">5</f7-badge>
              </f7-fab>
              <f7-fab color="red" position="center-bottom">
                  <f7-icon fa="comments"></f7-icon>
              </f7-fab>
          </f7-page>
      </f7-view>
    </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Framework7 from 'framework7'
import menuData from './menuData.json'
import {  f7Navbar, f7NavLeft, f7NavRight, f7NavTitle,
    f7Link, f7View, f7Page, f7Statusbar, f7Icon, f7Badge,
     f7Fab, f7FabButtons, f7FabButton } from 'framework7-vue'

export default {
  name: 'app',
  computed: {
    menuData: function() {
        return menuData
    }
  },
  components: {
    Menu,
    f7Navbar,
    f7NavLeft,
    f7NavRight,
    f7Link,
    f7View,
    f7Page,
    f7Statusbar,
    f7Icon,
    f7Badge,
    f7NavTitle,
    f7Fab,
    f7FabButtons,
    f7FabButton
  },
  methods: {
    openMenu: function() {
        console.log('openMenu')
    },
    onButtonClick: function() {

    }
  }
}
</script>

<style>
.shopping-cart-count {
    right: -11px;
    top: -9px;
    z-index: 1;
}

.thema-red .brainymenu-navbar.navbar {
    background-color: #c30808 !important;
}

.thema-red .fab.color-red>a {
    background-color: #b70a0a !important;
}

</style>
