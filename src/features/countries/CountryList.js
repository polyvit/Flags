import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import useCountries from "./use-countries";
import List from "../../components/List";
import Card from "../../components/Card";

const CountryList = () => {
  const navigate = useNavigate();
  const [countries, { status, error }] = useCountries();

  return (
    <Fragment>
      {error && <h2>Can't fetch data</h2>}
      {status === "loading" && <h2>Loading....</h2>}
      {status === "received" && countries.length > 0 && (
        <List>
          {countries.map((country) => {
            const countryInfo = {
              img: country.flags.png,
              name: country.name,
              info: [
                {
                  title: "Population",
                  description: country.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: country.region,
                },
                {
                  title: "Capital",
                  description: country.capital,
                },
              ],
            };

            return (
              <Card
                key={country.name}
                onClick={() => navigate(`/country/${country.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
      {status === "received" && countries.length === 0 && (
        <h2>Ничего не найдено</h2>
      )}
    </Fragment>
  );
};

export default CountryList;
