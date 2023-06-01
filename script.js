let productsStore = {
    {
        name: 'Samsung A32',
        price: 7500
    }
}

class productsStore{
    constructor(name, price){
        this.name = name
        this.price = price
    }
    bucket = []
    addItem(name, price) {
        this.bucket.push(
            {
                name,
                price
            })
    }
}
