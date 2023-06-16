import {Router} from 'express'
import { translateToBraille } from './server'

const router = Router()

//POST /translate
router.post('/translate', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'Text is required' })
    }

    const brailleTranslation = translateToBraille(text);

    res.status(200).json({ brailleTranslation });
});

//GET /translation
router.get('/translations', (req, res) => {
    // Retrieve translations from the database or any other data source

    // Dummy data for example purposes
    const translations = [
        { id: 1, text: 'Hello', brailleTranslation: '⠓⠑⠇⠇⠕' },
        { id: 2, text: 'World', brailleTranslation: '⠺⠕⠗⠇⠙' },
    ];

    res.status(200).json({ translations })
});

export default router