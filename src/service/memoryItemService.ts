import { v7 } from "uuid";
import { MemoryItem } from "@/memory/schema";
export const MemoryItemService = () => {
    const createMemoryItem = () => {
        const newMemoryItem: MemoryItem = {
            memory_id: v7(),
            created_at: new Date().toISOString(),


        }
        return newMemoryItem;
    }
    
    const deleteMemoryItem = () => {
        return
    }
    return { createMemoryItem, deleteMemoryItem };
}