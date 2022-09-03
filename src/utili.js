export const paperRockScissor = [`paper`, `rock`, `scissors`];

export function RandomNumberGenerator(maxNumber) {
  const ranNum = Math.random() * maxNumber;
  return ranNum;
}

export function Shoot() {
  const shot = RandomNumberGenerator(3);
  return shot;
}
