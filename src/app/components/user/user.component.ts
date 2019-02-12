
import { Component, OnInit } from '@angular/core';
import { UrlSegment } from '@angular/router';
import { User } from '../../models/User'

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
      
    user: User;
       
   
    constructor() {
        
    }
   

    ngOnInit() {
        this.user = {
            firstName: 'RJ',
            lastName: 'Robinson',
            age: 54,
            address: {
                street: '25577 Cottonwood Rd',
                city: 'Loma Linda',
                state: 'CA'
        }

    }

    }
}

