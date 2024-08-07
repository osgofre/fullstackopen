export const Filter = ({handler}) => {
    return (
        <div className="filter">
            filter shown with
            <input
            onChange={handler}
            />
        </div>
    )
}