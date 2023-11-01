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

//#region  depositary initData
export interface ResForm01Init extends responseCommon{
  Data: {
    schoolList: selectList[],
    vendorList: selectList[],
    statusList: selectList[],
    payMethodList: selectList[],
    orderIDList: selectList[]
  }
}

export interface ResDepositary extends responseCommon{
  Data : {
    DataTable: DepositaryDataTable[];
  }
}

export interface DepositaryDataTable {
  OrderID: string;
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
  ItemUnitAmount: string;
  ItemUnitUnit: string;
}
//#endregion

//#region   itemDataList
export interface ItemDataInitRes extends responseCommon{
  Data: {
    itemList: selectList[];
  }
}

export interface ResItemData extends responseCommon{
  Data : {
    itemData: ItemDataTable[];
  }
}

export interface ItemDataTable {
  id: string;
  itemName: string;
  ItemDetailAmount: string;
  ItemDetailUnit: string;
  ItemAmount: string;
  ItemUnit: string;
  RealItemDetailAmount: string;
  RealItemDetailUnit: string;
  RealItemDetail: string;
  RealItemAmount: string;
  RealItemUnit: string;
}

//#endregion

//#region  order-deposiary
export interface ResOderDepositary extends responseCommon{
  Data : {
    DataTable: OderDepositaryDataTable[];
  }
}

export interface OderDepositaryDataTable {
  OrderID: string;
  MainSchoolDisplay: string;
  TheacherName: string;
  TempTheacherName: string;
  OrderDate: string;
  DeliveryDate: string;
  phoneCall: string;
  DeliveryAmount: string;
  DeliveryNot: string;
}

//#endregion

//#region edit-order-depositary
export interface EditOrderInitRes extends responseCommon{
  Data: {
    payMethodList: selectList[];
    invoiceFormatList: selectList[];
    schoolList: selectList[];
    DeliveryMethodList: selectList[];
  }
}


export interface EditOrderItemRes extends responseCommon{
  Data: EditOrderItem;
}

export interface EditOrderItem {
    OderDate: string;
    DeliveryDate: string;
    TDateStart: string;
    TDateEnd: string;
    MainSchool: string;
    MainSchoolDisplay: string;
    OrderTeacher: string;
    TempTeacher: string;
    callPhone: string;
    DeliveryAddress: string;
    SchooltaxID: string;
    Specification: string;
    SpecificationDisplay: string;
    DeliveryMethod: string;
    DeliveryMethodDisplay: string;
    FareAmount: number;
    FareNote: string;
    PayMethod: string;
    PayMethodDisplay: string;
    OtherNote: string;
}


//#endregion
