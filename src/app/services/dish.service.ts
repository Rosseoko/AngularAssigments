import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
//process de data from the server side


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';



@Injectable()
export class DishService {

  constructor(private http: Http,
    private ProcessHTTPMsgService: ProcessHTTPMsgService) { }
    //inject http

  //method, return array of dishes

  getDishes(): Observable<Dish[]> {
    return this.http.get(baseURL + 'dishes')
                    .map(res => { return this.ProcessHTTPMsgService.extractData(res); })
                    .catch(error => { return this.ProcessHTTPMsgService.handleError(error); });
  }

  getDish(id: number): Observable<Dish> {
    return  this.http.get(baseURL + 'dishes/'+ id)
                    .map(res => { return this.ProcessHTTPMsgService.extractData(res); })
                    .catch(error => { return this.ProcessHTTPMsgService.handleError(error); });
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get(baseURL + 'dishes?featured=true')
                    .map(res => { return this.ProcessHTTPMsgService.extractData(res)[0]; })
                    .catch(error => { return this.ProcessHTTPMsgService.handleError(error); });
  }

  getDishIds() : Observable<number[]> {
    return this.getDishes()
      .map(dishes => { return dishes.map(dish => dish.id ); })
      .catch(error => { return Observable.of(error); });
  }
  
}

  //map operator,toma cada item, por cada uno solo extraer los id's y contruye un nuevo array de id's