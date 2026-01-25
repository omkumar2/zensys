use crate::utils::get_app_dir;
use tauri::{AppHandle, Manager, command};

#[command]
pub fn save_memory_item(app: AppHandle, item: &str) -> Result<(), String> {
    let app_dir = get_app_dir(app)?;
    let storage_path = app_dir.join("memory_items.json");
    std::fs::write(storage_path, item).map_err(|e| format!("Failed to save memory item: {}", e))?;
    Ok(())
}

