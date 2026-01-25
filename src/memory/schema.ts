export type MemoryType = "diary" | "fact" | "event" | "schedule" | "generic";
export type MemoryItem = {
  memory_id: string;
  created_at: string;
};

export type MemoryState = {
  title?: string
  memory_type?: MemoryType
  content?: unknown
}

export type MemoryNode = {
  node_id: string
  memory_id: string
  parent_node_id?: string
  created_at: string
  payload: Partial<MemoryState>
  change_reason?: string
}