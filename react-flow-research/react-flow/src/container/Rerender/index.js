import React, { useCallback, useState } from 'react';
import ReactFlow, { applyNodeChanges,
  applyEdgeChanges, addEdge, Background } from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  { id: '3', position: { x: 0, y: 100 }, data: { label: '3' } },
  { id: '4', position: { x: 110, y: 100 }, data: { label: '4' } },

];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function Rerender() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => {setNodes((nds) => applyNodeChanges(changes, nds)); console.log(changes);},
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  // const onNodesDelete = (edgesRemove) => setEdges((eds) => removeEdge(edgesRemove, eds));

  // const onEdgesDelete = (edgesRemove) => setEdges((eds) => removeEdge(edgesRemove, eds));
  
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow 
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Background />
      </ReactFlow>
    </div>
  );
}