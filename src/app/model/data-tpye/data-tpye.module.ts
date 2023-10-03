import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DataTpyeModule { }

export interface responseCommon {
  Success: boolean,
  Message?: string,
  DataTime: string
}
// 回傳訊息文字
export interface ResDataString extends responseCommon{
  Data?: string
}

export interface selectList {
  display: string,
  value: string
}


export interface ResForm01Init extends responseCommon{
  Data: {
    schoolList: selectList[],
    vendorList: selectList[]
  }
}
