<template>
    <div class="foot-note">
        <f7-block>
            <table>
                <tr>
                    <td>
                        <div class="chip footnote-button" @mouseover="onAllergensMouseIn">
                          <div class="chip-label">Allergene</div>
                        </div></td>
                    <td>
                        <div class="chip footnote-button" @mouseover="onAdditivesMouseIn">
                          <div class="chip-label">Zusatzstoffen</div>
                        </div>
                    </td>
                    <td>
                        <div class="chip footnote-button" @mouseover="onContactMouseIn">
                          <div class="chip-label">Für weitere Fragen</div>
                        </div>
                    </td>
                </tr>
            </table>
        </f7-block>

        <f7-popover
            ref="allergensPopover">
            <div class="block-in-popover"
                @mouseleave="onAllergensMouseOut">
                <Allergens :allergens="allergens"/>
            </div>
        </f7-popover>

        <f7-popover
            ref="additivesPopover">
            <div class="block-in-popover"
                 @mouseleave="onAdditivesMouseOut">

                 <Additives :additives="additives" />
            </div>

        </f7-popover>

        <f7-popover
            class="contacts-popover"
            ref="contactsPopover">
             <div class="block-in-popover"
                  @mouseleave="onContactMouseOut">
                {{contact}}
             </div>
             <!-- f7-block>
                {{contact}}
             </f7-block -->
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
    onAllergensMouseOut: function() {
        this.$refs.allergensPopover.close()
    },
    onAdditivesMouseIn: function(e) {
        this.$refs.additivesPopover.open(e.target)
    },
    onAdditivesMouseOut: function() {
        this.$refs.additivesPopover.close()
    },
    onContactMouseIn: function(e) {
        this.$refs.contactsPopover.open(e.target)
    },
    onContactMouseOut: function() {
        this.$refs.contactsPopover.close()
    }
  },
  props: {
    data: Object,
    contact: String
  }
}
</script>

<style>
.contacts-popover .block-in-popover {
    padding: 12px;
}

.footnote-button {
    margin-right: 10px;
}
</style>
