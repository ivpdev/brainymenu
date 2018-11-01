<template>
    <div class="foot-note">
        <f7-block>
            <div class="chip" @mouseover="onAllergensMouseIn">
              <div class="chip-label">Allergene</div>
            </div>
            <div class="chip" @mouseover="onAdditivesMouseIn">
              <div class="chip-label">Zusatzstoffen</div>
            </div>
            <div class="chip" @mouseover="onContactMouseIn">
              <div class="chip-label">Kontakt</div>
            </div>
        </f7-block>

        <f7-popover
            ref="allergensPopover">
            <div @mouseout="onAllergensMouseOut">
                <Allergens :allergens="allergens"/>
            </div>
        </f7-popover>

        <f7-popover
            ref="additivesPopover">
            <Additives :additives="additives"/>
        </f7-popover>

        <f7-popover
            ref="contactsPopover">
             <f7-block>
                {{contact}}
             </f7-block>
        </f7-popover>

        <br/><br/><br/>

    </div>
</template>

<script>
import { f7Block, f7Chip, f7Icon, f7Popover } from 'framework7-vue'
import Allergens from './dish-item/Allergens'
import Additives from './dish-item/Additives'

export default {
  name: 'FootNote',
  components: {
    f7Block, f7Chip, f7Icon, Allergens, Additives, f7Popover
  },
  computed: {
    allergens: function() {
        return this.mergeKeyAndTitle(this.data.allergens)
    },
    additives: function() {
        return this.mergeKeyAndTitle(this.data.additives)
    }
  },
  methods: {
    mergeKeyAndTitle: function(data) {
        const result = []
        if (data) {
            Object.keys(data).forEach((title) => {
                const key = data[title]
                const caption = key + ' - ' + title
                result.push(caption)
            })
        }

        return result
    },
    onAllergensMouseIn: function(e) {
        this.$refs.allergensPopover.open(e.target)
    },
    onAdditivesMouseIn: function(e) {
        this.$refs.additivesPopover.open(e.target)
    },
    onContactMouseIn: function(e) {
        this.$refs.contactsPopover.open(e.target)
    },
    onAllergensMouseOut: function() {
        console.log("out")
        //this.$refs.allergensPopover.close()
    }

  },
  props: {
    data: Object,
    contact: String
  }
}
</script>

<style>
</style>
