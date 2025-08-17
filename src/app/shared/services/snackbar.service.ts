import { Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

@Injectable({
    providedIn : 'root'
})
export class SnackbarService{

    constructor(private matSnack : MatSnackBar){}

    private readonly matconfig : MatSnackBarConfig ={
        duration : 3000,
        horizontalPosition : 'left',
        verticalPosition : 'top'
    }
    

    openSnackbar(msg : string){
        this.matSnack.open(msg, "Close", this.matconfig)
    }
}