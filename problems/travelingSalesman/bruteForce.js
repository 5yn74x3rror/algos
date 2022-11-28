const dist = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(y2-y1, 2) + Math.pow(x2-x1, 2));
};

const attack = points => {
  const els = [...points];
  const stack = [];
  stack.push(els[0]);
  let current = els.shift();

  while (els.length) {
      // find closest to current
      const dists = els.map(el => dist(current[0], current[1], el[0], el[1]));
      const min = Math.min(...dists);
      const minIdx = dists.findIndex(el => el === min);
      // remove the closes from els
      const removed = els.splice(minIdx, 1);
      // push it to stack
      stack.push(removed[0]);
      // change current to removed
      current = removed[0];
  }
  // add first again
  stack.push(first);
  let result = 0;
  for (let i = 0; i < stack.length - 1; i++) {
      result += dist(stack[i][0], stack[i][1], stack[i+1][0], stack[i+1][1])
  }
  return result;
}

console.log(attack([
  [9, 12],
  [24, 15],
  [12, 30],
  [4, 3],
  [13, 27],
]))