import { createReducer, on } from '@ngrx/store';
import * as PaginationActions from './user.actions';
import { Users } from '../../interface/users';

export interface PaginationState {
  currentPage: number;
  data: Users[];
  loading: boolean;
  error: any;
}

export const initialPaginationState: PaginationState = {
  currentPage: 1,
  data: [],
  loading: false,
  error: null
};

export const paginationReducer = createReducer(
  initialPaginationState,
  on(PaginationActions.loadPage, state => ({ ...state, loading: true })),
  on(PaginationActions.loadPageSuccess, (state, { data }) => ({ ...state, data, loading: false })),
  on(PaginationActions.loadPageFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(PaginationActions.setPage, (state, { page }) => ({ ...state, currentPage: page }))
);