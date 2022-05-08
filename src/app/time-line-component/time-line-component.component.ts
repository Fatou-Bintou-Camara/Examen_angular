import { Component, OnInit } from '@angular/core';
import { Isl } from '../model/Isl.model';
import {IslSnapServiceService} from "../service/isl-snap-service.service";

@Component({
  selector: 'app-time-line-component',
  templateUrl: './time-line-component.component.html',
  styleUrls: ['./time-line-component.component.scss']
})
export class TimeLineComponentComponent implements OnInit {

  constructor(private IslSnapService: IslSnapServiceService ) { }
  pub ! : Isl[];
  ngOnInit(): void {
     this.pub = this.IslSnapService.getAllSnap();
  }

}
