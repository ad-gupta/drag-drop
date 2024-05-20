import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Avatar } from "antd";

function bgcolorChange(isDragging, isDraggable, isBacklog) {
    if (isDragging) return "bg-blue-100";
    if (isDraggable) return isBacklog ? "bg-[#F2D7D5]" : "bg-[#DCDCDC]";
    return isBacklog ? "bg-[#F2D7D5]" : "bg-[#EAF4FC]";
}

export default function Card({ task, index }) {
    return (
        <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
            {(provided, snapshot) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className={`rounded-lg shadow-md p-2 text-black mb-2 min-h-[120px] mx-2 cursor-pointer flex flex-col justify-between ${bgcolorChange(
                        snapshot.isDragging,
                        task.isDraggable,
                        task.isBacklog
                    )}`}
                >
                    <div className="flex justify-start p-1">
                        <span>
                            <small>
                                #{task.id}{" "}
                            </small>
                        </span>
                    </div>
                    <div className="flex justify-center p-1">
                        <div>{task.item}</div>
                    </div>
                    <div className="flex justify-end p-1">
                        <Avatar
                            onClick={() => console.log(task)}
                            src={"https://joesch.moe/api/v1/random?key=" + task.id}
                        />
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Draggable>
    );
}
