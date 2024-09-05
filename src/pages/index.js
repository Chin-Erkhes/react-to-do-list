import { useState } from "react";
// import Div from "./index";

const Page = () => {
  const [inputValue, setInputValue] = useState("");
  const [lists, setList, list] = useState([]);

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };
  const addList = () => {
    setList([...lists, inputValue]);
    setInputValue("");
  };

  const deleteList = (listId) => {
    const newList = lists.filter((list) => list.id !== listId);
    setList(newList);
  };

  const doneList = (listId) => {
    const res = list.map((list) => {
      if (list.id === listId) {
        list.isDone = true;
        setList([...lists]);
      }
    });
    console.log(res);
  };

  return (
    <div>
      <input value={inputValue} onChange={(event) => handleInputValue(event)} />
      <button onClick={() => addList()}>add List</button>
      {lists.map((list, index) => {
        return (
          <div>
            <div key={index}>{list}</div>
            <button onClick={() => deleteList(list.id)}>delete</button>
            <button onClick={() => doneList(list.id)}>Done</button>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
