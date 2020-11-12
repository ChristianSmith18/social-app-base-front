import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RoutesRecognized,
  Scroll,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLogin: boolean;
  menuState = true;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof Scroll) {
        this.isLogin = window.location.pathname === '/login' ? true : false;
      }
    });
  }
}
