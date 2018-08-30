const utils = {
    calculateTotalSumInCart: cartData => cartData.reduce((acc, item) => acc + (item.quantity * item.price), 0)
}

export default utils