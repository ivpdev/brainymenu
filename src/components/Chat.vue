<template>
  <f7-page>
    <f7-navbar title="Chatbot"></f7-navbar>

    <!-- Messagebar -->
    <f7-messagebar
      placeholder="Send message"
      ref="messagebar" >
      <!-- Send message link -->
      <f7-link
        icon-if-ios="f7:arrow_up_fill"
        icon-if-md="material:send"
        slot="inner-end"></f7-link>
    </f7-messagebar>

    <!-- Messages -->
    <f7-messages ref="messages">
      <f7-messages-title><b>Sunday, Feb 9,</b> 12:58</f7-messages-title>
      <f7-message
        v-for="(message, index) in messagesData"
        :key="index"
        :type="message.type"
        :text="message.text"
        :image="message.image"
        :name="message.name"
        :avatar="message.avatar"
        :first="isFirstMessage(message, index)"
        :last="isLastMessage(message, index)"
        :tail="isTailMessage(message, index)"></f7-message>
    </f7-messages>
  </f7-page>

</template>

<script>
import {  f7Messages, f7Message, f7Messagebar,
f7MessageTitle, f7MessagesTitle, f7Link,f7Navbar, f7Page } from 'framework7-vue'

export default {
  name: 'Chat',
  data: function() {
    return {
        messagesData: []
    }
  },
  components: {
    f7Messages,
    f7Message,
    f7Messagebar,
    f7MessageTitle,
    f7MessagesTitle,
    f7Link,
    f7Navbar,
    f7Page
  }
}
</script>

<style scoped>

</style>
