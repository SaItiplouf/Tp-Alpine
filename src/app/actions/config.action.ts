import { createAction, props } from '@ngrx/store';
import ICar from '../model/car.model';
import IColor from "../model/color.model";

export const Step1 = createAction('[Config]Step1', props<{ car: ICar }>());
export const Step2 = createAction('[Config]Step2', props<{ Color: IColor }>());
export const Step3 = createAction('[Config]Step3', props<{ Wheels: string }>());

export const Step4 = createAction('[Config]Step4', props<{ Seat: string }>());
