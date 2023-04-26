module.exports = class Product {
  constructor(name, description, price, inStoke = 0) {
    this.name = name
    this.description = description
    this.price = price
    this.inStoke = inStoke
  }
  addToStock(quantity) {
    this.inStoke += quantity
  }
  removeFromStoke(quantity) {
    this.inStoke -= quantity
  }

}