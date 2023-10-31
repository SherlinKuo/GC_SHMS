import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Base } from '../base';
import { OderDepositaryDataTable, selectList } from 'src/app/model/data-tpye/data-tpye.module';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/service/data.service';
import { MatDialog } from '@angular/material/dialog';
import { EditOrderComponent } from '../dialog/edit-order/edit-order.component';

@Component({
  selector: 'app-order-depositary',
  templateUrl: './order-depositary.component.html',
  styleUrls: ['./order-depositary.component.scss']
})
export class OrderDepositaryComponent extends Base implements OnInit {

  dataForm = new FormGroup({
    OderDate: new FormControl(new Date().toISOString().slice(0, 10)),
    MainSchool: new FormControl(),
    OrderID: new FormControl(),
  });

  schoolList?: selectList[];

  Columns = [
    'edit',
    'OrderID',
    'MainSchoolDisplay',
    'TheacherName',
    'TempTheacherName',
    'OrderDate',
    'DeliveryDate',
    'phoneCall',
    'DeliveryAmount',
    'DeliveryNote'
  ];
  displayedColumns = this.Columns;
  TableDataList = new MatTableDataSource<OderDepositaryDataTable>([]);
  constructor(
    private dataService: DataService,
    dialog: MatDialog) {super(dialog); }

  ngOnInit(): void {
    this.getInit();
  }

  QueryData() {
    this.TableDataList.data = [];
    this.isLoading = true;
    this.dataService.QueryOrderDepositary().subscribe((data) => {
      this.isLoading = false;
      data.Data.DataTable
        ? (this.TableDataList.data = data.Data.DataTable)
        : null;
    });
  }

  CreateData() {

  }

  openConfirm(id: Number) {

  }

  editConfirm(ele: OderDepositaryDataTable){

    const confirm = this.dialog.open(EditOrderComponent, {
      data: ele,
      disableClose: true,
    });
    confirm.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }

  getInit() {
    this.dataService.getOrderInit().subscribe((data) => {
      this.schoolList = data.Data.schoolList;
    });
  }


}
