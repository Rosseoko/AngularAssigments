import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export class ProcessHTTPMsgService {

  constructor() { }

  public extractData(res: Response) {
    //extract data
    let body = res.json();
    //obtain the boyd
    console.log(body);
    //return body as json string/can be map into js object
    return body || { };
    //if the body is null you return empty object instead
  }

}
