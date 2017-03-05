import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactsPage } from '../contacts/contacts';
import { PeopleService, LoginDetails } from '../../providers/people-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  errorMessage: String = "";

  login : LoginDetails = {
    username:"",
    password:""
  }

  constructor(public peopleService: PeopleService, public navController: NavController) {
    
  }
  
  submitLogin() {
    //console.log("login: " + this.login.username + "/" + this.login.password);
    this.peopleService.login(this.login).subscribe(data => {
      this.errorMessage = "";
      var body = data.json();
      this.peopleService.updateCurrentUser(body);
      //this.navController.push(ContactsPage);
      this.navController.setRoot(ContactsPage);
    }, error => {
      var body = error.json();
      if (body.code == null) {
        this.errorMessage = "CORS appears to be interfering!";
      } else {
        switch(body.code) {
            case 400:
                this.errorMessage = "Please enter a Username and Password.";
                break;
            case 401:
                this.errorMessage = "Incorrect Username or Password."
                break;
            default:
                this.errorMessage = "Error Code: " + body.code;
                break;
        }
      }
    });
  }

}
