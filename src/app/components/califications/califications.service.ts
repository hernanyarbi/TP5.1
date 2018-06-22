import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Calification } from '../../models/Calification';

@Injectable()
export class CalificationsService {

  url = 'http://localhost:8000/api';

  constructor(public http: HttpClient) {
  }

  getCalifications() {
    return this.http.get(this.url + '/evaluacion');
  }

}
