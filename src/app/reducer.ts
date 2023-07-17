import { createReducer, on } from '@ngrx/store';
import {Step1, Step2, Step3, Step4, Step5, Step6} from './actions/config.action';
import ICar from './model/car.model';

export interface State {
  selectedCar : ICar | undefined
}

export const initialState: State = {
  selectedCar : undefined,
};

export const reducer = createReducer(
  initialState,
  on(Step1, (state, { car }) => {
    let newState =  {
      ...state,
      selectedCar: car,
    };
    console.log('Select Car', newState);
    
    return newState;
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
  }),
  on(Step5, (state, { Equipment }) => {
    return {
      ...state,
      Equipment: Equipment,
    };
  }),
  on(Step6, (state, { Accessoire }) => {
    return {
      ...state,
      Accessoire: Accessoire,
    };
  })
);
