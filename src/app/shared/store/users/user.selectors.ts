import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PaginationState } from './user.reducers';

export const selectPaginationState = createFeatureSelector<PaginationState>('pagination');

export const selectCurrentPage = createSelector(
  selectPaginationState,
  (state: PaginationState) => state.currentPage
);

export const selectData = createSelector(
  selectPaginationState,
  (state: PaginationState) => state.data
);

export const selectLoading = createSelector(
  selectPaginationState,
  (state: PaginationState) => state.loading
);

export const selectError = createSelector(
  selectPaginationState,
  (state: PaginationState) => state.error
);
