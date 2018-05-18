<template>
<div class="app thema-red">
  <f7-statusbar></f7-statusbar>
  <f7-view main>
      <!-- Initial Page -->
      <f7-page>

    <Menu v-bind:data="menuData"/>

      </f7-page>
  </f7-view>
  </div>

</template>

<script>
import Menu from './components/Menu.vue'
import menuData from './menuData.json'
import {  f7Navbar, f7View, f7Page, f7Statusbar } from 'framework7-vue'


//console.log('XXX')
//console.log(menuData)

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
    f7View,
    f7Page,
    f7Statusbar
  }
}
</script>

<style>

</style>
