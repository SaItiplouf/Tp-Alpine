import { createReducer, on } from '@ngrx/store';
import { Step1 } from './actions/config.action';

export interface State {
  selectedCarId: number | null;
}

export const initialState: State = {
  selectedCarId: null,
};

export const reducer = createReducer(
  initialState,
  on(Step1, (state, { carId }) => {
    return {
      ...state,
      selectedCarId: carId,
    };
  })
);
