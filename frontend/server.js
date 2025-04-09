const express = require('express');
const { chatWithGemini } = require('./geminiService');

const app = express();
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;

  try {
    const reply = await chatWithGemini(prompt);
    res.json({ reply });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong with Gemini API' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Vibe Vault server running on port ${PORT}`));
