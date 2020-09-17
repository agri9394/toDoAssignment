import React, { useState } from 'react';
import './index.css';

interface InputComponentProps {
    buttonClickCallback: (text:string) => void
}

function InputComponent(props:InputComponentProps) {
    const [text,setText] = useState('')
    const onChangeText = (e:any) => {
        setText(e.target.value)
    }

    const onClickButtonAction = () => {
        if (text.trim() !== ''){
            props.buttonClickCallback(text)
            setText('')
        }
    }

  return (
    <div className="rootContainer">
    <input  data-testid="todo-input-field" className="todo-textField" type="text" value={text} placeholder="Enter your todo here" onChange={onChangeText}/>
    <button data-testid="add-Button" className="todo-Button" onClick={onClickButtonAction}>Add</button>
    </div>
  );
}

export default InputComponent;
