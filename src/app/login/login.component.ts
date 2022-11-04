import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error = '';
  loading = false;
  ipAddress: any;

  constructor(private formBuilder: FormBuilder,private http:HttpClient, private route: ActivatedRoute, private router: Router,
              private authenticationService: ApiService) { 
                this.getIPAddress();
              }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['admin@gmail.com', [Validators.required, Validators.email]],
      password: ['admin', Validators.required],
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin/manage-user';
  }

  getIPAddress()
  {
    this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.ipAddress = res.ip;
    });
  }

  ngAfterViewInit() {
    document.body.classList.add('authentication-bg');
    document.body.classList.add('authentication-bg-pattern');
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * On submit form
   */
  onSubmit() { debugger
    this.submitted = true;

    if(!this.f.email.value){
      Swal.fire({toast: true, position: 'top-end', showConfirmButton: false, timer: 3000, title: "Please enter email", icon: 'error', });
    }

    if(!this.f.password.value){
      Swal.fire({toast: true, position: 'top-end', showConfirmButton: false, timer: 3000, title: "Please enter password", icon: 'error', });
    }

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }



    this.loading = true;
    this.authenticationService.login(this.f.email.value, this.f.password.value,this.ipAddress)
      .pipe(first())
      .subscribe(
        data => {
          console.log("data ",data);
          if(data == null){
            alert("Something problem");
            return
          }

          if(data.userType == "ADMIN"){
            this.router.navigate([this.returnUrl]);
          }else{
            this.router.navigate(['admin/project-layouts']);
          }
         
          this.loading = false;
        },
        error => {
          console.log("error ",error);
          Swal.fire({toast: true, position: 'top-end', showConfirmButton: false, timer: 3000, title: "Username or password incorrect", icon: 'error', });
          this.error = error;
          this.loading = false;
        });
  }
}
