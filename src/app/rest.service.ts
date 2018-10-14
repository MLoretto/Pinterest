import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://api.giphy.com/v1/gifs/search';
const keys = '&api_key=29Chm7LzQDppg2KgFP96iZfc42XnYR0M';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json; charset=utf-8' //'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient) {
    console.log("constrido");
  };

  public query : string = '';
  public total : number = 0;
  public pag   : number = 1;
  public regPag: number = 25;
  public iniReg: number = 0;
  public offset: number = 0;

  private extractData(res: Response) {
    try
    {
      let body = res;
      return body || { };
    }
    catch(ex){
      return null;
    }
  }

  getGif(query:string): Observable<any> {

    this.query = query;
    this.pag = 1;
    this.offset = 0;
    return this.http.get(endpoint + '?q=' + this.query + '&limit=' + this.regPag + '&offset=' + this.offset + keys ).pipe(
      map(this.extractData));
  }

  getNext(): Observable<any> {
    this.pag ++;
    this.offset = this.pag * this.regPag;
    console.log(this.offset);
    return this.http.get(endpoint  + '?q=' + this.query + '&limit=' + this.regPag + '&offset=' + this.offset + keys ).pipe(
      map(this.extractData));
  }

  getPrev(): Observable<any> {
    this.offset = this.pag * this.regPag;
    return this.http.get(endpoint + '?q=cat' + '&limit=' + this.regPag + '&offset=' + this.offset + keys ).pipe(
      map(this.extractData));
  }


  /*
  getProduct(id): Observable<any> {
    return this.http.get(endpoint + 'products/' + id).pipe(
      map(this.extractData));
  }
  
  addProduct (product): Observable<any> {
    console.log(product);
    return this.http.post<any>(endpoint + 'products', JSON.stringify(product), httpOptions).pipe(
      tap((product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }
  
  updateProduct (id, product): Observable<any> {
    return this.http.put(endpoint + 'products/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }
  
  deleteProduct (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'products/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
