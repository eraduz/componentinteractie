import { Component, OnInit } from '@angular/core';
// import { vaderComponent } from '../vader/vader.component';

@Component({
  selector: 'app-zoon',
  templateUrl: './zoon.component.html',
  styleUrls: ['./zoon.component.css']
})
export class ZoonComponent implements OnInit {



   Zoon: any = {
    "zoonNaam":
      [
        {
          "vader":
            [
              {
                // "vader": this.zoon.Zoon.zoonNaam[0]
              }
            ],
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
