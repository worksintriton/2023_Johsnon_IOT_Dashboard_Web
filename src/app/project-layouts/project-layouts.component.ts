import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { timer } from 'rxjs';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-project-layouts',
  templateUrl: './project-layouts.component.html',
  styleUrls: ['./project-layouts.component.css']
})
export class ProjectLayoutsComponent implements OnInit {


  user: any;
  liftLayoutList: any = [];

  subscription: Subscription;
  everyTenSeconds: Observable<number> = timer(0, 500000000);

  showLoop: boolean = false;
  tempValue = 0;
  sub: Subscription;
  floorDir: Subscription;
  everyOneSeconds: Observable<number> = timer(0, 40000);

  everyTwoSeconds: Observable<number> = timer(0, 10000);
  list: any[];
  imagePath: string;
  templiftLayoutList: any;
  tableList: any;
  enterliftId: any;
  floor_no: number = 0;
  tempListDetails = [];
  liftLayout: any;
  floorDiraction: any = false;

  constructor(private authService: ApiService, private router: Router) { this.user = this.authService.currentUser(); }

  ngOnInit(): void {

    this.subscription = this.everyTenSeconds.subscribe(() => {
      this.list = [];
      this.authService.getliftLayoutList(this.enterliftId).pipe()
        .subscribe(async data => {
          this.templiftLayoutList = data.Data.One;
          this.tableList = data.Data.Multiple;

          if (this.list && this.list.length > 0) {
          } else {
            var obj = {
              SFLRSTAT2: this.templiftLayoutList[0] && this.templiftLayoutList[0].floor_no ? this.templiftLayoutList[0].floor_no : 0,
              SLIFTID: this.templiftLayoutList[0] && this.templiftLayoutList[0].liftId ? this.templiftLayoutList[0].liftId : 0,
              SRUNSTAT2: this.templiftLayoutList[0] && this.templiftLayoutList[0].lift_door_status == "Close" ? 0 : 1,
            }
            this.list = [obj];
            this.liftLayoutList = [];
            this.liftLayoutList = this.list;
          }

          await this.loadData();
          await this.dynamicFloorPosition();
        });
    });

    this.sub = this.everyOneSeconds.subscribe(() => {
      if (this.tempValue == 1) {
        this.tempValue = 0;
        this.imagePath = "../../../../assets/images/door-open.png"
      } else {
        this.imagePath = "../../../../assets/images/door-closed.png"
      }
    });

  }




  dynamicFloorPosition() {

    var test: any = [
      {
        "SFLRSTAT2": 0,
        "SLIFTID": "L-P2909",
        "SRUNSTAT2": 0
      },
      {
        "SFLRSTAT2": 1,
        "SLIFTID": "L-P2909",
        "up":true,
        "SRUNSTAT2": 0
      },
      {
        "SFLRSTAT2": 2,
        "SLIFTID": "L-P2909",
        "up":true,
        "SRUNSTAT2": 0
      },
      {
        "SFLRSTAT2": 3,
        "SLIFTID": "L-P2909",
        "up":true,
        "SRUNSTAT2": 0
      },
      {
        "SFLRSTAT2": 4,
        "SLIFTID": "L-P2909",
        "up":true,
        "SRUNSTAT2": 0
      },
      {
        "SFLRSTAT2": 3,
        "SLIFTID": "L-P2909",
        "up":true,
        "SRUNSTAT2": 0
      },
      {
        "SFLRSTAT2": 2,
        "SLIFTID": "L-P2909",
        "up":true,
        "SRUNSTAT2": 0
      },
      {
        "SFLRSTAT2": 1,
        "SLIFTID": "L-P2909",
        "up":true,
        "SRUNSTAT2": 0
      },
      {
        "SFLRSTAT2": 2,
        "SLIFTID": "L-P2909",
        "up":true,
        "SRUNSTAT2": 0
      }
    ];


    this.tempListDetails = [];
    var one = this.tableList[0];
     var two = this.tableList[1];
    var three = this.tableList[2];
    if (three.floor_no < two.floor_no) { // 1 to 5

      for (let i = three.floor_no; i < two.floor_no; i++) {
        var obj = {
          SFLRSTAT2: i,
          up:true,
          SLIFTID: three && three.liftId ? three.liftId : 0,
          SRUNSTAT2: three && three.lift_door_status == "Close" ? 0 : 1,
        }
        this.tempListDetails.push(obj);
      }
    } else if (three.floor_no == two.floor_no) {

      var obj = {
        SFLRSTAT2: three.floor_no,
        up:false,
        SLIFTID: three && three.liftId ? three.liftId : 0,
        SRUNSTAT2: three && three.lift_door_status == "Close" ? 0 : 1,
      }
      this.tempListDetails.push(obj);

    } else if (three.floor_no > two.floor_no) {

      for (let i = three.floor_no; i > two.floor_no; i--) {
        var obj = {
          SFLRSTAT2: i,
          up:false,
          SLIFTID: three && three.liftId ? three.liftId : 0,
          SRUNSTAT2: three && three.lift_door_status == "Close" ? 0 : 1,
        }
        this.tempListDetails.push(obj);
      }

    }



    if (two.floor_no < one.floor_no) { // 1 to 5

      for (let i = two.floor_no; i < one.floor_no; i++) {
        var obj = {
          SFLRSTAT2: i,
          up:true,
          SLIFTID: two && two.liftId ? two.liftId : 0,
          SRUNSTAT2: two && two.lift_door_status == "Close" ? 0 : 1,
        }
        this.tempListDetails.push(obj);
      }
    } else if (two.floor_no == one.floor_no) {

      var obj = {
        SFLRSTAT2: two.floor_no,
        up:false,
        SLIFTID: two && two.liftId ? two.liftId : 0,
        SRUNSTAT2: two && two.lift_door_status == "Close" ? 0 : 1,
      }
      this.tempListDetails.push(obj);

    } else if (two.floor_no > one.floor_no) {

      for (let i = two.floor_no; i > one.floor_no; i--) {
        var obj = {
          SFLRSTAT2: i,
          up:false,
          SLIFTID: two && two.liftId ? two.liftId : 0,
          SRUNSTAT2: two && two.lift_door_status == "Close" ? 0 : 1,
        }
        this.tempListDetails.push(obj);
      }

    }
    console.log("this.tempListDetails ", this.tempListDetails);


    this.someProcedure(this.tempListDetails)
    .then(ele =>{
      this.showLoop = false;
      this.floorDiraction = false
      this.tempListDetails = [];


      if (this.tempValue == 1) {
        this.tempValue = 0;
        this.imagePath = "../../../../assets/images/door-open.png"
      }
      // if(this.tempValue == 0){
      //   this.imagePath = "../../../../assets/images/door-closed.png"
      // }

    })
    .catch(console.error)
  }




  map() {
    this.router.navigateByUrl('/layout/maps')
  }

  loadData() {

    this.list.forEach(ele => {
      this.liftLayoutList.forEach(element => {
        if (ele.SLIFTID == element.SLIFTID) {
          // console.log("ele.SFLRSTAT2",ele.SFLRSTAT2, element.SFLRSTAT2);
          if (ele.SFLRSTAT2 < element.SFLRSTAT2) {
            element.up = true;
            ele.up = true;
            // this.tempValue = 1;
          } else if (ele.SFLRSTAT2 > element.SFLRSTAT2) {
            element.up = false;
            ele.up = false;
          }

          // else{
          //   element.up= false;
          //   ele.up= false;
          //   // this.tempValue = 1;
          // }

          if (ele.SFLRSTAT2 != element.SFLRSTAT2) {
            this.tempValue = 1;
          }
        }
      });
    });
    this.list = this.liftLayoutList;
  }


    async someProcedure (n) {
      this.showLoop = true;
    for (let i = 0; i < n.length; i++) {
      const t = Math.random() * 4000
      const x = await new Promise(r => {
        setTimeout(r, t, i);
        var num = n[i].SFLRSTAT2;
        this.floor_no = num;
        this.floorDiraction =n[i].up;
        // console.log (n[i])
      } )
    }
    return 'done'
  }



}


