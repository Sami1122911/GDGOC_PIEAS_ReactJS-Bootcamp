//Rating higher than 4.5
const highRating = books => books.filter(book => book.Rating > 4.5).forEach(book => console.log(book.Title));
highRating(books);
//details of books
const printBookDetails = books => {
    books.forEach(({ Title, Author, Rating, Genere }) => {
        console.log(`Title: ${Title}, Author: ${Author}, Rating: ${Rating}, Genre: ${Genere}`);
    });
};
printBookDetails(books);
//Title and genere
const printFictionBooks = books => {
    books.filter(book => book.Genere === "Fiction").forEach(book => console.log(book.Title));
};
printFictionBooks(books);
//array of authors
const getAuthors = books => {
    const authors = books.map(book => book.Author);
    console.log(authors);
};
getAuthors(books);