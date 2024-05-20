import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Column from "./Column";

const sampleArray = [
    { id: '1', item: 'Apple' },
    { id: '2', item: 'Banana' },
    { id: '3', item: 'Cherry' },
    { id: '4', item: 'Date' },
    { id: '5', item: 'Elderberry' }
];

export default function Board() {
    const [divA, setdivA] = useState(sampleArray);
    const [divB, setdivB] = useState([]);

    const handleDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination || (source.droppableId === destination.droppableId)) return;

        const task = findItemById(draggableId, source.droppableId === '1' ? divA : divB);
        console.log(task)

        if (source.droppableId === '1') {
            setdivA(removeItemById(draggableId, divA));
        } else {
            setdivB(removeItemById(draggableId, divB));
        }

        if (destination.droppableId === '1') {
            setdivA([...divA, task]);
        } else {
            setdivB([...divB, task]);
        }
    };

    function findItemById(id, array) {
        return array.find((item) => item.id === id);
    }

    function removeItemById(id, array) {
        return array.filter((item) => item.id !== id);
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="flex items-center justify-center w-full h-[130vh] -mt-5">
                <Column title={"Div A"} tasks={divA} id={"1"} />
                <Column title={"Div B"} tasks={divB} id={"2"} />
            </div>
        </DragDropContext>
    );
}
