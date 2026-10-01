import express from 'express'
import * as db from './data/db.js'

const PORT = 3000;
const app = express();
app.use(express.json())

app.listen(PORT, () =>{
    console.log(`Server runs on port:${PORT}`)
})

app.get('/api/books/author/:author', (req, res)=>{
    const book = db.getBooksByAuthor(req.params.author)
    if(!book){
        return res.status(404).json(({message: 'No books found for this uthor'}));
    }
    return res.status(200).json(book)
})

app.get('/api/books/year/:year', (req,res)=>{
    const book = db.getBooksByYear(req.params.year);
    if(!book){
        return res.status(404).json({message: "No books found for this year"})
    }
    return res.status(200).json(book)
})