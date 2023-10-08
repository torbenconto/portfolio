import "./TerminalInput.css"

function TerminalInput() {
    return (
        <>
        <div className="flex space-x-1">
            <p className="font-semibold flex name-color">torbenconto
                <p className="font-normal at-symbol-color">@</p>
                <p className="font-normal location-color">nhhs</p>
                <p className="font-semibold arrow-color ml-1">&gt;</p>
            </p>
            <input className="input-box px-1 text-white" />
        </div>
        </>
    )
}

export default TerminalInput;