// import React from "react";

// import { useState } from "react";

// export const Todo = (props) => {
//   const [editInput, setEditInput] = useState("");
//   const [addInEdit, setAddInEdit] = useState({
//     show: false
//   });

//   const EditItem = () => {
//     console.log("edit");
//     setAddInEdit({ show: true });
//   };
//   const funEditUpdate = (event) => {
//     setEditInput(event.target.value.trim());
    
//   };
//   return (
//     <>
//       <div className="todo_style">
//         <button
//           className={props.classNameDelete}
//           onClick={() => {
//             props.onSelect(props.id);
//           }}
//         >
//           X
//         </button>
//         <li className={props.className}>{props.text}</li>
//         {addInEdit.show ? (
//           <>
//             <br />
//             <input type="text" placeholder="Edit" onChange={funEditUpdate} />
//             <button
//               onClick={() => {
//                 props.onEdit(props.id, editInput);
//                 setAddInEdit({ show: false });
//               }}
//             >
//               +
//             </button>
//           </>
//         ) : (
//           <button className={props.classNameEdit} onClick={EditItem}>
//             edit
//           </button>
//         )}
//       </div>
//     </>
//   );
// };


// export default Todo;
// const [item, setItem] = useState("");
// const [itemArr, setItemArr] = useState([]);

// const itemValue = (event) => {
//   setItem(event.target.value.trim());
// };

// const ChangeValue = () => {
//   if (item !== "") {
//     setItemArr([...itemArr, item]);
//     setItem("");
//   }
// };

// const deletitem = (id) => {

//   setItemArr((preValue) => {
//     return preValue.filter((item, index) => {
//       return index !== id;
//     });
//   });
// };

// const updateItem = (id, editValue) => {
 
//   if (editValue !== "") {
//     setItemArr((preValu) => {
//       preValu[id] = editValue;
//       return [...preValu];
//     });
//   }
// };

// return (
//   <>
//     <div id="main">
//       <div className="center_div">
//         <br />
//         <h1>ToDo List</h1>
//         <br />
//         <InputItems
//           id="task"
//           type="text"
//           placeholder="Add a Item"
//           value={item}
//           onChange={itemValue}
//         />
//         <button id="btn" onClick={ChangeValue}>
//           +
//         </button>
//         <ol>
//           {itemArr.map((itemCur, index) => {
//             return (
//               <Todo
//                 className="list"
//                 classNameDelete="delete"
//                 classNameEdit="edit"
//                 key={index}
//                 id={index}
//                 text={itemCur}
//                 onSelect={deletitem}
//                 onEdit={updateItem}
//               />
//             );
//           })}
//         </ol>
//       </div>
//     </div>
//     ;
//   </>