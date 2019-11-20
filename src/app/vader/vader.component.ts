import { Component, OnInit } from '@angular/core';
import { ZoonComponent } from '../zoon/zoon.component';

@Component({
  selector: 'app-vader',
  templateUrl: './vader.component.html',
  styleUrls: ['./vader.component.css']
})
export class VaderComponent implements OnInit {

  zoon = new ZoonComponent;

  private Vader: Object = {
    "vaders":
      [
        {
          "naam": 'Ted',
          "kinderen":
            [
              {
                "kind": this.zoon.Zoon.zoonNaam[0]
              }
            ]
        },
        {
          "naam": 'Ahmed'
        },
        {
          "naam": 'Joost'
        },
        {
          "naam": 'Poo'
        },
        {
          "naam": 'Lol'
        },
        {
          "naam": 'xd'
        }
      ]
  }

  constructor() {
  }

  ngOnInit() {
  }

}
