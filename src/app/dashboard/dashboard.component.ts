import { Component, DoCheck, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { DashboardService } from '../dashboard.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 5, 10, 15];
  userLists: any;
  deleteResult: any;
  isDescOrder: boolean = true;
  orderHeader: any;
  searchInput: any = { userName: '' }
  form: FormGroup = new FormGroup({});
  displayAdd=false;
  newUser: any;
  user:any;
  firstName: string | undefined;
  lastName: string | undefined;
  @Output() id:any;
 
  public userAdd={
    userName: '',
    password: '',
    userType:'Normal',
    name:'',
    mobileNumber:'',
    emailId:''
  };


  viewChild=false;
  
  sort(headerName: String) {

    this.isDescOrder = !this.isDescOrder;

    this.orderHeader = headerName;

  }
  onTableSizeChangeEvent(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;

  }
  constructor(private dashboardService: DashboardService,private loginService:LoginService,private snack:MatSnackBar) { }

  ngOnInit(): void {

    this.getAllUsers();
  }


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
     
      

      // Validators.email

    ]),



    PASSWORD: new FormControl("",[

      Validators.required,

      Validators.minLength(7),    

      Validators.maxLength(16),

      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.* )(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),



    ]),



    // confirm_password: new FormControl(""),



    MOBILENUMBER : new FormControl("",[

      Validators.required,

      Validators.pattern("[0-9]*"),

      Validators.minLength(10),

      Validators.maxLength(10)

    ]),



    EMAIL : new FormControl("",[

      Validators.required,

      Validators.pattern("(?!.*[!#$%^&*()_+])[a-zA-Z0-9]*.(@gmail|@yahoo).com"),

    ]),



   

  });



  get name(){

    return this.registerform.get("NAME") as FormControl;

   }

   get Username(){

    return this.registerform.get("USERNAME") as FormControl;

   }



   get Password(){

    return this.registerform.get("PASSWORD") as FormControl;

   }
  
   get MobileNo(){

    return this.registerform.get("MOBILENUMBER") as FormControl;

   }

   get Email(){

    return this.registerform.get("EMAIL") as FormControl;

   }

   addUser(){
    this.displayAdd=true;
    this.userLists=null;
   }

   formSubmit(){

   
    // this.siblings=new Array<String>(this.userAdd.name,this.userAdd.emailId,this.userAdd.mobileNumber,this.userAdd.userName,this.userAdd.userType)

    this.loginService.signup(this.userAdd).subscribe(
      (data:any)=>{
  
      Swal.fire('Successfully done !!','user is registered','success' );
      this.registerform.reset();
     
     
      },
   
      (error)=>{
        
       console.log(error);
      // alert('someting went wrong');
      this.snack.open('Something Went wrong !!','',{
        duration:3000,
      })
      }
      );
      
  }
 
  cancelAdding(){
    this.displayAdd=false;
    this.getAllUsers();

  }

  getAllUsers() {

    
    // this.clearOld();

    this.deleteResult = '';

    this.dashboardService.getAllUsers().subscribe(

      userList => {

        this.userLists = userList;

        // this.userLists = JSON.stringify(this.userLists);

        // this.userLists = JSON.parse(this.userLists);

        console.log(this.userLists);

      },

      error => {

        console.log("error in user List Fetching ");

        console.log(error);

      }

    )

  }

  deleteById(id: any) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure of deleting  User?',
      cancelButtonText: 'Cancel',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.dashboardService.deleteUser(id).subscribe(
          (data: any) => {
            Swal.fire('Success', 'User Deleted', 'success');
            this.getAllUsers();
          },
          (error) => {
            Swal.fire('Error', 'Error in deleting User ', 'error');
          }
        );
      }

    })



  }
  activateById(id: any) {
    this.dashboardService.undoDelete(id).subscribe(
      result => {
       
          // swal succsufful msg
          Swal.fire('Success', 'User Activated', 'success');
          this.getAllUsers();
      
      },
      (error) => {
        Swal.fire('Error', 'Error in Activating User ', 'error');
      }
    )
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllUsers();

  }
  edit(userid:any){
    this.id=userid;
    this.userLists=null;
    this.viewChild=true;
 
  }  

  inc(){
  console.log("hii")
  }

  changeIndicator(event:any){
    this.viewChild=false;
   if(event=='updated'){
    this.getAllUsers();
   }

  }
}
