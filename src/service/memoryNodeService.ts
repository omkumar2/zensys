import { v7 } from "uuid";
import { MemoryNode, MemoryType , MemoryState} from "@/memory/schema";
export const MemoryNodeService = () => {
  const createMemoryNode = (
    memory_id: string,
    title: string,
    memory_type: MemoryType,
    content: unknown,
    comment: string,
    parent_node_id?: string,
  ) => {
    const newMemoryNode: MemoryNode = {
      node_id: v7(),
      memory_id,
      parent_node_id,
      payload: {
        title,
        memory_type,
        content,
      },
      created_at: new Date().toISOString(),
      change_reason: comment,
    };
    return newMemoryNode;
  };
  const appendMemoryNode = (
  memory_id: string,
  parent_node: MemoryNode | null,
  changes: Partial<MemoryState>,
  change_reason?: string
): MemoryNode => {
  if (!parent_node && Object.keys(changes).length === 0) {
    throw new Error("Initial node must define state")
  }
  const Changes: MemoryState = {
    title: changes.title ?? parent_node?.payload.title,
    memory_type: changes.memory_type ?? parent_node?.payload.memory_type,
    content: changes.content ?? parent_node?.payload.content,
  }
  return {
    node_id: v7(),
    memory_id,
    parent_node_id: parent_node?.node_id,
    created_at: new Date().toISOString(),
    payload: Changes,
    change_reason,
  }
}
  return {
    createMemoryNode,
    appendMemoryNode,
  };
};
