import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "./dialog/dialog.component";

export class Base {
  constructor(
    public dialog: MatDialog) { }

  isLoading = false;
  openMessage(context: string){
    const dialogRef = this.dialog.open(DialogComponent,
      {
        width: '250px',
        data: {context: context}
      })
  }
}
