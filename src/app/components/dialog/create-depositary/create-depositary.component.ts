import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import {
  DepositaryDataTable,
  selectList,
} from 'src/app/model/data-tpye/data-tpye.module';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-create-depositary',
  templateUrl: './create-depositary.component.html',
  styleUrls: ['./create-depositary.component.scss'],
})
export class CreateDepositaryComponent implements OnInit {
  dataForm = new FormGroup({
    CallDate: new FormControl(moment(new Date()).format("yyyyMMDD")),
    InHouseDate: new FormControl(moment(new Date()).format("yyyyMMDD")),
    DeliveryDate: new FormControl(moment(new Date()).format("yyyyMMDD")),
    ItemName: new FormControl(),
    ItemState: new FormControl(),
    ItemAmount: new FormControl(),
    ItemUnit: new FormControl(),
    ItemPrice: new FormControl(),
    ItemDetail: new FormControl(),
    MainSchool: new FormControl(),
    VendorStore: new FormControl(),
    PayMethod: new FormControl(),
  });

  schoolList?: selectList[];
  vendorList!: selectList[];
  statusList!: selectList[];
  payMethodList!: selectList[];

  addItemData?: DepositaryDataTable;
  constructor(
    public dialogRef: DialogRef<CreateDepositaryComponent>,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getInit();
  }


  _filter(value: string): selectList[] {
    const filterValue = value.toLowerCase();
    console.log(value);

    return this.vendorList.filter((option) =>
      option.display.includes(filterValue)
    );
  }

  getInit() {
    this.dataService.getForm01Init().subscribe((data) => {
      this.schoolList = data.Data.schoolList;
      this.vendorList = data.Data.vendorList;
      this.statusList = data.Data.statusList;
      this.payMethodList = data.Data.payMethodList;
    });
  }

  addData(){
    this.addItemData = this.dataForm.value as DepositaryDataTable;
    this.addItemData.CallDate =  moment(this.addItemData.CallDate).format("yyyyMMDD");
    this.addItemData.DeliveryDate =  moment(this.addItemData.DeliveryDate).format("yyyyMMDD");
    this.addItemData.InHouseDate =  moment(this.addItemData.InHouseDate).format("yyyyMMDD");

    console.log(this.addItemData);

  }
}
