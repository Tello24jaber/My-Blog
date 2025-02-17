import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div style={{
      textAlign: "center",
      padding: "20px"
    }}>
      <h3 style={{
        fontSize: "28px",
        fontWeight: "bold",
        color: "#333",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px"
      }}>
        {greeting}! Thank you for visiting!
      </h3>

      <button
        onClick={() => setGreeting(randomMessage())}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "#fff",
          background: "linear-gradient(135deg, #6e45e2, #88d3ce)",
          border: "none",
          padding: "15px 30px",
          borderRadius: "50px",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
          boxShadow: "0px 4px 10px rgba(110, 69, 226, 0.3)",
          position: "relative",
          overflow: "hidden"
        }}
        onMouseOver={(e) => {
          e.target.style.background = "linear-gradient(135deg, #88d3ce, #6e45e2)";
          e.target.style.transform = "scale(1.1)";
          e.target.style.boxShadow = "0px 6px 14px rgba(110, 69, 226, 0.5)";
        }}
        onMouseOut={(e) => {
          e.target.style.background = "linear-gradient(135deg, #6e45e2, #88d3ce)";
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0px 4px 10px rgba(110, 69, 226, 0.3)";
        }}
        onMouseDown={(e) => {
          e.target.style.transform = "scale(0.95)";
          e.target.style.boxShadow = "0px 2px 6px rgba(110, 69, 226, 0.2)";
        }}
        onMouseUp={(e) => {
          e.target.style.transform = "scale(1.1)";
          e.target.style.boxShadow = "0px 6px 14px rgba(110, 69, 226, 0.5)";
        }}
      >
        🔄 New Greeting
      </button>
    </div>
  );
}
