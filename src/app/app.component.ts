import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Some Title';
  names = ["Yash", "Chetan", "Me"];
  selectVal : string = "";
  myDir : string = "";
  formdata : any;

  myJson = [
    {'name': 'P', 'id': '1'},
    {'name': 'O', 'id': '2'},
    {'name': 'O', 'id': '3'}
  ]
  btnClick(event){
    //button click event handling
    console.log(this.selectVal)
  }

  onChange(event){
    //Dropdown change handling
    this.myDir = event.target.value
    this.selectVal = this.myDir
    console.log(this.selectVal)
  }
  
  onClickSubmit(data){
    //Form submission handling
    alert("Entered email id: "+data.emailid);
    //console.log("Entered email id: "+data.emailid);
  }

  onReactiveFormSubmit(data){
    //Reactive form submission handling
    console.log("Entered email id: "+data.emailid);
  }

  ngOnInit(){
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([Validators.required, Validators.pattern("[^ @]*@[^ @]*")])),
      passwd: new FormControl("", this.passwordvalidation)
    });
  }
  passwordvalidation(formcontrol){
    if(formcontrol.value.length < 5){
      return {"passwd": true};
    }
  }
}
