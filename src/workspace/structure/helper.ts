export function priorityBand(value: number): number {
  if (value <= -0.6) return -3;
  if (value <= -0.2) return -2;
  if (value < 0) return -1;
  if (value === 0) return 0;
  if (value <= 0.2) return 1;
  if (value <= 0.6) return 2;
  return 3;
}
