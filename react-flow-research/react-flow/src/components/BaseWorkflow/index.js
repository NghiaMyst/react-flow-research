import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  MarkerType
} from 'reactflow'

import './index.modules.css';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '0',
    type: 'default',
    data: { label: 'Node' },
    position: { x: 0, y: 0 },
  },
  {
    id: '1',
    type: 'default',
    data: { label: 'Node' },
    position: { x: 0, y: 100 },
  },
];

const initialEdges = [
  {
    id: 'initial',
    source: '0',
    target: '1',
    label: 'start',
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: 'red', color: 'white', fillOpacity: 0.6 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  }
]

let id = 1;
const getId = () => `${id++}`;

const fitViewOptions = {
  padding: 3,
};

const AddNodeOnEdgeDrop = () => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  // const { project } = useReactFlow();

  const [addnode, setAddnode] = useState(false);
  const [addChildNode, setAddChildNode] = useState(false);
  const [parentNode, setParentNode] = useState(null);

  const initialNodeType = {
    id : getId(),
    type : 'default',
    position : { x: initialNodes[0].position.x, y: nodes.length*100},
    data: { label: 'New Node' },
    width: 150
  }

  const initialEdge = {
    id: String(parseInt(Math.random(100000000)*1000000)),
    source: nodes[nodes.length-2].id,
    target: nodes[nodes.length-1].id,
    label: '+',
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  }

  useEffect(() => {
    if(addnode){
      const findFirstNode = nodes.find(item=>item.id===initialEdge.target)
      setEdges((eds) => eds.concat({
        ...initialEdge,
        // source: parentNode.id,
      }));
      setAddnode(false);
      setParentNode(null);
    }
    if(addChildNode){
      setEdges((eds) => eds.concat({
        id: String(parseInt(Math.random(100000000)*1000000)),
        source: parentNode.id,
        target: nodes[nodes.length-1].id,
        label: '+',
        labelBgPadding: [8, 4],
        labelBgBorderRadius: 4,
        labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.7 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
        },
      }));
      setAddChildNode(false);
      setParentNode(null);
    }
  }, [nodes]);

  const handleEdgeClick = (param, data) => {
    console.log(data);
    const findSourceNode = nodes.find((item)=>item.id===data.source);
    setNodes((nds) => nds.concat({...initialNodeType, 
      // position:{ x: findSourceNode.position.x, y: findSourceNode.position.y+100}, 
      data:{ parentId: data.target, ...initialNodeType.data }}));
    setParentNode(findSourceNode);
    setAddnode(true);
  }

  const handleNodeClick = (e, data) => {
    const filterNodeswithSameSource = nodes.filter((node)=>node?.data?.parentId===data?.id);
    setNodes((nds) => nds.concat({
      id : getId(),
      type : 'default',
      position : { x: data.position.x+filterNodeswithSameSource.length*160, y: data.position.y+100},
      data: { label: 'New Node', parentId: data.id },
      width: 150,
    }));
    setAddChildNode(true);
    setParentNode(data);
  }

  return (
     <div className='wrapper' ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onEdgeClick={handleEdgeClick}
        onNodeClick={handleNodeClick}
        fitView
        fitViewOptions={fitViewOptions}
      />
     </div>
  )
}

export default () => (
  <ReactFlowProvider>
    <AddNodeOnEdgeDrop />
  </ReactFlowProvider>
);