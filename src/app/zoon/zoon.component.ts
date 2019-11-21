import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoon',
  templateUrl: './zoon.component.html',
  styleUrls: ['./zoon.component.css']
})
export class ZoonComponent implements OnInit {



   Zoon: Object = {
    "zoonNaam":
      [
        {
          "naam": 'Pinokkio'
        },
        {
          "naam": 'Rietje'
        },
        {
          "naam": 'Aggie'
        },
        {
          "naam": 'Lola'
        },
        {
          "naam": 'Hihi'
        },
        {
          "naam": 'Lmao'
        },
        {
          "naam": 'Wooow'
        }
      ]
  }

  constructor() {
    
  }

  ngOnInit() {
  }

}
