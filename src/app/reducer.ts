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
    if (!state.selectedCar) return state
    let newState = {
      ...state,
      selectedCar :  {
        ...state.selectedCar,
        couleurs : Color
      }
    };
    console.log('Sélectionner Couleur', newState);

    return newState;
  }),
  on(Step3, (state, { Wheels }) => {
    if (!state.selectedCar) return state
    let newState = {
      ...state,
      selectedCar :  {
        ...state.selectedCar,
        jantes : Wheels
      }
    };
    console.log('Sélectionner Roues', newState);

    return newState;
  }),
  on(Step4, (state, { Seat }) => {
    if (!state.selectedCar) return state
    let newState = {
      ...state,
      selectedCar :  {
        ...state.selectedCar,
        scellerie : Seat
      }
    };
    console.log('Sélectionner Siège', newState);

    return newState;
  }),
  on(Step5, (state, { equipment_category, Equipment }) => {
    if (!state.selectedCar) return state
    let newState = {
      ...state,
      selectedCar :  {
        ...state.selectedCar,
        equipements : {
          ...state.selectedCar.equipements,
          
        }
    }
  };
    console.log('Sélectionner Équipement', newState);

    return newState;
  }),
  on(Step6, (state, { Accessoire }) => {
    if (!state.selectedCar) return state
    let newState = {
      ...state,
      selectedCar :  {
        ...state.selectedCar,
        accessoires : {
          ...state.selectedCar.accessoires,

        } ,
    }
  };
    console.log('Sélectionner Accessoire', newState);

    return newState;
  })
);
