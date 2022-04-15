// // 체크박스, 투두텍스트, 수정/삭제 보여줄 컴포넌트
// import React, { useCallback, useState } from "react";
// import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { todoRemove, todoToggle, todoUpdate} from "../reducer/Todo";
// import './TodoItem.css';

// const TodoItem = ({todo}) => {
//     const {id, text, isCompleted} = todo;
//     const dispatch = useDispatch();
//     const [updateText, setUpdateText] = useState(text);
//     // const [readOnly, setReadOnly] = useState(true);

//     const updateTodo = () => {
//         // setReadOnly(!readOnly);
//         // console.log(!readOnly);
//     }

//     const onChangeText = useCallback(
//         (e) => {
//             const {value} = e.target;
//             setUpdateText(value);
//         },
//         [updateText]
//     );

//     // const onChangeText = (e) => {
//     //     const {value} = e.target;
//     //     setUpdateText(value);
//     // }

//     const onSubmit = (e) => {
//         e.preventDefault();
//         dispatch(todoUpdate(id, updateText))
//     }

//     return (
//         <div className="todoitem">
//             <div className={`checkBtn ${isCompleted}`} onClick={() => dispatch(todoToggle(id))}>
//                 {isCompleted ? (
//                 <FaRegCheckSquare  color="blue" />
//                 ) : (
//                 <FaRegSquare />
//                 )}
//             </div>
//             <form onSubmit={onSubmit}>
//                 <input 
//                     className="textbox" 
//                     // id="text"
//                     value={text} 
//                     checked={isCompleted}
//                     onChange={onChangeText}
//                     // onBlur={() => dispatch(todoUpdate(id, updateText))}
//                 />
//                 <button type="submit">수정</button>
//             </form>

//             <button onClick={() => dispatch(todoRemove(id))}>
//                 삭제
//             </button>
//         </div>
//     );
// }

// export default TodoItem;

import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { todoRemove, todoToggle, todoUpdate } from "../reducer/Todo";
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";
import './TodoItem.css';
const TodoItem = ({ todo }) => {
  const { id, text, isCompleted } = todo;
  const [readOnly, setReadOnly] = useState(true);
  const [updateText, setUpdateText] = useState(text);
  const dispatch = useDispatch();

  const onChangeText = useCallback(
    (e) => {
      const { value } = e.target;
      setUpdateText(value);
    },
    [updateText]
  );

  const updateTodo = () => {
    if (!isCompleted) {
      setReadOnly(false);
    }
  };

  return (
  
  // 체크 박스
    <div className="todoitem">
      <span onClick={() => dispatch(todoToggle(id))} className="checkBtn">
        {isCompleted ? (
          <FaRegCheckSquare color="#cdcdcd" />
        ) : (
          <FaRegSquare />
        )}
      </span>
      
  {/* 인풋(텍스트) */}
      <input
        className="textbox"
        name="text"
        readOnly={readOnly}
        defaultValue={text}
        checked={isCompleted}
        onChange={onChangeText}
        onBlur={() => dispatch(todoUpdate(id, updateText))}
      />

  {/* 수정 버튼 */}
      {!isCompleted ? (
        <button onClick={updateTodo}>
          수정
        </button>
      ) : (
        <></>
      )}
  
  {/* 삭제 버튼 */}
      <button onClick={() => dispatch(todoRemove(id))}>
        삭제
      </button>
    </div>
  );
};

export default TodoItem;