import { createReducer, on } from '@ngrx/store';
import { Step1, Step2, Step3, Step4 } from './actions/config.action';
import DATA from '../app/data.ts';

export interface State {
  selectedCarId: number;
  Color: string;
  Wheels: string;
  Seat: string;
  Data: typeof DATA;
}

export const initialState: State = {
  selectedCarId: 0,
  Color: "",
  Wheels: "",
  Seat: "",
  Data: DATA,
};
export const reducer = createReducer(
  initialState,
  on(Step1, (state, { carId }) => {
    return {
      ...state,
      selectedCarId: carId,
    };
  }),
  on(Step2, (state, { Color }) => {
    return {
      ...state,
      Color: Color,
    };
  }),
  on(Step3, (state, { Wheels }) => {
    return {
      ...state,
      Wheels: Wheels,
    };
  }),
  on(Step4, (state, { Seat }) => {
    return {
      ...state,
      Seat: Seat,
    };
  })
);
