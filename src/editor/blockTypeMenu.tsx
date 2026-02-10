import "./blockTypeMenu.scss";
import { AnyBlock, } from "@/types/editor";
import { BLOCK_ITEMS as ITEMS } from "@/constants/editor";
import { useEditorZen } from "@/hooks/useEditorZen";

type Props = {
  selectedBlock: AnyBlock;
  onChangeType: (block: AnyBlock) => void
};

const BlockTypeMenu = ({ selectedBlock, onChangeType }: Props) => {
  const { blockActions, openMenuActions, updateBlock } = useEditorZen();
  return (
    <div className="block-type-menu">
      {ITEMS.map((item) => (
        <button
          key={item.type}
          className={`menu-item
            ${selectedBlock.type === item.type ? "active" : ""}
            `}
          onMouseDown={(e) => {
            e.preventDefault(); // editor focus safety

            if (item.type === 'bullet-list' || item.type === 'number-list' || item.type === 'todo'){
                blockActions.changeType(selectedBlock.id,'list-item')
                updateBlock.meta(selectedBlock.id,{style: item.type,collapsed:false})
            }
            else blockActions.changeType(selectedBlock.id, item.type)
            onChangeType(selectedBlock)
            openMenuActions.setToNull()
          }}
        >
          <span className="icon">{item.icon}</span>
          <span className="label">{item.label}</span>
          {selectedBlock.type === 'list-item' && selectedBlock.meta.style === item.type && <span className="check">✓</span> }
          {selectedBlock.type === item.type && <span className="check">✓</span>}
          {/* {item.type === "page-in" && <span className="arrow">›</span>} */}
        </button>
      ))}
    </div>
  );
};

export default BlockTypeMenu;
