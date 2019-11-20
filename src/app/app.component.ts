import { Component } from '@angular/core';
import { OpaComponent } from './opa/opa.component';
import { VaderComponent } from './vader/vader.component';
import { ZoonComponent } from './zoon/zoon.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  OpaNaam = new OpaComponent;
  vader = new VaderComponent;
  zoon = new ZoonComponent;

}
