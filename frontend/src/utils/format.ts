export function formatShutter(sec: number): string {
  if (sec <= 0) return "—";
  if (sec >= 1) return `${sec.toFixed(1)}s`.replace(".0s", "s");
  const inv = Math.round(1 / sec);
  return `1/${inv}`;
}

export function formatStops(stops: number): string {
  const s = Math.round(stops * 100) / 100;
  return `${s > 0 ? "+" : ""}${s} stops`;
}
