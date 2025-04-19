import React from "react";

export const Item =({task})=> {
    return(
        <div className="item">
            <ul>
                
                <li>{task.task}</li>
                </ul>
        </div>
    )
}