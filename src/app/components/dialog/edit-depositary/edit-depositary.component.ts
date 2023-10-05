import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DepositaryDataTable, selectList } from 'src/app/model/data-tpye/data-tpye.module';
import { DataService } from 'src/app/service/data.service';
import { Base } from '../../base';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-edit-depositary',
  templateUrl: './edit-depositary.component.html',
  styleUrls: ['./edit-depositary.component.scss'],
})
export class EditDepositaryComponent implements OnInit {
  dataForm = new FormGroup({
    CallDate: new FormControl(new Date().toISOString().slice(0, 10)),
    InHouseDate: new FormControl(new Date().toISOString().slice(0, 10)),
    DeliveryDate: new FormControl(new Date().toISOString().slice(0, 10)),
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

  itemData?: DepositaryDataTable;
  constructor(
    public dialogRef: DialogRef<EditDepositaryComponent>,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: DepositaryDataTable
  ) {
    this.itemData = data;
  }

  ngOnInit(): void {
    if(this.itemData){
      this.setData();
    }

    this.getInit();
  }

  _filter(value: string): selectList[] {
    const filterValue = value.toLowerCase();
    console.log(value);

    return this.vendorList.filter((option) =>
      option.display.includes(filterValue)
    );
  }

  setData(){
    Object.keys(this.itemData!).forEach((key) => {
      if (this.dataForm.get(key)) {
        this.dataForm.get(key)!.setValue(this.itemData![key as keyof DepositaryDataTable]);
      }
    });
  }
  getInit() {
    this.dataService.getForm01Init().subscribe((data) => {
      this.schoolList = data.Data.schoolList;
      this.vendorList = data.Data.vendorList;
      this.statusList = data.Data.statusList;
      this.payMethodList = data.Data.payMethodList;
    });
  }
}
