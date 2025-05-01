'use strict'
import {
    get_items,
    add_item,
    update_item_title_by_id,
    delete_item_by_id,
    get_item_title_by_id
} from './data.js';

const display = function () {
    let items = get_items();
    if (items.length > 0) {
        console.log("Item List");
        items.forEach(element => {
            console.log("{" + element.id + ", " + element.title + "}");
        });
    }
    else
        console.log("No Data");
}

let ok = add_item({ id: 1, title: "Fish in the Pot" });
if (ok) display();

const item2 = Object.create({ id: 2, title: "Cat in the Hat" });
ok = add_item(item2);
if (ok) display();

const item3 = { id: 3, title: "Crayon" };
ok = add_item(item3);
if (ok) display();

ok = update_item_title_by_id(3, "Roots from the Crayon");
if (ok) display();

ok = delete_item_by_id(2);
if (ok) display();

let itemTitle = get_item_title_by_id(2);
console.log("Item 2 title: " + itemTitle);
itemTitle = get_item_title_by_id(3);
console.log("Item 3 title: " + itemTitle);


