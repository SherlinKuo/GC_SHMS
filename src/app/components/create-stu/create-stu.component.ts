import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentW02, TimePeriod, TimePeriodList } from 'src/app/model/data-tpye/data-tpye.module';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-create-stu',
  templateUrl: './create-stu.component.html',
  styleUrls: ['./create-stu.component.scss']
})
export class CreateStuComponent implements OnInit {

  dataForm = new FormGroup({
    Name : new FormControl('',[Validators.required]),
    NameEn: new FormControl(),
    Phone: new FormControl(),
    TimeId: new FormControl([0],[Validators.required]),
    Note: new FormControl(),
    Money: new FormControl()
  });

  timePeriodList? : TimePeriodList[];
  constructor(private dateService: DataService,
    private dialogRef: MatDialogRef<CreateStuComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TimePeriodList[]) {
      this.timePeriodList = data
    }

  ngOnInit(): void {

  }


  closeDialog() {

    if(this.dataForm.valid){
      var req: StudentW02= {
        Name:  this.dataForm.controls['Name'].value ? this.dataForm.controls['Name'].value : '',
        NameEn: this.dataForm.controls['NameEn'].value ? this.dataForm.controls['NameEn'].value : '',
        Phone: this.dataForm.controls['Phone'].value ? this.dataForm.controls['Phone'].value : '',
        TimeId: this.dataForm.controls['TimeId'].value ? this.dataForm.controls['TimeId'].value?.toString() : '',
        Note: this.dataForm.controls['Note'].value ? this.dataForm.controls['Note'].value : '',
        Money: this.dataForm.controls['Money'].value ? this.dataForm.controls['Money'].value : ''
      }
      this.dialogRef.close(req);
    }

  }

  test(){
    console.log(this.dataForm.controls['TimeId'].value);
    if (this.dataForm.controls['TimeId'].value?.includes(0)){
      this.dataForm.controls['TimeId'].setValue([0]);
    }

  }
}
