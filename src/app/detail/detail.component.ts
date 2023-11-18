import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MuseumObject } from '../models/type';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute){}
  detailDepartment!: MuseumObject;
  ngOnInit():void{
    this.activatedRoute.data.subscribe(
      (({ dettaglioDepartment })=>{
        this.detailDepartment=dettaglioDepartment;
      })
    )
  }
}
