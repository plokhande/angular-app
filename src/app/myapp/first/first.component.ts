import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  title = 'First App Title';
  names = ["Poornima", "Ashok", "Vek2"];

  constructor() { } //only called once when the app is called

  ngOnInit() { // called everytime there is a init
  }

  btnClick(event){
    //button click event handling
  }

  onChange(event){
    //Dropdown change handling
  }
}
