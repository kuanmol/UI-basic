import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiResponseModel} from '../model/interface/role';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) {
  }

  getDesignation(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation")
  }
}
