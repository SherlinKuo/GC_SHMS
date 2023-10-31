import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OderDepositaryDataTable, selectList } from 'src/app/model/data-tpye/data-tpye.module';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  firstFormGroup = new FormGroup({
    OderDate: new FormControl(new Date().toISOString().slice(0, 10)),
    DeliveryDate: new FormControl(new Date().toISOString().slice(0, 10)),
    TDateStart: new FormControl(new Date().toISOString().slice(0, 10)),
    TDateEnd: new FormControl(new Date().toISOString().slice(0, 10)),
    MainSchool: new FormControl(),
    OrderTeacher: new FormControl(),
    TempTeacher: new FormControl(),
    callPhone: new FormControl(),
  });

  schoolList!: selectList[];
  payMethodList!: selectList[];
  invoiceFormatList!: selectList[];
  itemData!: OderDepositaryDataTable;
  constructor(private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: OderDepositaryDataTable) {
    this.itemData = data;
  }

  ngOnInit(): void {
    this.getInit();
  }



  getInit() {
    this.dataService.editOrderInit().subscribe((data) => {
      this.payMethodList = data.Data.payMethodList;
      this.invoiceFormatList = data.Data.invoiceFormatList;
      this.schoolList = data.Data.schoolList;
    });
  }
}
