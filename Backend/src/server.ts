import express from 'express'
import router from './router'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Translation logic
export const translateToBraille = (text: string): string => {
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
return brailleText;
};

app.use(express.json());

app.get('/', (req, res) => {
    console.log('Hello from express!')
})

app.post('/translate', (req, res) => {
    const { text } = req.body;
  
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }
  
    const brailleTranslation = translateToBraille(text);
  
    res.status(200).json({ brailleTranslation });
  });
  
//Mounting the router 
app.use('/api', router)
  

export default app