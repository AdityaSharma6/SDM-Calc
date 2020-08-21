import { action, mutator } from "satcheljs";
import { getStore } from "./store/store";
import { ItemADT } from "./store/schema";

// Add New Item to Receipt
export let ADD_ITEM = action("ADD_ITEM", (newItem: ItemADT) => ({newItem: newItem}));

mutator(ADD_ITEM, (actionMessage) => {
    console.log("Adding New Item to Store");
    getStore().receipt.push(actionMessage.newItem);
});

// Delete item from receipt
export let DEL_ITEM = action("DEL_ITEM", (itemId: number) => ({itemId: itemId}));

mutator(DEL_ITEM, (actionMessage) => {
    console.log("Deleting Item", actionMessage.itemId, " from Store");
    getStore().receipt = getStore().receipt.filter((item) => (item.id !== actionMessage.itemId));
});
