export default function timeCounter(position) {
  let playerPosition = Math.floor(position);
  let minute = Math.floor(playerPosition / 60);
  if (minute >= 1) {
    return `${minute}:${playerPosition - minute * 60}`;
  }
  return `00:${playerPosition}`;
}
