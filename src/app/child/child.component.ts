import { Component,Input,OnInit ,OnChanges, SimpleChanges, DoCheck,AfterViewInit,AfterViewChecked,ViewChild,AfterContentInit,AfterContentChecked, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges,DoCheck,OnInit,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked{
constructor(private loginService:LoginService,private router:Router,private dashboard:DashboardComponent){

}
update=true;
@Input() id: any; 
@ViewChild('h')hello:any;
@Output() changeIndicator =new EventEmitter<any>();
ngOnInit():void{
  console.log(this.hello)
  console.log("Oninit called")
}
  ngOnChanges(changes:SimpleChanges): void {
    this.update=true;
    console.log(changes)
    console.log("onchanges called")
    this.getOneUsers(this.id);
  }
  ngDoCheck(): void {
    console.log("Do check called")
  }
ngAfterViewChecked(): void {
  console.log("view checked called")
}
ngAfterViewInit(): void {
  console.log(this.hello)

  console.log("view init is called")
}

ngAfterContentChecked(): void {
  console.log("content checked called")
}

ngAfterContentInit(): void {
  console.log("content init called")
}
form: FormGroup = new FormGroup({});

public updateuser={
  userName: '',
  name:'',
  mobileNumber:'',
  emailId:''
};




registerform = new FormGroup({



  NAME : new FormControl("" , [

    Validators.required,

     Validators.minLength(3),                          

    Validators.pattern("[a-zA-Z]+")

  ]),



  USERNAME : new FormControl("",[

    Validators.required,

    Validators.minLength(5), 
    Validators.maxLength(10),                         

    Validators.pattern("[a-zA-Z].*"),
   


  ]),


  MOBILENUMBER : new FormControl("",[

    Validators.required,

    Validators.pattern("[0-9]*"),

    Validators.minLength(10),

    Validators.maxLength(10)

  ]),



  EMAIL : new FormControl("",[

    Validators.required,

    Validators.email

  ]),



 

});



get name(){

  return this.registerform.get("NAME") as FormControl;

 }

 get Username(){

  return this.registerform.get("USERNAME") as FormControl;

 }



 get MobileNo(){

  return this.registerform.get("MOBILENUMBER") as FormControl;

 }

 get Email(){

  return this.registerform.get("EMAIL") as FormControl;

 }


 
public getOneUsers(id: any) {

  this.loginService.getOneUser(id).subscribe(

    (data: any) => {

      this.updateuser = data.data;

      console.log(this.updateuser);

    },

    (error: any) => {

      console.log(error);

    }

  );

}


updateformSubmit() {
  this.loginService.updateUser(this.updateuser).subscribe(
    (data: any) => {
    
      Swal.fire('Success !!', 'user updated', 'success').then((e) => {
      this.changeIndicator.emit('updated');
      });
    }, (error) => {
      Swal.fire('Error !!', 'Error in updating', 'error');
      console.log(error);
    }
  )
}

onCancel(){
 
  this.changeIndicator.emit('cancel');
}
}
