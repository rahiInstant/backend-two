import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { defaultNodes } from "./Node";

function UncontrolledFlow() {
  const edgeOptions = {
    animated: true,
    style: {
      stroke: "white",
    },
  };
  const defaultEdges = [{ id: "ea-b", source: "a", target: "b" }];
  const connectionLineStyle = { stroke: "white" };

  return (
    <div style={{height:800,width:800}}>
      <ReactFlow
        defaultNodes={defaultNodes}
        defaultEdges={defaultEdges}
        defaultEdgeOptions={edgeOptions}
        fitView
        style={{
          backgroundColor: "#D3D2E5",
        }}
        width={300}
        height={400}
        connectionLineStyle={connectionLineStyle}
      />
    </div>
  );
}

export default UncontrolledFlow;
