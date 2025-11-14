import {
  EditorRenderer,
  Field,
  FreeLayoutEditorProvider,
  useNodeRender,
  WorkflowNodeProps,
  WorkflowNodeRenderer,
} from "@flowgram.ai/free-layout-editor";
import "@flowgram.ai/free-layout-editor/index.css";
import { createFreeNodePanelPlugin } from "@flowgram.ai/free-node-panel-plugin";
import { NodePanel } from "./components/node-panel";
import { DemoTools } from "./components/tools";
import { nodeRegistries } from "./nodes";
import { createContextMenuPlugin } from "./plugins";

const NodeRender = (props: WorkflowNodeProps) => {
  const { form, selected } = useNodeRender();
  return (
    <>
      <WorkflowNodeRenderer node={props.node}>
        {form?.render()}
      </WorkflowNodeRenderer>
    </>
  );
};

const App = () => (
  <FreeLayoutEditorProvider
    onAllLayersRendered={(ctx) => {
      ctx.tools.fitView(false);
    }}
    getNodeDefaultRegistry={(type) => {
      return {
        type,
        meta: {
          defaultExpanded: true,
        },
        formMeta: {
          /**
           * Render form
           */
          render: () => (
            <>
              <Field<string> name="title">
                {({ field }) => <div>{field.value}</div>}
              </Field>
            </>
          ),
        },
      };
    }}
    materials={{
      renderDefaultNode: NodeRender,
    }}
    nodeEngine={{
      enable: true,
    }}
    readonly={false}
    nodeRegistries={[
      ...nodeRegistries,
      {
        type: "custom",
      },
    ]}
    canDeleteNode={() => true}
    canDeleteLine={() => true}
    initialData={{
      nodes: [
        {
          id: "1",
          type: "custom",
          meta: {
            position: { x: 0, y: 0 },
          },
          data: {
            title: "Start Node",
          },
        },
        {
          id: "2",
          type: "custom",
          meta: {
            position: { x: 400, y: 0 },
          },
          data: {
            title: "End Node",
          },
        },
      ],
      edges: [
        {
          sourceNodeID: "1",
          targetNodeID: "2",
        },
      ],
    }}
    history={{
      enable: true,
      /**
       * Listen form data change, default true
       */
      enableChangeNode: true,
    }}
    plugins={() => [
      createFreeNodePanelPlugin({
        renderer: NodePanel,
      }),
      /**
       * ContextMenu plugin
       */
      createContextMenuPlugin({}),
    ]}
  >
    <EditorRenderer />
    <DemoTools />
  </FreeLayoutEditorProvider>
);

export default App;
