import "./structure.scss";
import { useState } from "react";
import StructureList from "./structure_list/structure_list";
import { Tag } from "@/types/tag";
import StructureDetails from "./structure_details/structure_details";
import StructureCreate from "./structure_create/structure_create";
import { useTags } from "@/hooks/useTag";
import { useActiveTab } from "@/hooks/useActiveTab";

const Structure = () => {
  const [tag, setTag] = useState<Tag | null>(null);
  const {activeTab, setActiveTabTypeAndView} = useActiveTab();
  // const [view, setView] = useState<"list" | "details" | "create">("list");

  const { saveTag, reloadTags: reload, removeTag } = useTags();
  if(!activeTab) return
  return (
    <div className="structure">
      {activeTab.view === "list" && (
        <StructureList
          onSelectTag={(selectedTag) => {
            setTag(selectedTag);
            setActiveTabTypeAndView('structure',"details");
          }}
        />
      )}
      {activeTab.view === "details" && tag && <StructureDetails tag={tag} onDelete={async(tagToDelete)=>{
        await removeTag(tagToDelete.id);
        setTag(null);
        await reload();
        setActiveTabTypeAndView('structure',"list");
      }} />}

      {activeTab.view === "add" && (
        <StructureCreate
          onCreate={async (createdTag) => {
            await saveTag(createdTag);
            setTag(null)
            await reload()
            setActiveTabTypeAndView('structure',"list")
            
          }}
        />
      )}
      <button className="onClick_create_structure" onClick={() => setActiveTabTypeAndView('structure','add')}>+</button>
      <button className="onClick_reload_structure" onClick={async () => {await reload(); setActiveTabTypeAndView('structure','list')}}>RE</button>
    </div>
  );
};

export default Structure;
