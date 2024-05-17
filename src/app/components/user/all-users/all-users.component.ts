import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { style,animate,transition,trigger,} from '@angular/animations';
import {selectData,selectLoading,selectError,selectCurrentPage} from '../../../shared/store/users/user.selectors';
import { loadPage, setPage } from '../../../shared/store/users/user.actions';
import { Users } from 'src/app/shared/interface/users';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
  animations: [
    trigger('bounce', [
      transition(':enter', [
        animate('0.5s', style({ transform: 'scale(1.2)' })),
        animate('0.5s', style({ transform: 'scale(1)' })),
      ]),
    ]),
  ],
})

export class AllUsersComponent {
  term: string = '';
  allUsers: any[] = [];
  NextDisabled: boolean = false;
  prevDisabled: boolean = false;
  data$!: Observable<Users[]>;
  currentPage$!: Observable<number>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;
  pageNumber!: number;
  loading: boolean = true;
  
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.currentPage$ = this.store.pipe(select(selectCurrentPage));
    this.currentPage$.subscribe((res: any) => {
      this.pageNumber = res;
    });
    this.data$ = this.store.pipe(select(selectData));
    this.data$.subscribe((res: any) => {
      this.allUsers = res?.data;
    });
    this.loading$ = this.store.pipe(select(selectLoading));
    this.loading$.subscribe((res: any) => {
      this.loading = res;
    });
    this.error$ = this.store.pipe(select(selectError));
    this.loadData(1);
  }

  loadData(page: number) {
    this.store.dispatch(loadPage({ page }));
  }

  onPageChange(page: number) {
    if (page >= 2) {
      this.NextDisabled = true;
    } else {
      this.NextDisabled = false;
    }
    if (page <= 1) {
      this.prevDisabled = true;
    } else {
      this.prevDisabled = false;
    }
    this.store.dispatch(setPage({ page }));
    this.loadData(page);
  }
  
}
