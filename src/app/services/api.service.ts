import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  basuUrl = "https://collectionapi.metmuseum.org/public/collection/v1/";
  constructor(private http: HttpClient) { }
  searchByDepartments() {
    return this.http.get(this.basuUrl + "departments");
  }

  searchByDepartmentsId(id: string) {
    return this.http.get(this.basuUrl + "objects?departmentIds=" + id);
  }

  searchByObjectDetail(id: string) {
    console.log(this.basuUrl + "objects/" + id);
    return this.http.get(this.basuUrl + "objects/" + id);
  }
}