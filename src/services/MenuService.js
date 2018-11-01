const _ = require('lodash')

const mapDishes = (menu, func) => {
    return menu.map(category => {//TODO check if not modifying
         const newItems = _.map(category.items, func)
         //const result = func(category)
         category.items = newItems

         return category
    })
}

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

    propagateSupplementedBy: function(menu) {
        return menu.map(category => {
            if (category.supplementedBy) {
                const supplementedByItems = this.resolveSupplementedBy(category.supplementedBy, menu)

                category.items = category.items.map(item => this.addSupplementedByToItem(supplementedByItems, category.supplementPrompt, item))
            }

            return category
        })
    },

    amendItemItemNameWithFootNoteData: function(item, footNoteData) {
        const allergensStr = _.map(item.allergens, (allergen => footNoteData.allergens[allergen])).join(', ')
        const additivesStr = _.map(item.additives, (additive => footNoteData.additives[additive])).join(', ')
        const nameExtension = []

        if (allergensStr) {
            nameExtension.push(allergensStr)
        }

        if (additivesStr) {
            nameExtension.push(additivesStr)
        }

        item.name = item.name + ' ' + nameExtension.join(', ')

        return item
    },

    amendItemsWithFootNoteData: function(menu, footNoteData) {
        const self = this

        return mapDishes(menu, dish => self.amendItemItemNameWithFootNoteData(dish, footNoteData))
    },

    prepareMenu: function(menu, footNoteData) {
        let result = _.cloneDeep(menu)

        result = this.propagateSupplementedBy(result)

        //TODO if
        result = this.amendItemsWithFootNoteData(result, footNoteData)

        return result
    }
}

export default MenuService