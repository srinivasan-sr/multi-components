import { TextInputProps } from "./textinput.types";
import { useState } from "react";

export const TextInput = ({
  id,
  type,
  placeholder,
  defaultValue,
  classes,
  onChangeHandler,
}: TextInputProps) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const onTextChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
    onChangeHandler(event.currentTarget.value);
  };
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={onTextChangeHandler}
      onFocus={(e: React.FocusEvent<HTMLInputElement, Element>) =>
        e.currentTarget.select()
      }
      className={classes}
    />
  );
};
