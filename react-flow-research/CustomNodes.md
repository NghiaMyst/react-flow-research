# Custom Nodes

## React Knowledge

- useCallback():
- useMemo():

- What customizing nodes can do?

  - render everything
  - multiple source and target handles and render form inputs or charts for example
  -

- `Add new nodes type: `

create a new node type + and its handle to make it can connect with other nodes

then create it that the NodeTypes can be memorized to avoid creating new objects each time rendering

```javascript
const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);

return <ReactFlow nodeTypes={nodeTypes} />;

// Then using it

const nodes = [
  {
    id: "node-1",
    type: "textUpdater",
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
];
```

If you want to connect other nodes with these specific handles, the node id is not enough but you also need to pass the specific handle id

```javascript
const initialEdges = [
  { id: "edge-1", source: "node-1", sourceHandle: "a", target: "node-2" },
  { id: "edge-2", source: "node-1", sourceHandle: "b", target: "node-3" },
];
``;
```

if you are programmatically changing the position or number of handles in your custom node, you will need to use the useUpdateNodeInternals hook to properly notify ReactFlow of changes

[CustomNodes API](https://reactflow.dev/docs/api/nodes/custom-nodes/)

# Custom Handles [Ref](https://reactflow.dev/docs/api/nodes/handle/)

- Consider `Floating Edges` and `Add Node on Edge Drop`

# NodeToolbar

- contains some behavior of each node
- Per default, the toolbar is connected to a node and visible only if the node is selected. If multiple nodes are selected, the toolbar is hidden again to prevent showing multiple toolbars at once. If you want to override this default behavior, you can set the isVisible prop by yourself

- The NodeToolbar component is published under @reactflow/node-toolbar and can also be installed and used separately.

# NodeResizer

[ref](https://reactflow.dev/docs/api/nodes/node-resizer/)

The node resizer component can be used to add a resize functionality to your nodes. It renders draggable controls around the node to resize in all directions
