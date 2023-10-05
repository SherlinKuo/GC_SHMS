import { Component, OnInit } from '@angular/core';
import { Base } from '../base';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DepositaryDataTable, selectList } from 'src/app/model/data-tpye/data-tpye.module';
import { DataService } from 'src/app/service/data.service';
import { Observable, map, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmComponent } from '../dialog/confirm/confirm.component';
import { EditDepositaryComponent } from '../dialog/edit-depositary/edit-depositary.component';
import { CreateDepositaryComponent } from '../dialog/create-depositary/create-depositary.component';
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
  statusList!: selectList[];
  // filteredOptions?: Observable<selectList[]>;
  Columns = [  'edit', 'VendorStoreDisplay',  'MainSchoolDisplay',  'PayMethodDisplay', 'ItemStateDisplay',  'CallDate',  'InHouseDate',  'DeliveryDate',  'ItemName',  'ItemAmount',  'ItemPrice',  'ItemDetail'];
  displayedColumns = this.Columns;

  TableDataList = new MatTableDataSource<DepositaryDataTable>([]);
  constructor(private dataService: DataService,dialog: MatDialog, public confirmDialog: MatDialog,) {     super(dialog);}



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
        this.statusList = data.Data.statusList;

        // this.filteredOptions = this.dataForm.controls['VendorStore'].valueChanges.pipe(
        //   startWith(''),
        //   map(value => this._filter(value || '')),
        // );
      }
    )
  }

  QueryData() {
    this.TableDataList.data = [];
    this.isLoading = true;
    this.dataService.QueryDepositary().subscribe(
      data => {
        this.isLoading = false;
        data.Data.DataTable ? this.TableDataList.data = data.Data.DataTable : null;
      }
    )
  }

  openConfirm(id: Number){
    const confirm = this.confirmDialog.open(ConfirmComponent,
      {
        width: '300px'
      });
    confirm.afterClosed().subscribe(
      data =>{

        if (data){
          this.deleteData(id);
        }
      }
    )
  }
  // 刪除
  deleteData(id: Number) {

    this.isLoading = true;
    this.QueryData();
    // TODO : 刪除
    // this.dataService.getRecordW03({LessonId: id}).subscribe(
    //   data => {
    //     this.isLoading = false;
    //     this.getRecordR02(this.dataForm.controls['StudentId'].value);
    //   }
    // );
  }

  // 編輯
  editConfirm(ele: DepositaryDataTable){
    const confirm = this.dialog.open(EditDepositaryComponent,
      {
        data: ele,
        disableClose: true
      });
    confirm.afterClosed().subscribe(
      data =>{
        console.log(data);

      }
    )
  }

  // 新增
  CreateData(){
    const confirm = this.dialog.open(CreateDepositaryComponent,
      {
        disableClose: true
      });
    confirm.afterClosed().subscribe(
      data =>{
        console.log(data);

      }
    )
  }
}
