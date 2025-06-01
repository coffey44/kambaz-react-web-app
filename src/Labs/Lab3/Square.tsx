export default function Square({ children }: { children: number }) {
  return <span id="wd-square">{Number(children) * Number(children)}</span>;
}