import { Component, OnInit } from '@angular/core';

import { AdalService } from 'adal-angular4';

import { HttpClient } from '@angular/common/http';



@Component({

  selector: 'app-home',

  templateUrl: './home.component.html',

  styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit {



  user: any;

  profile: any;
  data:any;


  constructor(private adalService: AdalService, protected http: HttpClient) { }



  ngOnInit() {



    this.user = this.adalService.userInfo;



    this.user.token = this.user.token.substring(0, 10) + '...';

  }



  public getProfile() {

    console.log('Get Profile called');

    //https://graph.microsoft.com/v1.0/me
    //http://localhost:63464/api/values
    return this.http.get("https://graph.microsoft.com/v1.0/me");

  }
  public getValues() {

    console.log('Get Profile called');

    //https://graph.microsoft.com/v1.0/me
    //http://localhost:63464/api/values
    return this.http.get("http://localhost:63464/api/values");

  }



  public profileClicked() {

    this.getProfile().subscribe({

      next: result => {

        console.log('Profile Response Received');

        this.profile = result;

      }

    });

  }

  public apiClicked() {

    this.getValues().subscribe({

      next: result => {

        console.log('Profile Response Received');

        this.data = result;

      }

    });
  }

}
