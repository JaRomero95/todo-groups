export default function ({pos: posA}, {pos: posB}) {
  if (posA < posB) {
    return -1;
  } else if (posB < posA) {
    return 1;
  }

  return 0;
}
