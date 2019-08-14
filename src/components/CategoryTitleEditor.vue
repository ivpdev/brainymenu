<template>

<span>
    <f7-link
        @click="onEditButtonClick"
        icon-fa="edit"
        v-if="!open"
        />
    <input
        v-if="open"
        ref="input"
        :value="categoryTitle"
        @keyup="onKeyUp" />

    <f7-link
        icon-fa="check"
        icon-only
        @click="submit"
        v-if="open" />
</span>

</template>

<script>
import { f7Icon, f7Link } from 'framework7-vue'

export default {
  name: 'CategoryTitleEditor',
  components: {
    f7Icon,
    f7Link
  },
  computed: {

  },

  data: function() {
      return {
        open: false
      }
  },

  methods: {
    onKeyUp: function(e) {
        if (e.keyCode == 13) {
            this.submit();
        }
    },

    onEditButtonClick() {
        //this.$emit('editButtonClick');
        this.open = true;
    },


    submit: function() {
        const categoryName = this.$refs.input.value;

        this.$emit("submit", categoryName);
        this.open = false;
    }

  },
  props: {
    categoryTitle: String
  }
}
</script>

<style>
</style>

