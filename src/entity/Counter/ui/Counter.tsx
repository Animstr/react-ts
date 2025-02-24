/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { counterActions } from "../model/slice/CounterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
    const counterValue = useSelector(getCounterValue)
    const dispatch = useDispatch()
    const increaseCounter = () => {
        dispatch(counterActions.increment())
    }

    const decreaseCounter = () => {
        dispatch(counterActions.decrement())
    }
    return (
        <div>
            <h2 data-testid='value-title'> value = {counterValue}</h2>
            <Button data-testid='increment' onClick={increaseCounter}>increment</Button>
            <Button data-testid='decrement' onClick={decreaseCounter}>decrement</Button>
        </div>
    );
};