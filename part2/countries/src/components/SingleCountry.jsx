export const SingleCountry = ({country}) => {    
    return (
        <div className="country">
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area}</p>
            <p>Population: {country.population}</p>
            <h2>Languages</h2>
            <ul>
                {Object.values(country.languages).map((language,i) => <li key={i}>{language}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} width="100px"/>
        </div>
    )
}