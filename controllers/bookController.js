const { Book, Author } = require("../models/model");

const bookController = {
  //add book
  addBook: async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const savedBook = await newBook.save();
      if (req.body.author) {
        const author = Author.findById(req.body.author);
        await author.updateOne({ $push: { books: savedBook._id } });
      }
      res.status(200).json(savedBook);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //get books
  getBooks: async (req, res) => {
    try {
      const Books = await Book.find();
      res.status(200).json(Books);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //get a book
  getA_Book: async (req, res) => {
    try {
      const books = await Book.findById(req.params.id).populate("author");
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //update book
  updateBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      await book.updateOne({ $set: req.body });
      res.status(200).json("Update thanh cong");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  
  //delete book
  deleteBook: async (req, res) => {
    try {
      await Book.findByIdAndDelete(req.params.id);
      await Author.updateMany(
        { books: req.params.id },
        { $pull: { books: req.params.id } }
      );
      res.status(200).json("Xoa thanh cong");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = bookController;
