import React from "react";
import Card from "./Card";
import { Droppable } from "react-beautiful-dnd";


export default function Column({ title, tasks, id }) {
    return (
        <div className="h-[115vh] w-[35%] bg-gray-300 m-5 p-3 rounded-2xl">
            <p className="p-8 bg-pink-200 text-center sticky top-0 bg-lightblue">
                {title}
            </p>
            <Droppable droppableId={id}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                        className="p-3 transition-colors duration-200 ease-in bg-gray-200 h-[100vh]"
                    >
                        {tasks.map((task, index) => (
                            <Card key={index} index={index} task={task} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}