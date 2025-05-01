let data = [];
export function get_items() {
    return data;
}
export function add_item(new_item) {
    // add item (if id does not exist)
    // return true if item is added successfully, false otherwise
    if (data.find(d => new_item.id === d.id)) return false;
    data.push(new_item);
    console.log("An item is added.");
    return true;
}
export function update_item_title_by_id(id, new_title) {
    // update the title (if id exist)
    // return true if item is update successfully, false otherwise
    const item = data.find(d => id === d.id);
    if (!item) return false;
    item.title = new_title;
    console.log("An item is updated");
    return true;
}
export function delete_item_by_id(id) {
    // delete the item (if id exist)
    // return true if item is deleted successfully, false otherwise
    const index = data.findIndex(d => id === d.id);
    if (index === -1) return false;
    data.splice(index, 1);
    console.log("An item is deleted");
    return true;
}
export function get_item_title_by_id(id) {
    // return the item title by id (if id exist)
    const item = data.find(d => d.id === id);
    return item ? item.title : null;
}