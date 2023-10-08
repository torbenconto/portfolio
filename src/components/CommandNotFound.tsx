
function CommandNotFound({ command }: {command: string}) {
    return (
        <p className="text-white">-bash: {command}: command not found</p>
    )
}

export default CommandNotFound;