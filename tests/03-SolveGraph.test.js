const SolveGraph = require("../03-SolveGraph/SolveGraph");

describe("SolveGraph", function () {
  const graph = {
    a: ["c"],
    b: ["c"],
    c: ["s", "r"],
    d: ["a"],
    s: ["a", "c"],
    r: ["d"],
    z: ["z"],
  };
  it("Debería retornar TRUE para un camino a => r", function () {
    expect(SolveGraph(graph, "a", "r")).toEqual(true);
  });
  it("Debería retornar TRUE para un camino a => d", function () {
    expect(SolveGraph(graph, "a", "d")).toEqual(true);
  });
  it("Debería retornar FALSE para un camino de s => b", function () {
    expect(SolveGraph(graph, "s", "b")).toEqual(false);
  });
});
