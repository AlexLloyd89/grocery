import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatTable } from "@angular/material/table";
import { RecipeModel } from "src/app/interfaces/recipe.model";
import { RecipeService } from "src/app/services/recipe.service";
import { IngredientModel } from "src/app/interfaces/grocery-store.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"],
})
export class ShoppingListComponent implements OnInit {
  ingredientBreakdown: IngredientModel[] = [];
  dataSource = new MatTableDataSource(this.ingredientBreakdown);
  displayedColumns: string[] = [
    "found",
    "ingredientName",
    "groceryStore",
    "amount",
  ];
  someData;

  @ViewChild(MatTable) table: MatTable<any>;
  constructor(private recipeSvc: RecipeService) {
    this.someData = true;
  }

  ngOnInit(): void {
    this.recipeSvc.currentGroceryList$.subscribe((data) => {
      console.log("data", data);
      data.map((recipe) => {
        recipe.ingredients.map((ingredient) => {
          this.ingredientBreakdown.push(ingredient);
          this.dataSource.data = this.ingredientBreakdown;
        });
      });
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  change(item: IngredientModel) {
    console.log("item", item);
  }

  clearList() {
    this.someData = false;
    this.dataSource.data = [];
    this.table.renderRows();
  }
}
