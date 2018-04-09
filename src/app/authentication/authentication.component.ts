import { Component, OnInit} from '@angular/core';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [AuthenticationService]
})
export class AuthenticationComponent implements OnInit {
  public user;
  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.user.subscribe(user=> {
      if (user && user.emailVerified) {
        this.user = user;
      }
      console.log(user)
    })
  }

  logout() {
    this.authService.logout();
    this.user = null;
  }
}
