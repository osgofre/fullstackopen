export const PersonForm = ({newName,newNumber,handleChangeName,handleChangeNumber,handleSubmit}) => {
    return (
        <div className="personform">
            <form onSubmit={handleSubmit}>
                <div>
                name:
                <input
                    value={newName}
                    onChange={handleChangeName}
                />
                </div>
                <div>
                number:
                <input
                    value={newNumber}
                    onChange={handleChangeNumber}
                />
                </div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}