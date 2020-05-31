type Item = {
    itemName: string;
    itemDescription?: string;
    itemInitialPrice: number;
    itemQuantity: number;
    itemDiscountType: string;
    itemDiscount: number;
    itemFinalPrice: number;
    deleteItem: boolean;
}

type CardState = {
    itemArray: Array<Item>;
    newItem: Item;
}

type ItemProps = {
    item: Item;
}


/*
newItem: {
itemName: "",
itemDescription: "",
itemInitialPrice: 0,
itemQuantity: 0,
itemDiscountType: "$",
itemDiscount: 0,
itemFinalPrice: 0,
deleteItem: false
}
incrementCount & ~ & ~ & ~\\
\hline
decrementCount & ~ & ~ & IllegalArgumentException\\
\hline
updateName & event & ~ & ~\\
\hline
updateDescription & event & ~ & ~\\
\hline
updateInitialPrice & event & ~ & IllegalArgumentException\\
\hline 
updateDiscountType & event & ~ & ~\\
\hline
updateDiscountValue & event & ~ & IllegalArgumentException\\
\hline
*/