import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs';
import { Departament, DepartamentId, MuseumObject } from '../models/type';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private apiSevice: ApiService) { }
  getSearchByDepartments() {
    return this.apiSevice.searchByDepartments().pipe(
      map((res:any)=>{
        return res.departments as Departament[];
      })
    )
  }

  getSearchByDepartmentsId(id:string) {
    return this.apiSevice.searchByDepartmentsId(id).pipe(
      map((res:any)=>{
        return res as DepartamentId;
      })
    )
  }
  
  getSearchByObjectDetail(id:string) {
    return this.apiSevice.searchByObjectDetail(id).pipe(
      map((res:any)=>{
        return res as MuseumObject;
      })
    )
  }
}
