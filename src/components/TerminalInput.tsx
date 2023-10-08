import React, { useState, useRef, useEffect, FC } from "react";
import "./TerminalInput.css";
import NeoFetch from "./NeoFetch";
import Projects from "./Projects";

type InputProps = {
  setDone: (done: boolean) => void;
  autoFocus: boolean;
  initialCommand?: string;
};

const Input: FC<InputProps> = ({ setDone, autoFocus, initialCommand }) => {
  const [output, setOutput] = useState<any>("");
  const [hasRunInitialCommand, setHasRunInitialCommand] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }

    if (!hasRunInitialCommand && initialCommand) {
      setOutput(<NeoFetch />);
      if (inputRef.current) {
        inputRef.current.value = initialCommand
        inputRef.current.disabled = true
      }
      setDone(true);
      setHasRunInitialCommand(true);
    }

  }, [autoFocus, hasRunInitialCommand, initialCommand, setDone]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (e.currentTarget.value === "projects") {
        setOutput(<Projects />);
      }
      setDone(true);
      e.currentTarget.disabled = true;
    }
  };

  return (
    <>
      <div className="flex space-x-1">
        <p className="font-semibold flex name-color">
          torbenconto
          <p className="font-normal at-symbol-color">@</p>
          <p className="font-normal location-color">nhhs</p>
          <p className="font-semibold arrow-color ml-1">&gt;</p>
        </p>
        <input
          className="input-box px-1 text-white"
          onKeyDown={handleKeyPress}
          ref={inputRef}
          disabled={!autoFocus}
        />
      </div>
      {output && output}
    </>
  );
};

const TerminalInput: FC = () => {
  const [done, setDone] = useState(false);
  const [inputs, setInputs] = useState<JSX.Element[]>([
    <Input key={0} setDone={setDone} autoFocus={true} initialCommand="neofetch" />,
  ]);

  const addNewInput = () => {
    if (done) {
      const newInputs = [...inputs];
      newInputs.push(<Input key={newInputs.length} setDone={setDone} autoFocus={true} />);
      setInputs(newInputs);
      setDone(false);
    }
  };

  useEffect(() => {
    addNewInput();
  }, [done]);

  return <>{inputs}</>;
};

export default TerminalInput;
