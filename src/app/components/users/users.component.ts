import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;
  enableAdd: boolean = true;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {
  
    this.users = [
      {
        firstName: 'RJ',
        lastName: 'Robinson',
        age: 54,
        address: {
            street: '25577 Cottonwood Rd',
            city: 'Loma Linda',
            state: 'CA'
      },
      hide: true
    },

    {
      firstName: 'Mickey',
      lastName: 'Mouse',
      age: 65,
      address: {
          street: '123 Disney',
          city: 'Anaheim',
          state: 'CA'
    },
    hide: true
  },
  {
    firstName: 'Daffy',
    lastName: 'Duck',
    age: 70,
    address: {
        street: '564 Oak Street',
        city: 'Burbank',
        state: 'CA'
  },
  hide: true

}

];

  }

  toggleHide(user) {
    user.hide = !user.hide;
  }

  onSubmit() {

  }
}
