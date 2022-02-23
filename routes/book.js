const bookController = require("../controllers/bookController");

const router = require("express").Router();

//add book
router.post("/", bookController.addBook);
//get books
router.get("/", bookController.getBooks);
//get a book
router.get("/:id", bookController.getA_Book);
//update book
router.put("/:id", bookController.updateBook);
//delete book
router.delete("/:id", bookController.deleteBook);

module.exports = router;
