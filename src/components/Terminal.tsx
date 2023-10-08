import React from "react";

import "./Terminal.css"
import TerminalInput from "./TerminalInput";

function Terminal() {
    return (
        <div className="w-full min-h-screen terminal-main-bg p-2 cascadia-code">
            <TerminalInput />
        </div>
    )
}

export default Terminal;