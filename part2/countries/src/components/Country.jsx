export const Country = ({country,handleClickShow}) => {
    return (
        <>
            <p>{country.name.common} <button onClick={() => handleClickShow(country)}>Show</button></p>
        </>
    )
}