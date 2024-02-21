import React, { useState } from "react";
import { RiAddFill } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import { MdLibraryMusic, MdSystemUpdateAlt } from "react-icons/md";

const App = () => {
  const [task, settask] = useState("");
  const [maintask, setmaintask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask, { task }]);
    settask("");
  };

  const deleteHandler=(i)=>{
    let copy=[...maintask]
    copy.splice(i,1)
    setmaintask(copy)
  }

  const updateHandler=()=>{
    var heading = document.getElementsByClassName("renderul");
    // Toggle the contenteditable attribute
    heading.attributes( 'contentEditable', 'true' );
  }

  let render = <h1 contentEditable='false'>No Task Available</h1>;

  if (maintask.length > 0) {
    render = maintask.map((t, i) => {
      return (
        <li className="flex justify-between items-center mt-2 list-none">
          <h1 className="font-semibold" >{t.task}</h1>
          <div className="flex gap-2 w-[10%]">
            <button onClick={()=>{deleteHandler(i)}} className="w-20 h-7 bg-red-400 flex justify-center items-center rounded">
              <AiOutlineDelete />
            </button>
            <button onClick={()=>{updateHandler()}} className="w-20 h-7 bg-red-400 flex justify-center items-center rounded">
              <MdSystemUpdateAlt />
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <div className="h-screen w-full flex justify-center items-center bg-zinc-600">
      <div className="w-[60%] h-[55%] bg-zinc-300 p-4 mt-3 overflow-hidden scroll-m-0 rounded">
        <div className="w-full h-10% flex justify-center">
          <h1 className="text-6xl font-bold">TODOLIST.</h1>
        </div>

        <form onSubmit={submitHandler}>
          <div className="w-full h-[10%] flex my-2 gap-1">
            <input
              className="w-full px-3 py-1 border-none bg-slate-200 rounded"
              type="text"
              placeholder="Enter Your Task"
              value={task}
              onChange={(e) => {
                settask(e.target.value);
              }}
            />
            <button className="bg-green-600 w-[7%]  flex justify-center items-center rounded">
              <RiAddFill className="w-full" />
            </button>
          </div>
        </form>
        <div className="w-full p-2">
          <ul contentEditable='true'>{render}</ul>
        </div>
      </div>
    </div>
  );
};

export default App;
