import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { PaginationEffects} from './shared/store/users/user.Effects';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { paginationReducer } from './shared/store/users/user.reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';

@NgModule({
  declarations: [AppComponent,FooterComponent, LoaderComponent],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ pagination: paginationReducer }),
    EffectsModule.forRoot([PaginationEffects]),
    StoreDevtoolsModule.instrument({ maxAge: false, logOnly: !isDevMode() }),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
   },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
