import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opa',
  templateUrl: './opa.component.html',
  styleUrls: ['./opa.component.css']
})
export class OpaComponent implements OnInit {

  private Opa: Object = {
    naam: 'Tom'
  }

  constructor() {
  
  }

  ngOnInit() {
    
  }
  
}