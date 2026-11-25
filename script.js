const graph = {
  Python: ['Recursion', 'Stack'],
  Recursion: ['Python', 'Sorting', 'Graph'],
  Stack: ['Python', 'Tree'],
  Sorting: ['Recursion', 'Tree'],
  Tree: ['Stack', 'Sorting', 'Graph'],
  Graph: ['Recursion', 'Tree'],
};

// Breadth-first search finds the path with the fewest edges in an unweighted graph.
function breadthFirstSearch(start, goal) {
  const queue = [start];
  const previous = new Map([[start, null]]);
  const visitOrder = [];
  while (queue.length > 0) {
    const current = queue.shift();
    visitOrder.push(current);
    if (current === goal) break;
    for (const neighbor of graph[current]) {
      if (!previous.has(neighbor)) {
        previous.set(neighbor, current);
        queue.push(neighbor);
      }
    }
  }
  if (!previous.has(goal)) return { path: [], visitOrder };
  const path = [];
  for (let node = goal; node !== null; node = previous.get(node)) path.unshift(node);
  return { path, visitOrder };
}

const startSelect = document.querySelector('#start-topic');
const endSelect = document.querySelector('#end-topic');
const routeOutput = document.querySelector('#route-output');
const routeDetail = document.querySelector('#route-detail');
const visitCount = document.querySelector('#visit-count');
const nodes = [...document.querySelectorAll('.topic-node')];

function findRoute() {
  const start = startSelect.value;
  const goal = endSelect.value;
  const { path, visitOrder } = breadthFirstSearch(start, goal);
  const pathEdges = new Set(path.slice(1).map((node, i) => [path[i], node].sort().join('|')));

  nodes.forEach((node) => {
    const name = node.dataset.topic;
    node.classList.toggle('on-path', path.includes(name));
    node.classList.toggle('is-start', name === start);
    node.classList.toggle('is-goal', name === goal);
  });
  document.querySelectorAll('.network-lines line').forEach((line) => {
    line.classList.toggle('on-path', pathEdges.has(line.dataset.edge));
  });

  routeOutput.textContent = path.length ? path.join('  →  ') : '경로를 찾을 수 없습니다.';
  routeDetail.textContent = start === goal
    ? '시작과 도착 주제가 같습니다.'
    : `정점 ${visitOrder.length}개를 확인해 최단 경로 ${path.length - 1}단계를 찾았습니다.`;
  visitCount.textContent = `${visitOrder.length} NODES VISITED`;
}

document.querySelector('#find-route').addEventListener('click', findRoute);
nodes.forEach((node) => {
  node.addEventListener('click', () => {
    startSelect.value = node.dataset.topic;
    visitCount.textContent = `START: ${node.dataset.topic.toUpperCase()}`;
    nodes.forEach((item) => item.classList.toggle('is-start', item === node));
  });
});
