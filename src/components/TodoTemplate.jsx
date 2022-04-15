// todolist를 보여주는 전체 틀

import React from "react";
import './TodoTemplate.css';

const TodoTemplate = ({children}) => {
    return (
        <div className="container">
            <h1>할 일</h1>
            <div>{children}</div>
        </div>
    )
}

export default TodoTemplate;