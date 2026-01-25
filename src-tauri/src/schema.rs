use chrono::{DateTime, Utc};
pub struct MemoryItem {
    pub memory_id: String,
    pub created_at: DateTime<Utc>,
    pub memory_type: MemoryType,
    pub title: String,
}
pub enum MemoryType {
    Diary,
    Fact,
    Event,
    Schedule,
    Generic
}

pub struct MemoryNode {
    pub node_id: String,
    pub memory_id: String,
    pub parent_node_id: Option<String>,
    pub created_at: DateTime<Utc>,
    pub content: serde_json::Value,
}
