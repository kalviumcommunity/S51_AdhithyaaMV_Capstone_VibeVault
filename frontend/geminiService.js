const { GoogleGenerativeAI } = require('@google/generative-ai');


const genAI = new GoogleGenerativeAI('AIzaSyBHxwl61Nn19d9_xnvPCgoRLE3JO8AAVYk');

async function chatWithGemini(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error('Error with Gemini API:', error);
    throw error;
  }
}

module.exports = { chatWithGemini };
