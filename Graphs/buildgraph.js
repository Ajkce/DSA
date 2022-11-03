//Building Graphs
//Graphs can be build via three different methods


//Edge List
const graph1 = [[0, 2], [2, 3], [2, 1], [1, 3]]

//Adjacent List
//the index is the node and the value is the nodes neighbour 
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]]

//Adjacent Matrix
//it has 0 and 1 indicating weather the nodes have connections to each other or not
const graph3 = [
    [0, 0, 1, 0], //index of zero is connected to node 2
    [0, 0, 1, 1], //index of 1 is connected to node 2 and 3
    [1, 1, 0, 1],
    [0, 1, 1, 0],
]
 