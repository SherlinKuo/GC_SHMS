import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuJson } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenu(){
    return this.http.get<MenuJson[]>("../assets/Json/menu.json")
  }
}
