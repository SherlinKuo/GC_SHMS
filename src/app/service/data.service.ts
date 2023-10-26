import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { join } from '@fireflysemantics/join';
import { ItemDataInitRes, ResDepositary, ResForm01Init, ResItemData, ResOderDepositary } from '../model/data-tpye/data-tpye.module';
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

  // 進貨單 -init
  getForm01Init() {
    return this.http.get<ResForm01Init>('assets/Json/Form01Init.json');
  }

  // 進貨單 - 查詢
  QueryDepositary() {
    return this.http.get<ResDepositary>('assets/Json/depositaryTable.json');
  }

  // 商品資訊維護
  getitemDataInit(){
    return this.http.get<ItemDataInitRes>('assets/Json/itemDatalist.json');
  }


  getitemData(){
    return this.http.get<ResItemData>('assets/Json/itemData.json');
  }

  //#region 訂貨單
  getOrderInit() {
    return this.http.get<ResForm01Init>('assets/Json/orderInit.json');
  }

  QueryOrderDepositary() {
    return this.http.get<ResOderDepositary>('assets/Json/orderDepositaryTable.json');
  }
  //#endregion
}
