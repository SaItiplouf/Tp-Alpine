import { createAction, props } from '@ngrx/store';
import ICar from '../model/car.model';
import IColor from "../model/color.model";
import IRim from 'src/app/model/rim.model';
import ISellerie from 'src/app/model/sellerie.model';
import IEquipment from 'src/app/model/equipment.model';
import IAccessoire from 'src/app/model/accessoire.model';

export const Step1 = createAction('[Config]Step1', props<{ car: ICar }>());
export const Step2 = createAction('[Config]Step2', props<{ Color: IColor }>());
export const Step3 = createAction('[Config]Step3', props<{ Wheels: IRim }>());
export const Step4 = createAction('[Config]Step4', props<{ Seat: ISellerie }>());
export const Step5 = createAction('[Config]Step5', props<{ equipment_category :string, Equipment: IEquipment }>());
export const Step6 = createAction('[Config]Step6', props<{ Accessoire: IAccessoire }>());
