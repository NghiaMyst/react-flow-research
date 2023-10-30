## Props Lists

- References: [Props Lists](https://reactflow.dev/docs/api/react-flow-props/)

_`<ReactFlow />` :_

```typescript
import { ReactFlowProps } from "reactflow";
```

**Basic Props**

- `nodes`?: Array of nodes for `controlled` flow - Node[]
- `edges`?: Array of edges for `controlled` flow - Edge[]
- `defaultNodes`?: Array of nodes for `uncontrolled` flow - Node[]
- `defaultEdges`?: Array of edges for `uncontrolled` flow - Edge[]
- `onNodesChange`?: drag - select - remove -> adding interactivity for a `controlled` flow
- `onEdgesChange`?: select - remove -> adding interactivity for a `controlled` flow
- `onConnect`?: Called when user connects two nodes in a controlled flow
- `nodeTypes`?:
- `edgeTypes`?:
- `nodeOrigin`?:
  Position origin [x-origin, y-origin]. center = [0.5, 0.5], bottom-right = [1, 1]
- `nodeDragThreshold`?:

**FLow View**

**Edge Specific Props**

**Event Handlers**

- Please wrap all event handlers that you are passing to `<ReactFlow />` with a useCallback hook or define it outside of the component.

- [ReadDocs](https://reactflow.dev/docs/api/react-flow-props/#event-handlers)

## ReactFlow Provider [ref](https://reactflow.dev/docs/api/react-flow-provider/)

- used when:

  - want to use one of these React Flow hooks _in components that are not children of the `<ReactFlow />` component_

  - multiple flows on page

  - access the internal state and actions _in components that are not children of the `<ReactFlow />` component_

- Example Usage:

```typescript
import ReactFlow, { ReactFlowProvider, useReactFlow } from "reactflow";

const nodes = [
  { id: "node-1", position: { x: 0, y: 0 }, data: { label: "node 1" } },
];

function Flow() {
  const reactFlowInstance = useReactFlow();

  return <ReactFlow defaultNodes={nodes} />;
}

function FlowWithProvider() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
```

## Nodes Options

- `id: ` - string - unique

- `position: ` - ({ x: number, y: number }) - relative to parent

- `data: ` - object

- `type: ` 'input', 'output', 'default'

- `targetPosition: ` + `sourcePosition: `

- `parentNode: ` id

- `expandParent: ` If this is true the parent node gets expanded when you drag the child to the outer bounds

- `extent: ` The moving range for a node. If it's a child that shouldn't leave the parent node, set it to 'parent'

- `selected, hidden, draggable, deletable, selectable: `

- `etc`

```typescript
type Node<
  NodeData = any,
  NodeType extends string | undefined = string | undefined
> = {
  id: string;
  position: XYPosition;
  data: NodeData;
  type?: NodeType;
  style?: CSSProperties;
  className?: string;
  targetPosition?: Position;
  sourcePosition?: Position;
  hidden?: boolean;
  selected?: boolean;
  dragging?: boolean;
  draggable?: boolean;
  selectable?: boolean;
  connectable?: boolean;
  deletable?: boolean;
  focusable?: boolean;
  dragHandle?: string;
  width?: number | null;
  height?: number | null;
  parentNode?: string;
  zIndex?: number;
  extent?: "parent" | CoordinateExtent;
  expandParent?: boolean;
  positionAbsolute?: XYPosition;
  ariaLabel?: string;

  // only used internally
  [internalsSymbol]?: {
    z?: number;
    handleBounds?: NodeHandleBounds;
    isParent?: boolean;
  };
};
```

### NodeTypes

The node types differ in the number and types of handles
