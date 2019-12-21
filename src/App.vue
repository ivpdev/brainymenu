<template>
    <div class="app thema-red">
      <f7-view main>
          <f7-page ref="page">
            <Menu :menuData="menuData"
                  :defaultImage="defaultImage"
                  :footNoteData="footNoteData"
                  :footNoteContact="footNoteContact"
                  ref="menu"/>

            <f7-fab color="green"
                position="right-center"
                ref="menuButton"
                class="speed-dial-opened"
                v-if="editMode">

                <f7-icon f7="menu"></f7-icon>
                <f7-icon f7="close"></f7-icon>

                <f7-fab-buttons ref="menuButtons" class="speed-dial-opened">
                  <f7-fab-button color="orange" class="export-json-button" @click="onButtonClick">Export JSON</f7-fab-button>
                  <f7-fab-button color="orange" class="import-json-button" @click="onButtonClick">Import JSON</f7-fab-button>
                </f7-fab-buttons>
              </f7-fab>

            <f7-fab color="green"
                position="right-bottom"
                ref="addFab"
                v-if="editMode"
                >

                <f7-icon f7="add"></f7-icon>
                <f7-icon f7="close"></f7-icon>

                <f7-fab-buttons ref="menuButtons" class="speed-dial-opened">
                <f7-fab-button
                    color="green"
                    class="export-json-button"
                    @click="admin_onAddCategoryClick">Category</f7-fab-button>

                  <f7-fab-button color="green" class="import-json-button" @click="onButtonClick">Item</f7-fab-button>
                </f7-fab-buttons>
              </f7-fab>

            <f7-fab color="orange"
                position="left-bottom"
                ref="backButton"
                @click="onBackMenuClicked">
                {{ $t("back") }}
              </f7-fab>

              <f7-fab color="green"
                      position="center-bottom"
                      panel-open="left"
                      class="cart-button"
                      ref="fabCart"
                      v-if="!editMode"
                      @click="openCart">
                  <f7-icon fa="shopping-cart"></f7-icon>
                  {{ $t("go_to_checkout") }}
                  <f7-icon f7="close"></f7-icon>

                  <f7-badge class="shopping-cart-count" color="orange">{{itemsInCartCount}}</f7-badge>
              </f7-fab>

              <!-- f7-fab color="red"
                      position="right-bottom"
                      popup-open=".popup-chat"
                      @click="openChat">
                  <f7-icon fa="comments"></f7-icon>
              </f7-fab -->
          </f7-page>
      </f7-view>

      <f7-panel ref="chatPanel" right>
        <Chat></Chat>
      </f7-panel>

     <CartPanel ref="cartPanel"></CartPanel>
    <f7-sheet ref="zipPreselectPanel" @sheet:close="onZipPreselectPanelClose">
        <ZipPreselect ref="zipPreselect" @selected="closeZipPreselectPanel"/>
    </f7-sheet>

      <!-- f7-popup ref="cartPanel" class="popup-chat">
        <f7-page class="cart-page">
            <f7-navbar title="Cart" class="cart-navbar">
                <f7-nav-right>
                   <f7-link popup-close>Close</f7-link>
                </f7-nav-right>
                </f7-navbar>
                <Cart ref="cart"></Cart>
                <f7-fab class="checkout-fab"
                        color="red"
                        position="right-bottom"
                        popup-open=".popup-chat"
                        @click="goToCheckout">
                  BESTELLEN (<b>{{priceTotalInCart}} &euro;</b>)
              </f7-fab>
        </f7-page>
      </f7-popup -->

    </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Chat from './components/Chat.vue'
import Cart from './components/cart/Cart.vue'
import CartPanel from './components/cart/CartPanel.vue'
import ZipPreselect from './components/ZipPreselect'
import Framework7 from 'framework7'
import store from './store'
import { f7Navbar, f7NavRight, f7Sheet,
    f7Link, f7View, f7Page, f7Icon, f7Badge,
    f7Fab, f7FabButtons, f7FabButton, f7Panel, f7Popup } from 'framework7-vue'
import OpeningTimeService from './services/OpeningTimeService'

export default {
  name: 'app',
  computed: {
    menuData: function() {
        return store.state.menuData
    },

    editMode: function() {
        return store.state.editMode
    },

    footNoteData: function() {
        return store.state.footNoteData
    },

    footNoteContact: function() {
        return store.state.footNoteContact
    },

    defaultImage: function() {
        return store.state.defaultImage
    },

    itemsInCartCount: function() {
        return store.state.cartData.reduce((acc, item) => acc + item.quantity, 0)
    },

    priceTotalInCart: function() {
        return store.state.cartData.reduce((acc, item) => acc + (item.quantity * item.price), 0)
    }
  },
  data() {
      return {
        state: {
            cartOpened: false
        }
      }
  },
  components: {
    Menu,
    f7Navbar,
    f7NavRight,
    f7Sheet,
    f7Link,
    f7View,
    f7Page,
    f7Icon,
    f7Badge,
    f7Fab,
    f7FabButtons,
    f7FabButton,
    f7Panel,
    f7Popup,
    Chat,
    Cart,
    CartPanel,
    ZipPreselect
  },
  methods: {
    onBackMenuClicked: function() {
        this.$refs.menu.collapseAllCategories()
        this.scrollToTop()
    },

    scrollToTop: function() {
        const page = this.$refs.page
        const pageContent = page.$children.find(component => component.$el.className === 'page-content')
        pageContent.$el.scrollTop = 0
    },

    openCart: function() {
        if (OpeningTimeService.isOpenNow()) {
            this.$refs.cartPanel.open()
        } else {
             this.$f7.dialog.alert(OpeningTimeService.whyClosed(), "Wir sind geschlossen")
        }
    },

    openChat: function() {
        this.$refs.chatPanel.open()
    },

    onButtonClick: function() {
        //console.log('AAA')
    },

    goToCheckout: function() {
        this.$refs.cart.goToCheckout()
    },

    showGlobalMessage: function(message, title) {//TODO refactor
        this.$f7.dialog.alert(message, title ||'', () => {
            location.reload()
        })
    },

    showGlobalError: function(error, title) {
        this.$f7.dialog.alert(error, title ||'')
    },

    showZipPreselectionWindow: function() {
        this.$refs.zipPreselectPanel.open()
        if (Framework7.device.ios) {
            this.iosHackSelectDropdown()
        }
    },

    /* without this hack one should click select twice to open the dropdown */
    iosHackSelectDropdown: function() {
        const selectEl = window.$(".input-with-value")
        selectEl.focus()
    },

    closeZipPreselectPanel: function() {
        this.$refs.zipPreselectPanel.close()
    },

    onZipPreselectPanelClose: function() {
        this.$refs.zipPreselect.persistSelectedValue()
    },

    admin_onAddCategoryClick: function() {
        const fabEl = this.$refs.addFab.$el.getElementsByTagName("a")[2];

        const app = this.$f7;
        app.dialog.prompt('New category', '', (name) => {
            store.dispatch('admin_createCategory', name);
            fabEl.click(); //close
        });
    }
  },

  created: function() {
        store.eventBus.$on('showGlobalMessage', this.showGlobalMessage)
        store.eventBus.$on('showGlobalError', this.showGlobalError)
        store.eventBus.$on('requestZipPreselection', this.showZipPreselectionWindow)
  }
}
</script>

<style>
.shopping-cart-count {
    right: -11px;
    top: -7px;
    z-index: 1;
}

.fab div.fab-buttons a.export-json-button {
    width: 120px;
    right: 77px;
}

.fab div.fab-buttons a.import-json-button {
    width: 120px;
    right: 77px;
}

.thema-red .brainymenu-navbar.navbar {
    background-color: #c30808 !important;
}

.thema-red .cart-navbar.navbar {
    background-color: #ff9800 !important;
}

.thema-red .fab.color-red>a {
    background-color: #b70a0a !important;
}

.md .fab.checkout-fab>a,
.ios .fab.checkout-fab>a {
    width: 156px;
}

.cart-page .page-content {
    padding-bottom: 56px;
}

.fab.cart-button a {
    width: 150px;
}

.fab>a i.icon {
    right: 11px;
    left: unset;
}
</style>
