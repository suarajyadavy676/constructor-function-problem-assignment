function author(name, birthYear, nationality){
    this.name = name
    this.birthYear = birthYear
    this.nationality = nationality
}
function book(title, author, genre, price){
    this.title = title
    this.author = author
    this.genre = genre
    this.price = price
    this.getBookInfo = () =>{
        console.log(`Title : ${this.title}`)
        console.log(`Author : ${this.author.name}`)
        console.log(`Genre : ${this.genre}`)
        console.log(`Price : ${this.price}`)
    }
}

// Create instances of Author and Book
const author1 = new author('vijay', 1965, 'Indian');
const book1 = new book('marvel', author1, 'Fantasy', 399);

const author2 = new author('George R.R. Martin', 1948, 'American');
const book2 = new book('A Game of Thrones', author2, 'Fantasy', 24.99);

const author3 = new author('Agatha Christie', 1890, 'British');
const book3 = new book('Murder on the Orient Express', author3, 'Mystery', 14.99);

// Display book details for each book in the bookstore
console.log("This info is author1 and book1 ")
book1.getBookInfo();
console.log("This info is author2 and book2 ")
book2.getBookInfo();
console.log("This info is author3 and book3 ")
book3.getBookInfo();