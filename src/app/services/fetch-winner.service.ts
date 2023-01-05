import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IWinners } from '../../../../server/models/IWinners';
import { IFrequency } from "../../../../server/models/IFrequency";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class FetchWinnerService {
  // public URL = 'http://localhost:8080/pick3';
  public URL = environment.apiUrl;
  constructor(private http: HttpClient) { }
  //Getting all data from winners
  public getWinners(): Observable<IWinners[]> {
    const dataUrl = `${this.URL}/winners/getWinners`;
    return this.http.get<IWinners[]>(dataUrl).pipe(catchError(this.handleError));
  }
  
  public addWinner(winners: IWinners): Observable<IWinners> {
    const dataUrl = `${this.URL}/winners/addWinner`;
    return this.http.post<IWinners>(dataUrl, winners).pipe(catchError(this.handleError));
  }

    //Listing Frequencies
  public getAll(): Observable<IWinners[]> {
    const dataUrl = `${this.URL}/winners/getAll`;
    return this.http.get<IWinners[]>(dataUrl).pipe(catchError(this.handleError))
  }

  public getFrequencies(): Observable<IFrequency[]> {
    const dataUrl = `${this.URL}/frequency`;
    return this.http.get<IFrequency[]>(dataUrl).pipe(catchError(this.handleError));
  }
  
  //Controlling errors
  public handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //Client Error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Status: ${error.status} \n Message: ${error.message}`;
    }
    return throwError (errorMessage);
  }
}
