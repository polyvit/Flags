import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectControls } from "../controls/controls-slice";
import { selectVisibleCountries, selectCountriesInfo } from "./countries-slice";
import { loadCountries } from "./countries-slice";

const useCountries = () => {
  const dispatch = useDispatch();
  const controls = useSelector(selectControls);
  const countries = useSelector((state) =>
    selectVisibleCountries(state, controls)
  );
  const { status, error, quantity } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!quantity) {
      dispatch(loadCountries());
    }
  }, [quantity, dispatch]);

  return [countries, { status, error, quantity }];
};

export default useCountries;
