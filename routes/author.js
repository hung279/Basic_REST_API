const authorController = require('../controllers/authorController');

const router = require('express').Router();

//add Author
router.post('/', authorController.addAuthor);
//get authors
router.get('/', authorController.getAuthors);
//get an author
router.get('/:id', authorController.getAnAuthor);
//update author
router.put('/:id', authorController.updateAuthor);
//delete author
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;