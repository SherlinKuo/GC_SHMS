import { Component, OnInit } from '@angular/core';
import { Base } from '../base';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { selectList } from 'src/app/model/data-tpye/data-tpye.module';
import { DataService } from 'src/app/service/data.service';
import { Observable, map, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-depositary',
  templateUrl: './depositary.component.html',
  styleUrls: ['./depositary.component.scss']
})
export class DepositaryComponent extends Base implements OnInit {

  dataForm = new FormGroup({
    CallDate: new FormControl(new Date().toISOString().slice(0,10)),
    InHouseDate: new FormControl(new Date().toISOString().slice(0,10)),
    DeliveryDate: new FormControl(new Date().toISOString().slice(0,10)),
    ItemName: new FormControl(),
    ItemState: new FormControl(),
    ItemAmount: new FormControl(),
    ItemUnit: new FormControl(),
    ItemPrice: new FormControl(),
    ItemDetail: new FormControl(),
    MainSchool: new FormControl(),
    VendorStore: new FormControl()
  });

  schoolList?: selectList[];
  vendorList!: selectList[];
  // filteredOptions?: Observable<selectList[]>;
  constructor(private dataService: DataService,dialog: MatDialog) {     super(dialog);}

  ngOnInit(): void {
    this.getInit();

  }

  _filter(value: string): selectList[] {
    const filterValue = value.toLowerCase();
    console.log(value);

    return this.vendorList.filter(option => option.display.includes(filterValue));
  }

  getInit() {
    this.dataService.getForm01Init().subscribe(
      data => {
        this.schoolList = data.Data.schoolList;
        this.vendorList = data.Data.vendorList;

        // this.filteredOptions = this.dataForm.controls['VendorStore'].valueChanges.pipe(
        //   startWith(''),
        //   map(value => this._filter(value || '')),
        // );
      }
    )
  }

}
