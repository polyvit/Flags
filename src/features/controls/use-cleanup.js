import { useDispatch } from "react-redux";
import { setClear } from "./controls-slice";

const useCleanup = () => {
  const dispatch = useDispatch();
  const cleanUp = () => dispatch(setClear());
  return cleanUp;
};

export default useCleanup;
