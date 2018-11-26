const _ = require('lodash')
import OpeningTimeService from './OpeningTimeService'
const MenuFilterer = require('menu-filterer')

const mapDishes = (menu, func) => {
    return menu.map(category => {//TODO check if not modifying
         const newItems = _.map(category.items, func)
         //const result = func(category)
         category.items = newItems

         return category
    })
}

const filterDishes = (menu, func) => {
    const result = []

    menu.forEach(category => {
        const newItems = category.items.filter(item => func(item))

        if (!_.isEmpty(newItems)) {
            category.items = newItems
            result.push(category)
        }
    })

    return result
}

const traitUtil = {//TODO duplicate with bot-app
  negPostfix: "-NEG",

  isNegative: function(trait) {
    return trait.indexOf(this.negPostfix) != -1
  },

  invertTrait: function(trait) {
    const isNegative = this.isNegative(trait)

    if (!isNegative) {
        return trait + this.negPostfix
    } else {
        return trait.substr(0,trait.length - this.negPostfix.length)
    }
  }
}

const hasTraitOrComplement = (arr, trait) => {//TODO duplicate with bot-app
    return arr.indexOf(trait) !== -1 || arr.indexOf(traitUtil.invertTrait(trait)) !== -1
}

const combine = (arr1, arr2) => {//TODO duplicate with bot-app
    if (arr1 === undefined && arr2 === undefined) return undefined

    if (arr1 === undefined) return arr2

    const notOverlapped = _.filter(arr2, arr2item => !hasTraitOrComplement(arr1, arr2item) )

    return arr1.concat(notOverlapped)
}

const propagateCategoryTraits = (category) => {//TODO duplicate with bot-app
    const result = _.cloneDeep(category)
    result.items = _.map(category.items, (item) => {
        item.traits = combine(item.traits, category.traits)
        return item
    })
    return result
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

    propagateAvailableAt: function(menu) {
        return menu.map(category => {
            if (category.availableAt) {
                category.items = category.items.map(item => {
                    if (category.availableAt) {
                        item.availableAt = category.availableAt
                    }

                    if (category.unavailableExcuse) {
                        item.unavailableExcuse = category.unavailableExcuse
                    }

                    return item
                })
            }

            return category
        })

        return menu
    },

    removeUnavailableItems: function(menu) {
        return filterDishes(menu, item => {
            if (!item.availableAt) {
                return true
            } else {
                return OpeningTimeService.isAvailableNow(item.availableAt)
            }
        })
    },

    checkDishesAvailability: function(dishes) {
        const available = true
        const errors = []

        dishes.forEach(dish => {
            const dishAvailable = OpeningTimeService.isAvailableNow(dish.availableAt)

            if (!dishAvailable) {
                available = false

                if (dish.unavailableExcuse) { // TODO excuse => reason
                    errors.push({
                        dishName: dish.name,
                        reason: dish.unavailableExcuse
                    })
                }
            }
        })
        //TODO test

        return {
            available: available,
            errors: errors
        }
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

    prepareMenu: function(menu, footNoteData, filterTerm) {
        let result = _.cloneDeep(menu)

        /*let filterTerm = {
            traits: ["vegetarisch"]
        }*/

        result =_.map(menu, propagateCategoryTraits)

        //TODO normalize menu

        result = this.propagateSupplementedBy(result)
        result = this.propagateAvailableAt(result)
        result = this.removeUnavailableItems(result)
        result = MenuFilterer.filter(menu, filterTerm)

        //TODO if
        result = this.amendItemsWithFootNoteData(result, footNoteData)

        return result
    }
}

export default MenuService