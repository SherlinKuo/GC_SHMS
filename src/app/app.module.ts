import { MatImportModule, TW_FORMATS } from './mat-import/mat-import.module';
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ConfirmComponent } from './components/dialog/confirm/confirm.component';
import { DatePipe } from '@angular/common';
import { ConfigService } from './service/config.service';
import { DepositaryComponent } from './components/depositary/depositary.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { EditDepositaryComponent } from './components/dialog/edit-depositary/edit-depositary.component';
import { CreateDepositaryComponent } from './components/dialog/create-depositary/create-depositary.component';
import { ItemDataUpdateComponent } from './components/item-data-update/item-data-update.component';
import { OrderDepositaryComponent } from './components/order-depositary/order-depositary.component';
import { EditOrderComponent } from './components/dialog/edit-order/edit-order.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ConfirmComponent,
    DepositaryComponent,
    EditDepositaryComponent,
    CreateDepositaryComponent,
    ItemDataUpdateComponent,
    OrderDepositaryComponent,
    EditOrderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatImportModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,


  ],
  providers: [{ provide: LOCALE_ID, useValue: 'zh-TW' }, DatePipe, ConfigService,
  {
    provide: APP_INITIALIZER,
    useFactory:(config: ConfigService) => {return () => config.load()},
    deps:[ConfigService],
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function ConfigLoader(config: ConfigService){
  return () => config.load();
}
