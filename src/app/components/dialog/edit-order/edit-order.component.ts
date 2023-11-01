import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditOrderItem, OderDepositaryDataTable, selectList } from 'src/app/model/data-tpye/data-tpye.module';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  firstFormGroup = new FormGroup({
    OderDate: new FormControl(),
    DeliveryDate: new FormControl(),
    TDateStart: new FormControl(),
    TDateEnd: new FormControl(),
    MainSchool: new FormControl(),
    OrderTeacher: new FormControl(),
    TempTeacher: new FormControl(),
    callPhone: new FormControl(),
    DeliveryAddress: new FormControl(),
    SchooltaxID: new FormControl(),
  });


  secondFormGroup = new FormGroup({
    invoiceFormat: new FormControl(),
    DeliveryMethod: new FormControl(),
    FareAmount: new FormControl(),
    FareNote: new FormControl(),
    PayMethod: new FormControl(),
    OtherNote: new FormControl(),
  });


  schoolList!: selectList[];
  payMethodList!: selectList[];
  invoiceFormatList!: selectList[];
  DeliveryMethodList!: selectList[];
  itemData!: OderDepositaryDataTable;
  constructor(private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: OderDepositaryDataTable) {
    this.itemData = data;
  }

  ngOnInit(): void {
    this.getInit();
    this.getItem();
  }



  getInit() {
    this.dataService.editOrderInit().subscribe((data) => {
      this.payMethodList = data.Data.payMethodList;
      this.invoiceFormatList = data.Data.invoiceFormatList;
      this.schoolList = data.Data.schoolList;
      this.DeliveryMethodList = data.Data.DeliveryMethodList;
    });
  }

  getItem(){
    this.dataService.editOrderItem().subscribe((data) => {
      Object.keys(this.firstFormGroup.controls).forEach( (e: string) => this.firstFormGroup.get(e)?.setValue(data.Data[e as keyof EditOrderItem]));
      Object.keys(this.secondFormGroup.controls).forEach( (e: string) => this.secondFormGroup.get(e)?.setValue(data.Data[e as keyof EditOrderItem]));

    });
  }
}
