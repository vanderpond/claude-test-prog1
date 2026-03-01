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
      <Counter />
    </main>
  );
}
