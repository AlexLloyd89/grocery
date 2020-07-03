import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { RecipeModel } from "src/app/interfaces/recipe.model";

interface ConfrimDialogModel {
  recipe: RecipeModel;
}

@Component({
  selector: "app-confirm-dialog",
  templateUrl: "./confirm-dialog.component.html",
  styleUrls: ["./confirm-dialog.component.scss"],
})
export class ConfirmDialogComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA)
    public data: ConfrimDialogModel
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialog.closeAll();
  }
  confirm() {
    console.log("this.data", this.data);
  }
}
