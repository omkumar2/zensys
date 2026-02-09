import "./memory_space.scss";
import MemorySpaceList from "./memory_spaces_list/memory_space_list";
import MemorySpaceItem from "./memory_space_item/memory_space_item";
import { useActiveTab } from "@/hooks/useActiveTab";
import { useMemory } from "@/hooks/useMemory";

const MemorySpace = () => {
  const { activeTab,} = useActiveTab();
  const {memoryData} = useMemory();
  const selectedMemory = memoryData.memory.new
  if (!activeTab) return <p>Null</p>;
  // const {memory: editorMemory} = useEditorZen();

  return (
    <div className="memory-space">
      {activeTab.view === "list" && (
        <MemorySpaceList
          
        />
      )}

      {activeTab.view === "detail" && selectedMemory && (
        <MemorySpaceItem
        />
      )}
    </div>
  );
};

export default MemorySpace;
