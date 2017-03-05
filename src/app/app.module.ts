import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { PeopleService } from '../providers/people-service';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactsPage } from '../pages/contacts/contacts';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PeopleService
  ]
})
export class AppModule {}
