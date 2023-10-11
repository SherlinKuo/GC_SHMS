import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemDataTable, selectList } from 'src/app/model/data-tpye/data-tpye.module';
import { DataService } from 'src/app/service/data.service';
import { Base } from '../base';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-item-data-update',
  templateUrl: './item-data-update.component.html',
  styleUrls: ['./item-data-update.component.scss']
})
export class ItemDataUpdateComponent extends Base implements OnInit {

  selectItem?: string;
  itemList!: selectList[];
  editId?: string;
  Columns = [
    'edit',
    'itemName',
    'ItemDetailAmount',
    'ItemDetailUnit',
    'ItemAmount',
    'ItemUnit',
    'RealItemAmount',
    'RealItemDetailUnit',
    'RealItemDetail'
  ];
  displayedColumns = this.Columns;

  TableDataList = new MatTableDataSource<ItemDataTable>([]);
  constructor(private dataService: DataService,
    dialog: MatDialog,
    public confirmDialog: MatDialog) { super(dialog); }

  ngOnInit(): void {
    this.getInit();
  }

  getInit(){
    this.dataService.getitemDataInit().subscribe((data) => {
      this.itemList = data.Data.itemList;
    })
  }

  test(id : string){
    console.log(id);
    this.selectItem = id;
    this.QueryData();
  }

  QueryData() {
    this.TableDataList.data = [];
    this.isLoading = true;
    this.dataService.getitemData().subscribe((data) => {
      this.isLoading = false;
      data.Data.itemData
        ? (this.TableDataList.data = data.Data.itemData)
        : null;
    });
  }

  editMode(id: string){
    this.editId = id;
  }
}
