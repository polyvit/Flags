import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectDetails } from "./details-slice";
import { loadCountryInfo, clearDetails } from "./details-slice";

const useDetails = (name) => {
  const details = useSelector(selectDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountryInfo(name));
    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);

  return details;
};

export default useDetails;
