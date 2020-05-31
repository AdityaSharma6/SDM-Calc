import * as React from "react";
import { ItemADT } from "./ItemADT";

var ex1: Item = {
    itemName: "Bananas",
    itemDescription: "From the heart of magnolia",
    itemInitialPrice: 22,
    itemQuantity: 2,
    itemDiscountType: "%",
    itemDiscount: 10,
    itemFinalPrice: 10,
    deleteItem: false
}

export class Card extends React.Component<{}, CardState>{
    constructor(props: any){
        super(props);
        this.state = {
            itemArray: [],
            newItem: {
                itemName: undefined,
                itemDescription: undefined,
                itemInitialPrice: undefined,
                itemQuantity: undefined,
                itemDiscountType: undefined,
                itemDiscount: undefined,
                itemFinalPrice: undefined,
                deleteItem: undefined
            }
        }

    }

    render() {
        return (
            <div id="card-container">
                <div id="card-header">
                    Hello
                </div>

                <div id="card-content">
                    <ItemADT item={ex1}/>
                    <ItemADT item={ex1}/>
                    <ItemADT item={ex1}/>
                    <ItemADT item={ex1}/>
                    <ItemADT item={ex1}/>
                    <ItemADT item={ex1}/>
                    <ItemADT item={ex1}/>
                    <ItemADT item={ex1}/>
                    <ItemADT item={ex1}/>
                    <ItemADT item={ex1}/>
                    <ItemADT item={ex1}/>
                    <ItemADT item={ex1}/>
                    <ItemADT item={ex1}/>
                    <ItemADT item={ex1}/>
                    <ItemADT item={ex1}/>
                    <ItemADT item={ex1}/>
                    <ItemADT item={ex1}/>
                </div>

                <div id="card-footer">
                    Goodbye
                </div>
            </div>
        );
    }
}