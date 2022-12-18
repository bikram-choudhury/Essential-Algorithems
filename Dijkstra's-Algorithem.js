class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(value, priority) {
        this.values.push({ val: value, priority });
        this.sort()
    }
    sort() {
        this.values.sort(
            (prev, next) => prev.priority - next.priority
        );
    }
    dequeue() {
        return this.values.shift();
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vrtx) {
        if (!this.adjacencyList[vrtx]) this.adjacencyList[vrtx] = [];
    }
    addEdge(vrtx1, vrtx2, weight) {
        if (!this.adjacencyList[vrtx1] || !this.adjacencyList[vrtx2]) return null;
        this.adjacencyList[vrtx1].push({ node: vrtx2, weight });
        this.adjacencyList[vrtx2].push({ node: vrtx1, weight });
    }
    Dijkstra(start, end) {
        const path = [],  // to return at end
            distnces = {}, //
            previous = {},
            queue = new PriorityQueue();
        let smallest;

        // Build Initial state
        for (const vrtx in this.adjacencyList) {
            if (vrtx === start) {
                distnces[vrtx] = 0;
                queue.enqueue(vrtx, 0);
            } else {
                distnces[vrtx] = Infinity;
                queue.enqueue(vrtx, Infinity);
            }
            previous[vrtx] = null;
        }
        // as long as there is something to visit
        while (queue.values.length) {
            smallest = queue.dequeue().val;
            if (smallest === end) {
                // DONE
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distnces[smallest] !== Infinity) {
                for (const nextVrtx of this.adjacencyList[smallest]) {
                    // calculate new distance to negiboring node
                    const newDistance = distnces[smallest] + nextVrtx.weight;
                    const neighboringNode = nextVrtx.node;
                    // 
                    if (distnces[neighboringNode] > newDistance) {
                        // updating new smallest distance to neighbor or next node
                        distnces[neighboringNode] = newDistance;
                        // updating previous - How we got to neighbor or next node
                        previous[neighboringNode] = smallest
                        //enqueue in priority queue with new priority
                        queue.enqueue(neighboringNode, newDistance);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}
const graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.Dijkstra("A", "E")); // [ 'A', 'C', 'D', 'F', 'E' ]