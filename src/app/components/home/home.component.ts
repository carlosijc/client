import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchWinnerService } from '../../services/fetch-winner.service'
import { IWinners } from '../../../../../server/models/IWinners';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // public oldWinners: IWinners[] = []; //
  // public errorMessage: string | null = null;
  // public winners: [] = [];
  // public readData: any;
  // // deno-lint-ignore no-inferrable-types
  // public Loading: boolean = true;


  // public frequency = [
  //   {
  //     id: 0, d1: 0, d2: 0, d3: 0, total: 0
  //   },
  //   {
  //     id: 1, d1: 0, d2: 0, d3: 0, total: 0
  //   },
  //   {
  //     id: 2, d1: 0, d2: 0, d3: 0, total: 0
  //   },
  //   {
  //     id: 3, d1: 0, d2: 0, d3: 0, total: 0
  //   },
  //   {
  //     id: 4, d1: 0, d2: 0, d3: 0, total: 0
  //   },
  //   {
  //     id: 5, d1: 0, d2: 0, d3: 0, total: 0
  //   },
  //   {
  //     id: 6, d1: 0, d2: 0, d3: 0, total: 0
  //   },
  //   {
  //     id: 7, d1: 0, d2: 0, d3: 0, total: 0
  //   },
  //   {
  //     id: 8, d1: 0, d2: 0, d3: 0, total: 0
  //   },
  //   {
  //     id: 9, d1: 0, d2: 0, d3: 0, total: 0
  //   },
  // ];

  // public displayColumns: string[] = ['Schedule', 'Date', 'D-1', 'D-2', 'D-3', 'Trio', 'F23', 'F12', 'F13', 'FireBall'];
  // constructor(private fetchWinnerService: FetchWinnerService, private http: HttpClient) { }

  ngOnInit(): void {
    // this.getFromDB();
    // this.getWinners();
  }

  // public createFrequency(): void {
  //   /* Array dgs with the elements corresponding to the object Frequencies*/
  //   const dgs = ['d1', 'd2', 'd3'];
  //   /*This part of the code is to execute the calc function */
  //   for (let entry of dgs) {
  //     for (let i = 0; i <= 9; i++) {

  //       // console.log(this.frequency[i]);
  //       this.calc(i, entry);
  //     }
  //   }
  // }

  // public calc(d: number, dg: string) {
  //   this.oldWinners.some((frequencies) => {
  //     if (frequencies[dg] == d) {
  //       // let c= (a == b ? 'a is equal to b' : (a >b) ? 'a is greater than b' : 'b is greater than a');
  //       this.frequency[d]
  //       if (dg === 'd1') {
  //         this.frequency[d].d1 += 1;
  //       } else if (dg == 'd2') {
  //         this.frequency[d].d2 += 1;
  //       } else if (dg == 'd3') {
  //         this.frequency[d].d3 += 1;
  //       }
  //     }
  //     console.log(frequencies[dg], dg)
  //   })
  //   // this.frequency.forEach((bola)=>console.log(bola))
  //   /*getting end results from the Frequencies object*/
  //   const result = this.frequency.map(dg => ({
  //     ...dg,
  //     total: dg.d1 + dg.d2 + dg.d3
  //   }));
  //   result.forEach((bola) => console.log(bola))
  // }

  // public getWinners() {
  //   this.fetchWinnerService.getWinners().subscribe(
  //     (res: any) => {
  //       this.readData = res.data;
  //       // this.list();
  //       this.Loading = false;

  //     },
  //     (error: string | null) => {
  //       this.errorMessage = error;
  //     });
  // }

  // public getFromDB() {
  //   this.fetchWinnerService.getAll().subscribe(
  //     (res: any) => {
  //       this.oldWinners = res.data.rows;
  //       this.createFrequency();
  //     },
  //     (error: string | null) => {
  //       this.errorMessage = error;
  //     });
  // }

  // public onAdd() {
  //   this.addWinner(this.readData);
  // }

  // public addWinner(winners: IWinners) {
  //   for (let clave in winners) {
  //     this.fetchWinnerService.addWinner(winners[clave])
  //       .subscribe(() => {
  //         console.log('User added successfully!')
  //       }, (error: string) => {
  //         this.errorMessage = error;
  //       });
  //   }
  // }
}
