import Database from "better-sqlite3";
const db = new Database('./data/books.db');

export const getBooksByAuthor = (author) => db.prepare('SELECT * FROM books WHERE author=?').all(author);
export const getBooksByYear = (year) => db.prepare('SELECT * FROM books WHERE publishYear=?').all(year)
