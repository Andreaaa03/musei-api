import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { GetApiService } from './services/get-api.service';

const routes: Routes = [
  { path:"home", component: HomeComponent },
  { path:"", redirectTo:"/home", pathMatch: "full"},
  { path:"detail/:id", component: DetailComponent, resolve:{
    dettaglioDepartment: (router: ActivatedRouteSnapshot)=>{
      return inject(GetApiService).getSearchByObjectDetail(router.paramMap.get('id')!);
    }
  }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
