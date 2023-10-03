import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _config: any;
  constructor(private http: HttpClient) { }

  get server_url(){
    return !this._config ? "未加載" : this._config.server_url;
    }

    load(){
    return this.http.get("../../assets/Json/APIConfig.json").toPromise().then(
      data => {
        console.log("data");
        this._config = data;
        return data;
      }
    )
    }

}
