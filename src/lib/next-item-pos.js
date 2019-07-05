const MAX_POSITION = 100000;

function nextItemPosition(items) {
  return slowerPos(items) - 1;
}

function slowerPos(items) {
  if (items.length) {
    const positions = items.map(item => item.pos);
    return Math.min(...positions);
  }

  return MAX_POSITION;
}

export default nextItemPosition;
