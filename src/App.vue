<template>
    <div class="app thema-red">
      <f7-view main>
          <f7-page>
            <Menu v-bind:data="menuData"/>

            <!-- f7-fab color="red"
                position="left-bottom"
                ref="menuButton"
                class="speed-dial-opened"
                v-bind:class="{ 'fab-opened': state.menuOpened }"
                @click="toggleMenuOpened">

                <f7-icon f7="menu"></f7-icon>

                <f7-fab-buttons ref="menuButtons" class="speed-dial-opened">
                  <f7-fab-button color="orange" @click="onButtonClick">A</f7-fab-button>
                  <f7-fab-button color="orange" @click="onButtonClick">B</f7-fab-button>
                  <f7-fab-button color="orange" @click="onButtonClick">C</f7-fab-button>
                </f7-fab-buttons>
              </f7-fab -->

              <f7-fab color="red"
                      position="center-bottom"
                      panel-open="left"
                      ref="fabCart"

                      @click="openCart">
                  <f7-icon fa="shopping-cart"></f7-icon>
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
            cartOpened: false,
            menuOpened: false
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
    openCart: function() {
        const openingInfo = OpeningTimeService.isOpenedNow() //TODO rename
        if (openingInfo.open) {
            this.$refs.cartPanel.open()
        } else {
             this.$f7.dialog.alert(openingInfo.closedReason, "Wir sind geschlossen")
        }
    },

    toggleMenuOpened: function() {
        this.state.menuOpened = !this.state.menuOpened //TODO
    },

    openChat: function() {
        this.$refs.chatPanel.open()
    },

    onButtonClick: function() {
        console.log('AAA')
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
    },

    closeZipPreselectPanel: function() {
        this.$refs.zipPreselectPanel.close()
    },

    onZipPreselectPanelClose: function() {
        this.$refs.zipPreselect.persistSelectedValue()
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

</style>
