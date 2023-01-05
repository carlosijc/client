// deno-lint-ignore-file
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FetchWinnerService } from "../../services/fetch-winner.service";
import { IWinners } from "../../../../../server/models/IWinners";
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
// import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@Component({
  selector: "app-winners",
  templateUrl: "./winners.component.html",
  styleUrls: ["./winners.component.css"],
})
export class WinnersComponent implements OnInit {
  
  public oldWinners: IWinners[] = []; //
  public errorMessage: string | null = null;
  public winners: [] = [];
  public readData: any;
  public tabla:any = null;
  // deno-lint-ignore no-inferrable-types
  public Loading: boolean = true;
  
  public frequency = [
    {
      id: 0,
      d1: 0,
      d2: 0,
      d3: 0,
      total: 0,
    },
    {
      id: 1,
      d1: 0,
      d2: 0,
      d3: 0,
      total: 0,
    },
    {
      id: 2,
      d1: 0,
      d2: 0,
      d3: 0,
      total: 0,
    },
    {
      id: 3,
      d1: 0,
      d2: 0,
      d3: 0,
      total: 0,
    },
    {
      id: 4,
      d1: 0,
      d2: 0,
      d3: 0,
      total: 0,
    },
    {
      id: 5,
      d1: 0,
      d2: 0,
      d3: 0,
      total: 0,
    },
    {
      id: 6,
      d1: 0,
      d2: 0,
      d3: 0,
      total: 0,
    },
    {
      id: 7,
      d1: 0,
      d2: 0,
      d3: 0,
      total: 0,
    },
    {
      id: 8,
      d1: 0,
      d2: 0,
      d3: 0,
      total: 0,
    },
    {
      id: 9,
      d1: 0,
      d2: 0,
      d3: 0,
      total: 0,
    },
  ];

  public displayColumns: string[] = [
    "No.",
    "Time",
    "Date",
    "D-1",
    "D-2",
    "D-3",
    "Trio",
    "F23",
    "F12",
    "F13",
    "FireBall",
    "Action"
  ];

  constructor(
    private fetchWinnerService: FetchWinnerService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.getFromDB();
    this.getWinners();
    this.addCol();
   
  }

  public createFrequency(): void {
    /* Array dgs with the elements corresponding to the object Frequencies*/
    const dgs = ["d1", "d2", "d3"];
    /*This part of the code is to execute the calc function */
    for (let entry of dgs) {
      for (let i = 0; i <= 9; i++) {
        // console.log(this.frequency[i]);
        this.calc(i, entry);
      }
    }
  }

  
  public calc(d: number, dg: string) {
    this.oldWinners.some((frequencies) => {
      // if (frequencies[dg] == d) {
      //   // let c= (a == b ? 'a is equal to b' : (a >b) ? 'a is greater than b' : 'b is greater than a');
      //   this.frequency[d];
      //   if (dg === "d1") {
      //     this.frequency[d].d1 += 1;
      //   } else if (dg == "d2") {
      //     this.frequency[d].d2 += 1;
      //   } else if (dg == "d3") {
      //     this.frequency[d].d3 += 1;
      //   }
      // }
      if (frequencies[dg] == d) {
        this.frequency[d][dg] += 1;
        this.frequency[d]['total']++;
      }
      // console.log(frequencies[dg], dg)
    });
    // const result = this.frequency.map((dg) => ({
    //   ...dg,
    //   total: dg.d1 + dg.d2 + dg.d3,
    // }));
    // result.forEach((bola) => console.log(bola))
  }

  public getWinners() {
    this.fetchWinnerService.getWinners().subscribe(
      (res: any) => {
        console.log(res);
        this.readData = res.data;
        this.Loading = false;
      },
      (error: string | null) => {
        this.errorMessage = error;
      },
    );
  }

  public getFromDB() {
    this.fetchWinnerService.getAll().subscribe(
      (res: any) => {
        this.oldWinners = res.data.rows;
        this.createFrequency();
      },
      (error: string | null) => {
        this.errorMessage = error;
      },
    );
    if (typeof document !== 'undefined') {
      console.log('Entre aca');
      //here `window` is available, so `window.document` (or simply `document`) is available too
     this.tabla = document.getElementById("tabla");
    //  this.showFile(this.tabla,3);
    }
  }

  public onAdd() {
    this.addWinner(this.readData);
  }

  public addWinner(winners: IWinners) {
    for (let clave in winners) {
      this.fetchWinnerService.addWinner(winners[clave])
        .subscribe(() => {
          console.log("User added successfully!");
        }, (error: string) => {
          this.errorMessage = error;
        });
    }
  }
  
 
  public addCol() {
    // let tableRef = document.getElementById('tabla');
    var row = {};
     var myTable = document.querySelector("#tabla>tbody");
// document.querySelector("tr.borrar td:nth-child(1)").rowspan =2;
    // document.querySelector("tr.borrar td:nth-child(2)").remove();
  }
}

// function ViewChild(MatTable: any,arg1: { static: boolean; }) {
// throw new Error("Function not implemented.");
// }
