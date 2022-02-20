import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
})
export class ModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}
  onNoClick(): void {
    document
      .getElementsByClassName('animate__animated')[0]
      .classList.remove('animate__bounceIn');
    document
      .getElementsByClassName('animate__animated')[0]
      .classList.add('animate__bounceOut');
    setTimeout(() => {
      this.dialog.closeAll();
    }, 600);
  }
  ngOnInit(): void {
    console.log(this.data);
  }
}
