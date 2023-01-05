// deno-lint-ignore-file
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { FetchWinnerService } from '../../services/fetch-winner.service.ts'
import { IFrequency } from '../../../../../server/models/IFrequency';
import { FrequenciesService } from '../../services/frequencies.service';


@Component({
  selector: 'app-frequencies',
  templateUrl: './frequencies.component.html',
  styleUrls: ['./frequencies.component.css']
})
export class FrequenciesComponent implements OnInit {

  public oldFrequency: IFrequency[] = []; //
  public errorMessage: string | null = null;

  // public oldFrequency: any[] = [];

  constructor(private frequenciesService: FrequenciesService, private http: HttpClient) { }

    ngOnInit(): void {
    this.getFrequencies();
  }

  public getFrequencies() {
    this.frequenciesService.getFrequencies().subscribe(
      (res: any) => {
        this.oldFrequency = res.data.rows;
      },
      (error: string | null) => {
        this.errorMessage = error;
      });
      console.log(this.oldFrequency)
  }
}
