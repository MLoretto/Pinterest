import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://api.giphy.com/v1/gifs/search';
const keys = '&api_key=29Chm7LzQDppg2KgFP96iZfc42XnYR0M';
const httpOptions = {
  /*headers : {
    // 'Authorization': 'Basic ' + btoa(username + ":" + password),
   'Access-Control-Allow-Origin': true,
   'Content-Type': 'application/json; charset=utf-8',
   "X-Requested-With": "XMLHttpRequest"
     }
*/

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
  
  private extractData(res: Response) {
    try
    {
      console.log("pos aqui...");
      let body = res;
      console.log(body);
      return body || { };
  

    }
    catch(ex){
      console.log(ex);
      return null;
    }

  }

  getProducts(): Observable<any> {
    console.log('por aqui!!!');
    return this.http.get(endpoint + '?q=cat' + keys ).pipe(
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
