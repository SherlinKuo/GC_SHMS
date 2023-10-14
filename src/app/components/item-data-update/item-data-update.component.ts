import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemDataTable, selectList } from 'src/app/model/data-tpye/data-tpye.module';
import { DataService } from 'src/app/service/data.service';
import { Base } from '../base';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-item-data-update',
  templateUrl: './item-data-update.component.html',
  styleUrls: ['./item-data-update.component.scss']
})
export class ItemDataUpdateComponent extends Base implements OnInit {

  isCreateMode: boolean = false;
  selectItem: selectList = {
    display: '',
    value: ''
  };
  itemList!: selectList[];
  editId: string = '';
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
    public confirmDialog: MatDialog,
    private _snackBar: MatSnackBar) { super(dialog); }

  ngOnInit(): void {
    this.getInit();
  }

  getInit() {
    this.dataService.getitemDataInit().subscribe((data) => {
      this.itemList = data.Data.itemList;
    })
  }

  getItemData(item: selectList) {
    this.isCreateMode = false;
    this.editId = '';
    this.selectItem = item;
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

  editMode(id: string) {
    this.editId = id;
  }

  saveMode(element: ItemDataTable) {
    console.log(element);

    if (element.itemName.length != 0) {
      this.editMode('');
    } else {
      this._snackBar.open('請填寫商品細項', '了解', { duration: 6000 })
    }
  }
  delMode(id: string) {

  }


  // 確認修改
  Modify() {
    this.selectItem; // 修改商品清單
  }

  // 新增商品品項
  AddMode() {
    let addData = {
      id: (this.TableDataList.data.length + 1).toString().padStart(2, '0'),
      itemName: '',
      ItemDetailAmount: '',
      ItemDetailUnit: '',
      ItemAmount: '',
      ItemUnit: '',
      RealItemDetailAmount: '',
      RealItemDetailUnit: '',
      RealItemDetail: '',
      RealItemAmount: '',
      RealItemUnit: ''
    }
    this.TableDataList.data = [addData, ...this.TableDataList.data];
    this.editMode(addData.id);

  }


  CreateItem() {
    this.isCreateMode = true;
    this.editId = '';
    this.TableDataList.data = [];
    this.selectItem = {
      display: '',
      value: ''
    }
  }

  DoCreateItem() {
    if (this.selectItem.display.length == 0) {
      this._snackBar.open('請填寫商品名稱', '了解', { duration: 6000 })
    } else if (this.TableDataList.data.length > 0){
      this._snackBar.open('至少新增一項商品細項', '了解', { duration: 6000 })
    }else{
      console.log("do");

    }
  }
}
