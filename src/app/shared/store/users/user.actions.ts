import { createAction, props } from '@ngrx/store';
import { Users } from '../../interface/users';

export const loadPage = createAction('[user page] Load Page', props<{ page: number }>());
export const loadPageSuccess = createAction('[user page] Load Page Success', props<{ data: Users[] }>());
export const loadPageFailure = createAction('[user page] Load Page Failure', props<{ error: any }>());
export const setPage = createAction('[user page] Set Page', props<{ page: number }>());