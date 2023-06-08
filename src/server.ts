import express from 'express';

const app = express();

// Translation Logic
const translateToBraille = (text: string): string => {
        const brailleMapping: { [key: string]: string } = {
          A: "⠈",
          B: "⠃",
          C: "⠉",
          D: "⠙",
          E: "⠑",
          F: "⠋",
          G: "⠛",
          H: "⠓",
          I: "⠊",
          J: "⠚",
          K: "⠅",
          L: "⠇",
          M: "⠍",
          N: "⠝",
          O: "⠕",
          P: "⠏",
          Q: "⠟",
          R: "⠗",
          S: "⠎",
          T: "⠞",
          U: "⠥",
          V: "⠧",
          W: "⠺",
          X: "⠭",
          Y: "⠽",
          Z: "⠵",
          ".": "⠲",
          ",": "⠂",
          ";": "⠆",
          ":": "⠒",
          "!": "⠖",
          "?": "⠦",
          "-": "⠤",
          "'": "⠄",
          "(": "⠐",
          ")": "⠄⠆",
          "/": "⠌",
          "@": "⠈⠲",
          "$": "⠚⠴",
          "&": "⠯"
        };
      
        let brailleText = "";
        for (let i = 0; i < text.length; i++) {
          const char = text[i].toUpperCase();
          if (brailleMapping.hasOwnProperty(char)) {
            brailleText += brailleMapping[char];
          } else {
            brailleText += char;
          }
        }
  return 'Braille Translation: ' + brailleText;
};

app.use(express.json());

app.get('/', (req, res) => {
  console.log('Hello from Express');
  res.status(200).json({ message: 'Hello' });
});

app.post('/translate', (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  const brailleTranslation = translateToBraille(text);

  res.status(200).json({ brailleTranslation });
});

export default app;
