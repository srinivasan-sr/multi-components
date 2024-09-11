import { DragEvent, useState } from "react";
import { ListItem } from "./list.types";

const items_data= [
    {
        id: '1',
        name: 'Sample1'
    },
    {
        id: '2',
        name: 'Sample2'
    },
    {
        id: '3',
        name: 'Sample3'
    },
    {
        id: '4',
        name: 'Sample4'
    },  

] as ListItem[];
export const DragDropList = () => {
    const [items, setItems] = useState<ListItem[] | []>(items_data);
    const [draggedItems, setDraggedItems] = useState<ListItem[] | []>([]);
    const [dragging, setDragging] = useState<string | null>();
    const [dragOver, setDragOver] = useState(false);
    
    const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
        setDragging(e.currentTarget.dataset.id);
    }
    const list_content = items.length > 0 ? (items.map((item, index) => {
        return <div key={item.id} data-id={item.id} data-index={index} 
            draggable={true} onDragStart={handleDragStart}
            className={`border cursor-grab rounded m-2 p-1 ${dragging === item.id ? `opacity-50` : `opacity-100`}`}
        >{item.name}</div>
    })):(
        <>No more items</>
    )

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragOver(false);
        if(!dragging) return;
        const newData = [...items];
        const draggedItem = newData.splice(items.findIndex((item) => item.id === dragging),1)[0];
        newData.filter((item) => item.id !== dragging);
        setItems(newData);
        setDraggedItems([draggedItem, ...draggedItems]);
        setDragging(null);
    }

    const handleDragOver = (e:DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragOver(true);
    }
    let drop_list_content;
    
    drop_list_content = draggedItems.length>0 ? (draggedItems.map((item, index) => {
        return <div key={item.id} data-id={item.id} data-index={index} 
            className={`border rounded m-2 p-1`}
        >{item.name}</div>
    })): (<>Drop items here</>)
    return (
        <div className="flex p-1">
        <div id="drag-drop-items-list" className="w-5/12 border rounded mr-2">
                {list_content}
        </div>
        <div id="drop-list" 
        onDragOver={handleDragOver} 
        onDrop={handleDrop} 
        className={`border rounded w-5/12 h-80 ${dragOver ? `border-4 border-green-400` : `border border-gray-300`}`}>{drop_list_content}</div>
        </div>
    )
}