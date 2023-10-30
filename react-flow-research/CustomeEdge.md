# Custom Edges

## Basic Options Props

```javascript
type Edge<T = any> = {
  id: string,
  type?: string,
  source: string,
  target: string,
  sourceHandle?: string | null,
  targetHandle?: string | null,
  label?: string | ReactNode,
  labelStyle?: CSSProperties,
  labelShowBg?: boolean,
  labelBgStyle?: CSSProperties,
  labelBgPadding?: [number, number],
  labelBgBorderRadius?: number,
  style?: CSSProperties,
  animated?: boolean,
  hidden?: boolean,
  deletable?: boolean,
  focusable?: boolean,
  data?: T,
  className?: string,
  sourceNode?: Node,
  targetNode?: Node,
  selected?: boolean,
  markerStart?: EdgeMarkerType,
  markerEnd?: EdgeMarkerType,
  zIndex?: number,
  ariaLabel?: string,
  interactionWidth?: number,
};
```

[EdgeMarkerType](https://reactflow.dev/docs/examples/edges/markers/)

```javascript
type EdgeMarker {
  type: MarkerType; // 'arrow' or 'arrowclosed'
  color?: string; // arrow fill color
  width?: number;
  height?: number;
  markerUnits?: string; // defines the coordinate system https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/markerUnits
  orient?: string; // defines rotation - 'auto' | 'auto-start-reverse' | number
  strokeWidth?: number;
}

type EdgeMarkerType = string | EdgeMarker;

enum MarkerType {
  Arrow = 'arrow',
  ArrowClosed = 'arrowclosed',
}
```

## Edge Types

[ref](https://reactflow.dev/docs/api/edges/edge-types/)

## Custom Edge

- Quite same with custom Node [ref](https://reactflow.dev/docs/examples/edges/custom-edge/)

```javascript
function Flow({ nodes, edges }) {
  const edgeTypes = useMemo(() => ({ special: CustomEdgeComponent }), []);

  return <ReactFlow edgeTypes={edgeTypes} nodes={nodes} edges={edges} />;
}
```

- Edge Utils to create custom edge [ref](https://reactflow.dev/docs/api/edges/edge-utils/)

- The BaseEdge component gets used internally for all the edges. It can be used inside a custom edge and handles the invisible helper edge and the edge label for you
