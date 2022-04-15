// 새로운 할 일 추가
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { todoInsert } from "../reducer/Todo";

const TodoInput = () => {
    const [todoInput, setTodoInput] = useState("");
    let nextId = useRef(2);

    const dispatch = useDispatch();

    const onChangeInput = (e) => {
        setTodoInput(e.target.value);
    }

    const onclickAddBtn = () => {
        dispatch(todoInsert(nextId.current, todoInput));
        nextId.current++;
        setTodoInput("");
    }

    return (
        <>
            <input 
                value={todoInput}
                onChange={onChangeInput}
            />
            <button onClick={onclickAddBtn}>확인</button>
        </>
    );
}

export default TodoInput;