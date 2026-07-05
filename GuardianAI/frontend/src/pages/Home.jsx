import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import ResultCard from "../components/ResultCard";

function Home() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    if (!message.trim()) return;

    setLoading(true);

    try {
      const res = await API.post("/analyze-text", {
        message,
      });

      setResult(res.data);
    } catch (err) {
      alert("Backend not running.");
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: 800,
          margin: "40px auto",
          padding: 20,
        }}
      >
        <h1>Guardian AI Scam Detector</h1>

        <textarea
          rows="8"
          style={{
            width: "100%",
            padding: 15,
            fontSize: 16,
          }}
          placeholder="Paste suspicious message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <br />
        <br />

        <button
          onClick={analyze}
          style={{
            padding: "12px 25px",
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          {loading ? "Analyzing..." : "Analyze Message"}
        </button>

        <ResultCard result={result} />
      </div>
    </>
  );
}

export default Home;