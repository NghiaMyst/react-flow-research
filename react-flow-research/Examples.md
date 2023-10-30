# Overview

- `CustomNode.jsx`

```javascript
import React, { memo } from "react";
import { Handle, useReactFlow, useStoreApi, Position } from "reactflow";

const options = [
  {
    value: "smoothstep",
    label: "Smoothstep",
  },
  {
    value: "step",
    label: "Step",
  },
  {
    value: "default",
    label: "Bezier (default)",
  },
  {
    value: "straight",
    label: "Straight",
  },
];

function Select({ value, handleId, nodeId }) {
  const { setNodes } = useReactFlow();
  const store = useStoreApi();

  const onChange = (evt) => {
    const { nodeInternals } = store.getState();
    Array.from(nodeInternals.values()).map((node) => {
      if (node.id === nodeId) {
        node.data = {
          ...node.data,
          select: {
            ...node.data.selects,
            [handleId]: evt.target.value,
          },
        };
      }
      return node;
    });
  };

  return <div className="custom-node__select"></div>;
}
```

# Examples

## Custom Node

- `ColorSelectorNode: `

```javascript
import React, { memo } from "react";
import { Handle, Position } from "reactflow";

export default memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />

      <div>
        Custom Color Picker Node: <strong>{data.color}</strong>
      </div>
      <input
        className="nodrag"
        type="color"
        onChange={data.onChange}
        defaultValue={data.color}
      />
    </>
  );
});
```
