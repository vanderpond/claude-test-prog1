import Counter from "@/components/Counter";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        gap: "2.5rem",
        textAlign: "center",
      }}
    >
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
          "The secret of getting ahead is getting started."
        </blockquote>
        <p
          style={{
            marginTop: "1rem",
            color: "#64748b",
            fontSize: "1rem",
          }}
        >
          — Mark Twain
        </p>
      </div>

      <Counter />
    </main>
  );
}
