
function CommandNotFound({ command }: {command: string}) {
    return (
        <p className="text-white text-md">-bash: {command}: command not found</p>
    )
}

export default CommandNotFound;