# ReactFlow Hooks

## useReactFlow()

- return: `React Flow` instance -> manipulate `nodes, edges, viewport` + get `the current state`

- [useReactFlow example](https://reactflow.dev/docs/examples/misc/use-react-flow-hook/)

## useNodes()

- return: `Nodes` -> the components using `useNodes()` re-renders whenever a node changes

- This hook can only be used if the component that uses it is wrapped with a `ReactFlowProvider` or if it's a child of the `<ReactFlow />` component.

```typescript
useNodes<NodeData = any>(): Node<NodeData>[]
```

## useEdges()

- return: `Edges` -> The component that uses this hook re-renders whenever an edge changes.

- The second is same with `useNodes()`

```typescript
useEdges(): Edge[]
```

## useViewport()

- return: `Viewport: {x, y, zoom}` -> re-renders whenever an edge changes.

- only be used if the component that uses it is wrapped with a `<ReactFlowProvider />`.

```typescript
useViewport(): Viewport
```

## useOnViewportChange()

- lets you listen to viewport changes

- props: `onStart`, `onChange`, `onEnd`

- return: void

- This hook can only be used if the component that uses it is wrapped with a `ReactFlowProvider` or if it's a child of the `<ReactFlow />` component

```typescript
useOnViewportChange({
  onStart?: (viewport: Viewport) => void,
  onChange?: (viewport: Viewport) => void,
  onEnd?: (viewport: Viewport) => void
}): void
```

## useOnSelectionChange()

- lets you listen to selection changes

- This hook can only be used if the component that uses it is wrapped with a `ReactFlowProvider` or if it's a child of the `<ReactFlow />` component

```typescript
useOnSelectionChange({
  onChange?: ({ nodes, edges }: { nodes: Node[], edges: Edge[] }):void => {console.log('changed selection', nodes, edges)},
}): void
```

## useNodesState()

- similar to React's `useState()` -> but, exposes a `onNodesChange` function - props of `<ReactFlow />` component

- easier to quickly create controlled flows without the need to implement the onNodesChange function

- recommend using library `'Zustand'` for state management

```javascript
import ReactFlow, { addEdge, useNodesState, useEdgesState } from "reactflow";

const initialNodes = [];
const initialEdges = [];

function ControlledFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    />
  );
}
```

## useEdgesState()

- should not be used in production

```javascript
import ReactFlow, { addEdge, useNodesState, useEdgesState } from "reactflow";

const initialNodes = [];
const initialEdges = [];

function ControlledFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    />
  );
}
```

## useNodeId()

- return: `id` of the custom node

- only used with a custom node

## useUpdateNodeInternals()

- when: _changing_ the number or positions of `handles` inside a custom node -> _need to notify_ React Flow

- when: _update_ the internal dimensions of the node

- return: function - params: string - `id`

```javascript
import { useUpdateNodeInternals } from "reactflow";

function UpdateNodeButton() {
  const updateNodeInternals = useUpdateNodeInternals();

  // you can pass a string or an array of strings to update multiple node internals
  return <button onClick={() => updateNodeInternals("node-id")}></button>;
}
```

---

```typescript
UpdateNodeInternal = (nodeId: string | string[]) => void;

useUpdateNodeInternals(): UpdateNodeInternals
```

## useKeyPress()

- return: if the passed key is pressed

- re-renders whenever the returned boolean changes

- param can be string as `key` + string formatted as `key+key` or array of strings

```typescript
useKeyPress(keyCode: string | string[]): boolean
```

## useNodesInitialized()

## useStore(): [api](https://reactflow.dev/docs/api/hooks/use-store/)

- uses `Zustand` for internal state management

- If you _need to access_ the internal state you can use the useStore hook inside a child component of the `ReactFlow` component or if your flow is wrapped with a `ReactFlowProvider`.
