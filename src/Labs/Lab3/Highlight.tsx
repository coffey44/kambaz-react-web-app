export default function Highlight({ children }: { children: any }) {
  return (
    <span style={{ backgroundColor: "yellow", color: "red" }}>
      {children}
    </span>
  );
}