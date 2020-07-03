import { Component, OnInit, Input } from "@angular/core";
import { RecipeModel } from "src/app/interfaces/recipe.model";
import { RecipeService } from "src/app/services/recipe.service";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "src/app/shared/components/confirm-dialog/confirm-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-recipe-card",
  templateUrl: "./recipe-card.component.html",
  styleUrls: ["./recipe-card.component.scss"],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: RecipeModel;
  total: number;
  constructor(
    private recipeSvc: RecipeService,
    private dialog: MatDialog,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.recipeSvc.getRecipes();
  }

  addRecipe(item: RecipeModel): void {
    this.snack.open(`Added ${item.name} to list`, "X", {
      duration: 2000,
    });

    this.recipeSvc.updateCurrentGroceryList(item);
  }

  remove(item: RecipeModel): void {
    item.total--;
  }

  deleteRecipe(reicpe: RecipeModel): void {
    this.dialog.open(ConfirmDialogComponent, {
      data: { recipe: reicpe },
    });
  }
}
