<template>
<div class="app thema-red">
  <!-- f7-statusbar></f7-statusbar -->
  <f7-view main>
    <f7-navbar class="brainymenu-navbar">
         <f7-nav-left>
            <f7-link><f7-icon f7="menu"></f7-icon></f7-link>
          </f7-nav-left>

          <f7-nav-title title="Asia Little Dragon">
          </f7-nav-title>

          <f7-nav-right>
              <f7-link panel-open="right"><f7-icon fa="shopping-cart"></f7-icon></f7-link>
              <f7-badge class="shopping-cart-count" color="red">5</f7-badge>
          </f7-nav-right>
    </f7-navbar>
      <!-- Initial Page -->
      <f7-page>

<!-- div class="row">
    <div class="col-50"></div>
    <div class="col-50">OPA </div>
</div>
<div class="row">
    <div class="col-33">33%</div>
    <div class="col-33">33%</div>
    <div class="col-33">33%</div>
</div -->

<Menu v-bind:data="menuData"/>


      </f7-page>
  </f7-view>
  </div>

</template>

<script>
import Menu from './components/Menu.vue'
import menuData from './menuData.json'
import {  f7Navbar, f7NavLeft, f7NavRight, f7NavTitle,
    f7Link, f7View, f7Page, f7Statusbar, f7Icon, f7Badge } from 'framework7-vue'

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
    f7NavTitle
  }
}
</script>

<style>
.shopping-cart-count {
    right: 24px;
    top: -9px;
    z-index: 1;
}

.thema-red .brainymenu-navbar.navbar {
    background-color: #c30808 !important;
}

</style>
