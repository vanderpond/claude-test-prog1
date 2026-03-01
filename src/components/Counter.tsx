"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
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
        onClick={() => setCount((c) => c + 1)}
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
          onClick={() => setCount(0)}
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
  );
}
