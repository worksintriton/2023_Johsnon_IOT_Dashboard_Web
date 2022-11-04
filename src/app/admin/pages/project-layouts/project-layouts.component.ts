import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-project-layouts',
  templateUrl: './project-layouts.component.html',
  styleUrls: ['./project-layouts.component.css']
})
export class ProjectLayoutsComponent implements OnInit {
  user: any;
  liftLayoutList: any= [
    {
          "lift_no" : "LIFT001",
          "floor_no" : "1",
          "lift_door_status" : "Open",
          "moment_ststus" : "UP",
          "auto" : "TEXT",
          "aleram_status" : true,
          "lift_status" : true
    },
    {
          "lift_no" : "LIFT002",
          "floor_no" : "1",
          "lift_door_status" : "Open",
          "moment_ststus" : "UP",
          "auto" : "TEXT",
          "aleram_status" : true,
          "lift_status" : true
    },
    {
          "lift_no" : "LIFT003",
          "floor_no" : "1",
          "lift_door_status" : "Open",
          "moment_ststus" : "UP",
          "auto" : "TEXT",
          "aleram_status" : true,
          "lift_status" : true
    }
  ];

  subscription: Subscription;
  subscr: Subscription;
  everyFiveSeconds: Observable<number> = timer(0, 50000);

  // everyMins: Observable<number> = timer(0, 50000);

  constructor(private authService: ApiService, private router: Router)
   {  this.user = this.authService.currentUser();}
   
  ngOnInit(): void {

    this.subscription = this.everyFiveSeconds.subscribe(() => {
      this.loadData();
    });
    

        setTimeout(() => {
          this.myGreeting("UP")
        }, 1000)
  
        setTimeout(() => {
          this.myGreeting1("UP")
        }, 2000)
    
        setTimeout(() => {
          this.myGreeting3("UP")
        }, 3000)
    
        setTimeout(() => {
          this.myGreeting4("UP")
        }, 4000)
    
        setTimeout(() => {
          this.myGreeting5("UP")
        }, 5000)

        setTimeout(() => {
          this.myGreeting4("DOWN")
        }, 6000)


        setTimeout(() => {
          this.myGreeting3("DOWN")
        }, 7000)

        setTimeout(() => {
          this.myGreeting1("DOWN")
        }, 8000)

        setTimeout(() => {
          this.myGreeting("DOWN")
        }, 9000);


        setTimeout(() => {
          this.myGreeting0("DOWN")
        }, 10000)

        setTimeout(() => {
         this.ngOnInit();
        }, 11000)

        }

        
      
        myGreeting0(ITEM){
          this.liftLayoutList =  [];
          this.liftLayoutList =  [
            {
                  "lift_no" : "LIFT001",
                  "floor_no" : "1",
                  "lift_door_status" : "Close",
                  "moment_ststus" : ITEM,
                  "auto" : "TEXT",
                  "aleram_status" : true,
                  "lift_status" : true
            },
            {
                  "lift_no" : "LIFT002",
                  "floor_no" : "1",
                  "lift_door_status" : "Open",
                  "moment_ststus" : ITEM,
                  "auto" : "TEXT",
                  "aleram_status" : true,
                  "lift_status" : true
            },
            {
                  "lift_no" : "LIFT003",
                  "floor_no" : "1",
                  "lift_door_status" : "Open",
                  "moment_ststus" : ITEM,
                  "auto" : "TEXT",
                  "aleram_status" : true,
                  "lift_status" : true
            }
          ];
        }
      





  myGreeting5(ITEM){
    this.liftLayoutList =  [];
    this.liftLayoutList =  [
      {
            "lift_no" : "LIFT001",
            "floor_no" : "6",
            "lift_door_status" : "Close",
            "moment_ststus" : ITEM,
            "auto" : "TEXT",
            "aleram_status" : true,
            "lift_status" : true
      },
      {
            "lift_no" : "LIFT002",
            "floor_no" : "6",
            "lift_door_status" : "Open",
            "moment_ststus" : ITEM,
            "auto" : "TEXT",
            "aleram_status" : true,
            "lift_status" : true
      },
      {
            "lift_no" : "LIFT003",
            "floor_no" : "6",
            "lift_door_status" : "Open",
            "moment_ststus" : ITEM,
            "auto" : "TEXT",
            "aleram_status" : true,
            "lift_status" : true
      }
    ];
  }


  
  myGreeting(ITEM){
    this.liftLayoutList =  [];
    this.liftLayoutList =  [
      {
            "lift_no" : "LIFT001",
            "floor_no" : "2",
            "lift_door_status" : "Close",
            "moment_ststus" : ITEM,
            "auto" : "TEXT",
            "aleram_status" : true,
            "lift_status" : true
      },
      {
            "lift_no" : "LIFT002",
            "floor_no" : "5",
            "lift_door_status" : "Open",
            "moment_ststus" : ITEM,
            "auto" : "TEXT",
            "aleram_status" : true,
            "lift_status" : true
      },
      {
            "lift_no" : "LIFT003",
            "floor_no" : "7",
            "lift_door_status" : "Open",
            "moment_ststus" : ITEM,
            "auto" : "TEXT",
            "aleram_status" : true,
            "lift_status" : true
      }
    ];
  }


  myGreeting1(ITEM){
    this.liftLayoutList =  [];
    this.liftLayoutList =  [
      {
        "lift_no" : "LIFT001",
        "floor_no" : "3",
        "lift_door_status" : "Open",
        "moment_ststus" : ITEM,
        "auto" : "TEXT",
        "aleram_status" : true,
        "lift_status" : true
  },
  {
        "lift_no" : "LIFT002",
        "floor_no" : "6",
        "lift_door_status" : "Open",
        "moment_ststus" : ITEM,
        "auto" : "TEXT",
        "aleram_status" : true,
        "lift_status" : true
  },
  {
        "lift_no" : "LIFT003",
        "floor_no" : "6",
        "lift_door_status" : "Open",
        "moment_ststus" : ITEM,
        "auto" : "TEXT",
        "aleram_status" : true,
        "lift_status" : true
  }
    ];
  }



  
  myGreeting3(ITEM){
    this.liftLayoutList =  [];
    this.liftLayoutList =  [
      {
        "lift_no" : "LIFT001",
        "floor_no" : "4",
        "lift_door_status" : "Open",
        "moment_ststus" : ITEM,
        "auto" : "TEXT",
        "aleram_status" : true,
        "lift_status" : true
  },
  {
        "lift_no" : "LIFT002",
        "floor_no" : "4",
        "lift_door_status" : "Open",
        "moment_ststus" : ITEM,
        "auto" : "TEXT",
        "aleram_status" : true,
        "lift_status" : true
  },
  {
        "lift_no" : "LIFT003",
        "floor_no" : "4",
        "lift_door_status" : "Open",
        "moment_ststus" : ITEM,
        "auto" : "TEXT",
        "aleram_status" : true,
        "lift_status" : true
  }
    ];
  }


  myGreeting4(item){
    this.liftLayoutList =  [];
    this.liftLayoutList =  [
      {
        "lift_no" : "LIFT001",
        "floor_no" : "5",
        "lift_door_status" : "Open",
        "moment_ststus" : item,
        "auto" : "TEXT",
        "aleram_status" : true,
        "lift_status" : true
  },
  {
        "lift_no" : "LIFT002",
        "floor_no" : "5",
        "lift_door_status" : "Open",
        "moment_ststus" : item,
        "auto" : "TEXT",
        "aleram_status" : true,
        "lift_status" : true
  },
  {
        "lift_no" : "LIFT003",
        "floor_no" : "5",
        "lift_door_status" : "Open",
        "moment_ststus" : item,
        "auto" : "TEXT",
        "aleram_status" : true,
        "lift_status" : true
  }
    ];
  }

  loadData() {
    this.liftLayoutList = this.liftLayoutList;
  }

  // ngAfterViewInit(){
  //   this.subscr = this.everyMins.subscribe(() => {
  //     this.ngOnInit();
  //   });
  // }


  

}
