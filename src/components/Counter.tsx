"use client";

import { useState } from "react";

const QUOTES = [
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "I love history.", author: "Chase Idleman" },
  { text: "I like my own posts on LinkedIn.", author: "Lauren Wright" },
];

export default function Counter() {
  const [count, setCount] = useState(0);
  const quote = QUOTES[count % QUOTES.length];

  function handleClick() {
    setCount((c) => c + 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <>
      <div style={{ maxWidth: "600px" }}>
        <p
          style={{
            fontSize: "1rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#94a3b8",
            marginBottom: "1rem",
          }}
        >
          Quote of the Day
        </p>
        <blockquote
          style={{
            fontSize: "1.75rem",
            fontWeight: 600,
            lineHeight: 1.4,
            color: "#f1f5f9",
          }}
        >
          &ldquo;{quote.text}&rdquo;
        </blockquote>
        <p style={{ marginTop: "1rem", color: "#64748b", fontSize: "1rem" }}>
          — {quote.author}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <p style={{ color: "#94a3b8", fontSize: "1rem" }}>
          {count === 0
            ? "Haven't clicked yet — give it a try!"
            : `You've been inspired ${count} time${count === 1 ? "" : "s"}.`}
        </p>

        <button
          onClick={handleClick}
          style={{
            padding: "0.75rem 2rem",
            fontSize: "1rem",
            fontWeight: 600,
            color: "#0f172a",
            background: "#38bdf8",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            transition: "background 0.15s",
          }}
          onMouseOver={(e) =>
            ((e.target as HTMLButtonElement).style.background = "#7dd3fc")
          }
          onMouseOut={(e) =>
            ((e.target as HTMLButtonElement).style.background = "#38bdf8")
          }
        >
          I&apos;m inspired!
        </button>

        {count > 0 && (
          <button
            onClick={handleReset}
            style={{
              background: "none",
              border: "none",
              color: "#475569",
              fontSize: "0.8rem",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Reset
          </button>
        )}
      </div>
    </>
  );
}
