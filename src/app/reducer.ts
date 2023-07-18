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
    let newState = {
      ...state,
      selectedCar: car,
    };
    console.log('Sélectionner Voiture', newState);

    return newState;
  }),
  on(Step2, (state, { Color }) => {
    let newState = {
      ...state,
      Color: Color,
    };
    console.log('Sélectionner Couleur', newState);

    return newState;
  }),
  on(Step3, (state, { Wheels }) => {
    let newState = {
      ...state,
      Wheels: Wheels,
    };
    console.log('Sélectionner Roues', newState);

    return newState;
  }),
  on(Step4, (state, { Seat }) => {
    let newState = {
      ...state,
      Seat: Seat,
    };
    console.log('Sélectionner Siège', newState);

    return newState;
  }),
  on(Step5, (state, { Equipment }) => {
    let newState = {
      ...state,
      Equipment: Equipment,
    };
    console.log('Sélectionner Équipement', newState);

    return newState;
  }),
  on(Step6, (state, { Accessoire }) => {
    let newState = {
      ...state,
      Accessoire: Accessoire,
    };
    console.log('Sélectionner Accessoire', newState);

    return newState;
  })
);
