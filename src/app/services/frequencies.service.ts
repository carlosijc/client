import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IFrequency } from '../../../../server/models/IFrequency';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FrequenciesService {

  public URL = environment.apiUrl;
  constructor(private http: HttpClient) { }
  //Getting all data from winners
  public getFrequencies(): Observable<IFrequency[]> {
    const dataUrl = `${this.URL}/frequency`;
    return this.http.get<IFrequency[]>(dataUrl).pipe(catchError(this.handleError));
  }
  
  public getFrequency(): Observable<IFrequency[]> {
    const dataUrl = `${this.URL}/frequency`;
    return this.http.get<IFrequency[]>(dataUrl).pipe(catchError(this.handleError));
  }
  public addFrequency(frequency: IFrequency): Observable<IFrequency> {
    const dataUrl = `${this.URL}/addFrequency`;
    return this.http.post<IFrequency>(dataUrl, frequency).pipe(catchError(this.handleError));
  }

  public editFrequency(frequency: IFrequency): Observable<IFrequency> {
    const dataUrl = `${this.URL}/editFrequency`;
    return this.http.put<IFrequency>(dataUrl, frequency).pipe(catchError(this.handleError));
  }

  
    //Listing Frequencies
  public getAll(): Observable<IFrequency[]> {
    const dataUrl = `${this.URL}/getAll`;
    return this.http.get<IFrequency[]>(dataUrl).pipe(catchError(this.handleError))
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
