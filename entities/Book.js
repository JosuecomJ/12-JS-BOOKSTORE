const Product = require("./Product");

module.exports = class Book extends Product {
  constructor(title, synopsis, genre, pages, author, description, price, inStoke = 0) {
    super(`Livro: ${title}`, description, price, inStoke)
    this.title = title
    this.synopsis = synopsis
    this.genre = genre
    this.pages = pages
    this.author = author
  }
}