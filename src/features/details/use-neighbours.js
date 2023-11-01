import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectNeighbours, loadNeighbours } from "./details-slice";

const useNeighbours = (borders = []) => {
  const dispatch = useDispatch();
  const neighbours = useSelector(selectNeighbours);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighbours(borders));
    }
  }, [borders, dispatch]);

  return neighbours;
};

export default useNeighbours;
