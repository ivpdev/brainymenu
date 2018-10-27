const _ = require('lodash')

const MenuService = {
    findItemByReference: function(ref, menu) {
        const category = menu.find(category => category.category === ref.category)
        return category.items.find(item => item.name === ref.item)
    },

    resolveSupplementedBy: function(supplementedBy, menu) {
        return supplementedBy.map(supplementedByDef => {
            const isReference = !!supplementedByDef.reference

            if (isReference) {
                return this.findItemByReference(supplementedByDef.reference, menu)
            } else {
                return supplementedByDef
            }
        })
    },

    addSupplementedByToItem: function(supplementedBy, supplementPrompt, item) {
        if (!item.onlyAsSupplement) {
            item.supplementedBy = supplementedBy
            item.supplementPrompt = supplementPrompt
        }

        return item
    },

    prepareMenu: function(menu) {
        const result = _.cloneDeep(menu)

        return result.map(category => {
            if (category.supplementedBy) {
                const supplementedByItems = this.resolveSupplementedBy(category.supplementedBy, menu)

                category.items = category.items.map(item => this.addSupplementedByToItem(supplementedByItems, category.supplementPrompt, item))
            }

            return category
        })
    }
}

export default MenuService