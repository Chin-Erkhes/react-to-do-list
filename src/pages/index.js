import { useState } from "react";
import Div from "@/components/Hook";

const Page = () => {
  const [inputValue, setInputValue] = useState("");
  const [lists, setList] = useState([]);

  const handleInputValue = (value) => {
    setInputValue(value.target.value);
  };

  const handleAddValue = () => {
    if (inputValue == "") return;
    setList([...lists, inputValue]);
    setInputValue("");
  };

  const removeMe = (index) => setList(lists.filter((_, i) => i !== index));
  return (
    <div className="parent-position">
      <div className="position">
        <input value={inputValue} onChange={(e) => handleInputValue(e)} />
        <button onClick={() => handleAddValue()}>Add</button>
      </div>
      {lists.map((list, index) => {
        return (
          <Div
            key={index}
            list={list}
            index={index}
            onDelete={() => removeMe(index)}
          />
        );
      })}
    </div>
  );
};

export default Page;
