import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as PaginationActions from './user.actions';
import { UsersService } from '../../services/users.service';

@Injectable()
export class PaginationEffects {
  loadPage$ = createEffect(() => this.actions$.pipe(
    ofType(PaginationActions.loadPage),
    switchMap(({ page }) => this.dataService.getAllUsers(page).pipe(
      map(data => PaginationActions.loadPageSuccess({ data })),
      catchError(error => of(PaginationActions.loadPageFailure({ error })))
    ))
  ));

  constructor(private actions$: Actions, private dataService: UsersService) {}
}
