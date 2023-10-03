import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { join } from '@fireflysemantics/join';
import { ResForm01Init } from '../model/data-tpye/data-tpye.module';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // SERVER_IP = "http://localhost:100"
  SERVER_IP = this.config.server_url;

  headers = new HttpHeaders({
    'Content-Type': 'text/json',
  });
  constructor(private http: HttpClient, private config: ConfigService) {}

  // 進貨單
  getForm01Init() {
    return this.http.get<ResForm01Init>('../../assets/Json/Form01Init.json');
  }
}
