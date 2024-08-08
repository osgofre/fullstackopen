import { useEffect } from "react";
import { Country } from "./Country";
import { SingleCountry } from "./SingleCountry";

export const Countries = ({ countries, handleClickShow }) => {
    useEffect(() => {
        if (countries.length > 10 || countries.length === 1) {
            handleClickShow(null);
        }
    }, [countries, handleClickShow]);

    if (countries.length > 10) {
        return <p>Too many matches, specify another filter</p>;
    } else if (countries.length === 1) {
        return <SingleCountry country={countries[0]} />;
    } else if (countries.length <= 10) {
        return (
            <>
                {countries.map((country) => (
                    <Country
                        key={country.name.common}
                        country={country}
                        handleClickShow={handleClickShow}
                    />
                ))}
            </>
        );
    }
}