import { AccessService } from '../access.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.page.html',
  styleUrls: ['./inside.page.scss'],
})
export class InsidePage implements OnInit {

  logoutTimer = this.accessService.logoutTimer.asObservable();
  
  constructor(private accessService: AccessService) { }

  ngOnInit() {}

  ionViewDidEnter()
  {
    this.accessService.resetLogoutTimer();
  }

}
