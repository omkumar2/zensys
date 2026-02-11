import { useMemory } from "@/hooks/useMemory";
import "./memory_space_list.scss";
import { useActiveTab } from "@/hooks/useActiveTab";

const MemorySpaceList = () => {
  const {memoryData, memoryActions} =useMemory()
  const {setActiveTabTypeAndView} =useActiveTab();

  return (
    <div className="memory-space-list">
      <h1>Memory Space</h1>

      <div className="memory-space-list-items">
        {memoryData.memories.map(({memory_item:item , head_node: head_node,nodes }) => (
          <div
            key={item.memory_id}
            className="memory-space-list-item"
            onClick={()=>{
              memoryActions.memory.set({memory_item:item,head_node:head_node,nodes})
              setActiveTabTypeAndView('memory_space','detail')
            }}
          >
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MemorySpaceList;
