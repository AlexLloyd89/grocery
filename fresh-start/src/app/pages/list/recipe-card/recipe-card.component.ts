import { Component, OnInit, Input } from "@angular/core";
import { RecipeModel } from "src/app/interfaces/recipe.model";
import { RecipeService } from "src/app/services/recipe.service";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "src/app/shared/components/confirm-dialog/confirm-dialog.component";

@Component({
  selector: "app-recipe-card",
  templateUrl: "./recipe-card.component.html",
  styleUrls: ["./recipe-card.component.scss"],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: RecipeModel;
  total: number;
  constructor(private recipeSvc: RecipeService, private dialog: MatDialog) {}

  ngOnInit(): void {}

  addRecipe(item: RecipeModel): void {
    if (!item.total) {
      item.total = 1;
    } else {
      item.total++;
    }
    console.log("item", item);
    this.recipeSvc.updateCurrentGroceryList(item);
  }

  remove(item: RecipeModel): void {
    item.total--;
  }

  deleteRecipe(reicpe: RecipeModel): void {
    console.log("reicpe", reicpe);
    this.dialog.open(ConfirmDialogComponent, {
      data: { recipe: reicpe },
    });
  }
}
