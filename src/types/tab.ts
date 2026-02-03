import Editor from "@/editor/editor"
import Create from "@/workspace/create/create"
import MemorySpace from "@/workspace/memory_space/memory_space"
import Overview from "@/workspace/overview/overview"
import Settings from "@/workspace/settings/settings"
import Structure from "@/workspace/structure/structure"
export type TabType =
  | "overview"
  | "memory_space"
  | "create"
  | "structure"
  | "settings"
  | 'editor'

export type TimelineState = {
  stateTimeId: number
  payload?: unknown
}

export type TabItem = {
  id: string
  title: string
  type: TabType
  isActive: boolean
  timeline: TimelineState[]
}

export type TabStore = {
  tabs: TabItem[]
  activeTabId: string
  setActiveTabId: (id:string)=>void
  switchTab: (id: string, type: TabType) => void
}


export const TAB_COMPONENTS: Record<TabType, React.ComponentType> = {
  overview: Overview,
  memory_space: MemorySpace,
  create: Create,
  structure: Structure,
  settings: Settings,
  editor: Editor,
}