import Info from "./Info";
import useDetails from "./use-details";

const CountryDetails = ({ name = "", navigate }) => {
  const { country: currentCountry, status, error } = useDetails(name);
  return (
    <>
      {status === "pending" && <h2>Loading...</h2>}
      {status === "error" && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  );
};

export default CountryDetails;
