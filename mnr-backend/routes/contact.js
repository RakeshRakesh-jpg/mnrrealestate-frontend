import express from 'express';
import { sendContactMessage, getAllMessages } from '../controllers/contactController.js';

const router = express.Router();

// POST → Send a new contact form message
router.post('/', sendContactMessage);

// GET → Retrieve all saved messages
router.get('/', getAllMessages);

export default router;
