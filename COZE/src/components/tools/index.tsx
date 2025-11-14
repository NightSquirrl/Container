import {
  FlowNodeBaseType,
  getAntiOverlapPosition,
  PositionSchema,
  usePlayground,
  useService,
  WorkflowDocument,
  WorkflowNodeEntity,
  WorkflowNodeJSON,
  WorkflowNodeMeta,
  WorkflowSelectService,
} from "@flowgram.ai/free-layout-editor";
import {
  NodePanelResult,
  WorkflowNodePanelService,
} from "@flowgram.ai/free-node-panel-plugin";
import { useCallback } from "react";
import { ToolContainer, ToolSection } from "./styles";

const useGetPanelPosition = () => {
  const playground = usePlayground();
  return useCallback(
    (targetBoundingRect: DOMRect): PositionSchema =>
      // convert mouse position to canvas position - 将鼠标位置转换为画布位置
      playground.config.getPosFromMouseEvent({
        clientX: targetBoundingRect.left + 64,
        clientY: targetBoundingRect.top - 7,
      }),
    [playground]
  );
};

const getContainerNode = (selectService: WorkflowSelectService) => {
  const { activatedNode } = selectService;
  if (!activatedNode) {
    return;
  }
  const { isContainer } = activatedNode.getNodeMeta<WorkflowNodeMeta>();
  if (isContainer) {
    return activatedNode;
  }
  const parentNode = activatedNode.parent;
  if (!parentNode || parentNode.flowNodeType === FlowNodeBaseType.ROOT) {
    return;
  }
  return parentNode;
};
// hook to handle node selection - 处理节点选择的 hook
const useSelectNode = () => {
  const selectService = useService(WorkflowSelectService);
  return useCallback(
    (node?: WorkflowNodeEntity) => {
      if (!node) {
        return;
      }
      // select the target node - 选择目标节点
      selectService.selectNode(node);
    },
    [selectService]
  );
};

export const useAddNode = () => {
  const nodePanelService = useService<WorkflowNodePanelService>(
    WorkflowNodePanelService
  );
  const selectService = useService(WorkflowSelectService);
  const workflowDocument = useService(WorkflowDocument);
  const getPanelPosition = useGetPanelPosition();
  const select = useSelectNode();

  return useCallback(
    async (targetBoundingRect: DOMRect): Promise<void> => {
      const panelPosition = getPanelPosition(targetBoundingRect);
      const containerNode = getContainerNode(selectService);

      await new Promise<void>((resolve) => {
        nodePanelService.callNodePanel({
          panelProps: {},
          position: panelPosition,
          onSelect: async (panelParams?: NodePanelResult) => {
            if (!panelParams) {
              return;
            }
            const { nodeType, nodeJSON } = panelParams;
            const position = Boolean(containerNode)
              ? getAntiOverlapPosition(workflowDocument, {
                  x: 0,
                  y: 200,
                })
              : undefined;
            const node: WorkflowNodeEntity =
              workflowDocument.createWorkflowNodeByType(
                nodeType,
                position,
                nodeJSON ?? ({} as WorkflowNodeJSON),
                containerNode?.id
              );
            select(node);
          },
          onClose: () => {
            resolve();
          },
        });
      });
    },
    [nodePanelService]
  );
};

function DemoTools() {
  const addNode = useAddNode();

  return (
    <>
      <ToolContainer className="demo-free-layout-tools">
        <ToolSection>
          <button>测试1</button>
          <button>测试2</button>
          <button>测试3</button>
          <button
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              addNode(rect);
            }}
          >
            添加节点面板
          </button>
        </ToolSection>
      </ToolContainer>
    </>
  );
}

export { DemoTools };

