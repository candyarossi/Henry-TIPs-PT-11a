function SolveGraph(graph, start, target, arr = []) {
  // Tu código aquí

  if (arr.includes(start)) return false;
  else arr.push(start);
  for (const nodo of graph[start]) {
    if (nodo === target) return true;
    if (SolveGraph(graph, nodo, target, arr)) return true;
  }
  return false;

  // KEVIN

  if (graph[start].includes(target)) return true;
  if (arr.includes(start)) {
    graph[start] = graph[start].filter((e) => e === start);
  }
  for (const x of graph[start]) {
    if (graph[x].includes(target)) return true;
    arr.push(x);
    SolveGraph(graph, x, target, arr);
  }
  return false;

  // ALE

  const visited = new Set();
  function research(node) {
    visited.add(node);
    if (node === target) {
      return true;
    }
    const neighbors = graph[node];
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        if (research(neighbor)) {
          return true;
        }
      }
    }
    return false;
  }
  return research(start);
}

module.exports = SolveGraph;
