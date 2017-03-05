import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PeopleService } from '../../providers/people-service';
import { HomePage } from '../home/home';

/*
  Generated class for the Contacts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {

  public contacts: any;

  
  constructor(public peopleService: PeopleService, public navCtrl: NavController, public navParams: NavParams) {
    this.loadContacts();
  }

  
  loadContacts() {
    this.peopleService.getContacts()
    .subscribe(data => {
      var body : any = data.json();
      this.contacts = data.json().data;
      console.log(this.contacts);
    }, error => {
      var body : any = error.json();
      this.logout();
    });
  }
  
  
  logout() {
    this.peopleService.logout().subscribe(data => {
      console.log("Successfully Logged Out!");
      this.navCtrl.setRoot(HomePage);
    }, error => {
      console.log("Unable to logout -> guess just redirect anyway?");
      this.navCtrl.setRoot(HomePage);
    });
  }

}
