import { createAction, props } from '@ngrx/store';

export const Step1 = createAction('[Config]Step1', props<{ carId: number }>());
export const Step2 = createAction('[Config]Step2', props<{ Color: string }>());
