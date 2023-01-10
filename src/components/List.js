import React from "react";

const List = ({list}) => {
    
    return (
        <div>
            <ul style= {{listStyle: 'none'}}>
            {list.map((listItem) => {
             return <li key = {listItem.id}>{`${listItem.first_name} ${listItem.last_name}`}</li>
            })}
            
            </ul>
        </div>
    )
}

export default List