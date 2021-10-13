import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  //create an instance of MatSnackBar

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string, type: string) {
    const config: MatSnackBarConfig = {
      duration: 3000000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [type],
    };

    this.snackBar.open(message, action, config);
  }
}

export enum SnackBarClass {
  SUCCESS = 'snack-bar-success',
  ERROR = 'snack-bar-error',
  INFO = 'snack-bar-info',
}
