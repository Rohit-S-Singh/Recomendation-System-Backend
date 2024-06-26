// Assuming you already have the necessary imports and setup for your Express app

const express = require('express');
const router = express.Router();
const communityController = require('../controllers/community');

// Route for creating a new community
router.post('/', communityController.createCommunity);

// Route for getting all communities
router.get('/', communityController.getAllCommunities);

// Route for deleting a community by ID
router.get('/delete/:id', communityController.deleteCommunity);


router.post('/:id/join', communityController.joinCommunity);

module.exports = router;
