import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  displayBasic: boolean;
  user: any;
  constructor(private authService: ApiService,

    private router: Router,

    private http: HttpClient,

    @Inject(SESSION_STORAGE) private storage: StorageService


  ) { }

  ngOnInit(): void {
    this.user = this.authService.currentUser();
    console.log("this.user ",this.user )
  
  }
  showBasicDialog() {
    this.displayBasic = true;
}

logout(){
 
  this.authService.deleteUser(this.user._id).pipe()
  .subscribe( data => {
    this.router.navigateByUrl('');
  })
  
}
}
