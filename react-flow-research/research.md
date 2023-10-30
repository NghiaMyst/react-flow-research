# React-flow

References: [React-flow](https://reactflow.dev/docs/quickstart/)

## Key Features

- Consider features that can help in the project
- `Ease to use: ` Support features that is considered must-have when interacting with the boxes
  - Dragging nodes around, zooming and panning, selecting multiple nodes and edges, and adding/removing edges are all built-in
- `Customizable: ` Support customizing edges types and nodes types
- `Fast rendering: ` React Flow only renders nodes that have changed, and makes sure only those that are in the viewport are displayed at all

## Quick start

- Most React-hooks used are useState(), useCallback()

- Css for React-flow is in `reactflow/dist/styles.css`

## Terms and Definitions (Considered Tomorrow's Morning)

### Nodes

- React components - can customizations - [ReadDocs](https://reactflow.dev/docs/api/nodes/node-options/)
- Custom nodes - [ReadDocs](https://reactflow.dev/docs/guides/custom-nodes/)
  - Render form elements
  - Visualize data
  - Support multiple handles

### Handles

- The place where the edges attached to nodes
- `div` element -> can be placed any where, styled any styles - [ReadDocs](https://reactflow.dev/docs/api/nodes/handle/)

### Edges

- [Edge types](https://reactflow.dev/docs/examples/edges/edge-types/)
- Custom edges - [ReadDocs](https://reactflow.dev/docs/api/edges/custom-edges/)
  - Add a button to remove an edge
  - Custom routing behavior
  - Complex styling or interactions that cannot be solved with just one `SVG path`

### Connection Line

- [ReadDocs](https://reactflow.dev/docs/api/react-flow-props/#connection-line)
- click-and-drag from one handle to another in order to create a new edge

### Viewport

- All of React Flow exists inside of the viewport. The viewport has a x, y and zoom value. When you drag the pane, you change the x and y coordinates and when you zoom in or out you alter the zoom level

## Core Concepts

- How to create an interactive flow ?

  - A flow: nodes, edges or only nodes - `props: [nodes], [edges]` -> <ReactFlow /> -> the id of `nodes, edges -> unique`

  - For more, consider the [Reference](#terms-and-definitions-considered-tomorrows-morning)

### Controlled and Uncontrolled

- [ReadDocs](https://reactflow.dev/docs/concepts/core-concepts/): for interactive edge state, interactivity, etc. created

-> `nodes, edges` - with useState and useCallback (handle changes) -> useNodesState, useEdgesState

## Plugin Components

- `<Minimap />: ` search for api in ReactFlow docs -> handle quick overview of ReactFlow
- `<Control />: ` search for api in ReactFlow docs -> handle some basic tools of ReactFlow and canvas
- `<Background />: ` search for api in ReactFlow docs -> pattern background
- `<Panel />: ` A helper component to display content on top of the React Flow viewport

## Packages

- [ReadDocs](https://reactflow.dev/docs/concepts/packages/)

## New hooks in React-flow

- `useNodesState()` =>
- `useEdgesState()` =>

## Components

- <ReactFlow />
- <Background />
- <Minimap />
- <Controls />
- <Panel />
- <NodeToolbar />
- <NodeResizer />

# Memo, React Memo

- Not a hook - is a `HOC -  Higher order component` - wrap the component

```javascript
export default memo(Component);
```

- like `Hook, render props` -> supporting inherit logics

- memorize `props` of a `component` -> decide `if need to re-render the component` -> avoid unnecessary re-rerendering the component

- prevent - a children component rerender when the re-rerendering caused by the parents

- using when a component using many props that can be affect the performance

# useMemo()

- useMemo() - a `hook` - avoid re-doing an unnecessary logic

```javascript
const total = useMemo(() => {
  // a logic doing
}, [dependencies]);
```

# useCallback()

- memo() - will be working not same as your intention when props is a function

- using with `memo()`

```javascript
const handleLogic = useCallback(() => {
  // doing logic here
}, [...dependencies]);
```

# useRef()

- return an object has a `property: current`

# How to render

- has attributes, and hooks to access the internal attributes and positions of nodes or edges

-

# useReducer()

- if useState can do -> useReducer can do, too and reversely

- then when use useState(), when use useReducer()

* `useState(): ` when states are simple and the number of states isn't too many

  - init state
  - actions

* `useReducer(): ` when states are complex: objects and arrays with many children, the number of states is too many

  - init state
  - actions
  - reducer
  - dispatch
