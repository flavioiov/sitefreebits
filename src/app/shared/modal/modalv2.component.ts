import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogDatav2 } from '../modal/DialogDatav2';

@Component({
  selector: 'app-modalv2',
  templateUrl: './modalv2.component.html',
  styleUrls: ['./modalv2.component.css']
})
export class ModalComponentv2 implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponentv2>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDatav2) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}