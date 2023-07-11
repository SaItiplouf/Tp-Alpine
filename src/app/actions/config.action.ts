import { createAction, props } from '@ngrx/store';

export const Step1 = createAction('[Config] Step1', props<{ carId: number }>());
