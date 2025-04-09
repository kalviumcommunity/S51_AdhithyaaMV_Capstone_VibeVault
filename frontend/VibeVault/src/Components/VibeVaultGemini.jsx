// src/components/VibeVaultGemini.jsx
import React, { useState } from "react";

// Gemini SDK ESM import
import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const API_KEY = "AIzaSyBHxwl61Nn19d9_xnvPCgoRLE3JO8AAVYk";

function VibeVaultGemini() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    setResponse("");
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    try {
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      setResponse(text);
    } catch (error) {
      console.error(error);
      setResponse("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🎶 Vibe Vault + Gemini AI 🤖</h2>

      <textarea
        style={styles.textarea}
        rows="4"
        placeholder="Ask Gemini anything (e.g., Suggest a happy Tamil playlist)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button style={styles.button} onClick={handleSend} disabled={loading}>
        {loading ? "Thinking..." : "Send to Gemini"}
      </button>

      <h3 style={styles.subtitle}>Response:</h3>
      <pre style={styles.response}>{response}</pre>
    </div>
  );
}

// Simple inline styles
const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "10px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  subtitle: {
    marginTop: "20px",
  },
  response: {
    textAlign: "left",
    backgroundColor: "#f4f4f4",
    padding: "10px",
    borderRadius: "5px",
    whiteSpace: "pre-wrap",
  },
};

export default VibeVaultGemini;
