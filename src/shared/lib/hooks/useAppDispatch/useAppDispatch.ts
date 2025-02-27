import { useDispatch } from "react-redux";
import { AppDispatch } from "shared/config/redux/types/useAsyncThunkTypes";


export const useAppDispatch = () => useDispatch<AppDispatch>();