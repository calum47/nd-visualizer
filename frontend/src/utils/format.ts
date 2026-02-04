export function formatShutter(sec: number): string {
  if (sec >= 1) return `${sec.toFixed(1)}s`;
  return `1/${Math.round(1 / sec)}`;
}
