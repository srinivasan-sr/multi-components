import { useState } from "react";
import {StrikeItems, ButtonProps} from './strikeitems.types';
import { RiMenuAddFill } from "react-icons/ri";
import { BiReset } from "react-icons/bi";

const itemsList = [
    {id: 'item1', name: 'Sample item 1', isStrikeThrough: false},
    {id: 'item2', name: 'Sample item 2', isStrikeThrough: false},
    {id: 'item3', name: 'Sample item 3', isStrikeThrough: false},
    {id: 'item4', name: 'Sample item 4', isStrikeThrough: false},
    {id: 'item5', name: 'Sample item 5', isStrikeThrough: false},
    {id: 'item6', name: 'Sample item 6', isStrikeThrough: false},
]

const Button = ({onClick, children}:ButtonProps) => {
    return <button type="button" onClick={onClick} className="flex justify-center align-middle border rounded sm:w-5/12 md:w-3/12 hover:bg-sky-300">{children}</button>
}

const ItemDisplay = ({item, onClick}: StrikeItems) => {

    const handleOnClick = (id: string) => {
        onClick(id);
    }
    return <div key={item.id} className={`border rounded p-2 m-3 text-center cursor-pointer ${item.isStrikeThrough ? `line-through bg-gray-200` : ``}`} onClick={() => handleOnClick(item.id)}>{item.name}</div>
}
export const StrikethroughItemsPage = () => {
    const [items, setItems] = useState(itemsList);
    const [showAddDialog, setShowAddDialog] = useState(false);

    let content;
    let buttons;
    const handleItemClick = (id: string) => {
        const newItems = [...items];
        const modifyItem = newItems.filter((item) => item.id === id)[0];
        modifyItem.isStrikeThrough = !modifyItem.isStrikeThrough;
        setItems([...newItems]);
    }
    const handleAddItem = () => {
        console.log('add item called');
        setShowAddDialog(true);
    }
    const handleReset = () => {
        const currentItems = [...items];
        currentItems.filter((item) => {
            if(item.isStrikeThrough){
                item.isStrikeThrough = false;
            }
            return item;
        });
        setItems([...currentItems]);
    }
    content = items.map((item) => {
        return <ItemDisplay key={item.id} item={item} onClick={handleItemClick}/>
    })
    buttons = <div className="flex flex-row justify-evenly w-1/2">
        <Button onClick={handleAddItem}><RiMenuAddFill className="text-xl" />Add Item</Button>
        <Button onClick={handleReset}><BiReset className="text-xl" /> Reset</Button>
    </div>

    const addItemDialog = <div><input type="search" placeholder="Enter a name" className={`p-1 border rounded my-3 mx-3 sm:w-full md:w-8/12`}/></div>
    return <div className="flex flex-col justify-center mt-3 sm:w-full md:w-8/12">
        {buttons}
        {addItemDialog}
        {content}
    </div>
}