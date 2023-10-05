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

// depositary initData
export interface ResForm01Init extends responseCommon{
  Data: {
    schoolList: selectList[],
    vendorList: selectList[],
    statusList: selectList[],
    payMethodList: selectList[]
  }
}

export interface ResDepositary extends responseCommon{
  Data : {
    DataTable: DepositaryDataTable[];
  }
}

export interface DepositaryDataTable {
  VendorStore: string;
  VendorStoreDisplay: string;
  MainSchool: string;
  MainSchoolDisplay: string;
  ItemState: string;
  ItemStateDisplay: string;
  CallDate: string;
  InHouseDate: string;
  DeliveryDate: string;
  ItemName: string;
  ItemAmount: string;
  ItemUnit: string;
  ItemPrice: string;
  ItemDetail: string;
  PayMethod: string;
  PayMethodDisplay: string;
}


