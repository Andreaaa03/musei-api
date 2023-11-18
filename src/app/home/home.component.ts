import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../services/get-api.service';
import { Departament } from '../models/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private getApiService: GetApiService) { }
  ngOnInit(): void {
    this.functionSearchByDepartments();
  }
  allDepartments!: Departament[];
  allNumbers: string[] = [];
  show: string = "";
  functionSearchByDepartments() {
    this.getApiService.getSearchByDepartments().subscribe((res) => {
      if (res) {
        this.allDepartments = res;
        console.log(this.allDepartments);
      }
    })
    return this.allDepartments;
  }

  functionShow(idNumero: number) {
    let id = "" + idNumero;
    if (this.show !== id) {
      this.show = id;
      this.getApiService.getSearchByDepartmentsId(id).subscribe((res) => {
        if (res) {
          this.allNumbers = this.bubbleSort(res.objectIDs);
          console.log(this.allNumbers);
        }
      });
    } else {
      this.show = "";
    }
  }

  bubbleSort(arr: string[]): string[] {
    var n = arr.length;

    for (var i = 0; i < n - 1; i++) {
      for (var j = 0; j < n - i - 1; j++) {
        // Confronta gli elementi adiacenti
        if (arr[j] > arr[j + 1]) {
          // Se l'elemento successivo è più piccolo, scambia gli elementi
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return arr;
  }

}
