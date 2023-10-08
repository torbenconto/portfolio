import React, { useState, useRef, useEffect, FC } from "react";
import "./TerminalInput.css";

type InputProps = {
  setDone: (done: boolean) => void;
  autoFocus: boolean;
  initialCommand?: string;
};

const Input: FC<InputProps> = ({ setDone, autoFocus, initialCommand }) => {
  const [output, setOutput] = useState<string>("");
  const [hasRunInitialCommand, setHasRunInitialCommand] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }

    if (!hasRunInitialCommand && initialCommand) {
      setOutput("Running initial command...");
      setDone(true);
      setHasRunInitialCommand(true);
    }
  }, [autoFocus, hasRunInitialCommand, initialCommand, setDone]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setOutput(e.currentTarget.value);
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
      {output && <p>{output}</p>}
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
