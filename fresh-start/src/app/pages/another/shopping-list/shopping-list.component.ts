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
  found: boolean;

  sams: any[] = [];
  publix: any[] = [];
  farmacy: any[] = [];
  walMart: any[] = [];
  ingles: any[] = [];
  harrisTeeter: any[] = [];

  @ViewChild(MatTable) table: MatTable<any>;
  constructor(private recipeSvc: RecipeService) {
    this.recipeSvc.getGroceryList();
  }

  ngOnInit(): void {
    this.recipeSvc.currentGroceryList$.subscribe((data: any[]) => {
      let newData = data.slice(-1).pop();
      newData.map((recipe) => {
        if (data.length < 1) {
          this.someData = false;
        }
        recipe.ingredients.map((ingredient: IngredientModel) => {
          this.someData = true;
          this.ingredientBreakdown.push(ingredient);
          this.dataSource.data = this.ingredientBreakdown;
          if (ingredient.groceryStore === "Sam's Club") {
            let updatedObj = { ...ingredient, found: false };
            this.sams.push(updatedObj);
          }
          if (ingredient.groceryStore === "Publix") {
            this.publix.push(ingredient);
          }
          if (ingredient.groceryStore === "Farmacy") {
            this.farmacy.push(ingredient);
          }
          if (ingredient.groceryStore === "Wal-mart") {
            this.walMart.push(ingredient);
          }
          if (ingredient.groceryStore === "Ingles") {
            this.ingles.push(ingredient);
          }
          if (ingredient.groceryStore === "Harris Teeter") {
            this.harrisTeeter.push(ingredient);
          }
        });
      });
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  change(item: any, index: number) {
    console.log("item", item);
    console.log("index", index);
    item.found = !item.found;
  }

  clearList() {
    this.recipeSvc.deleteList();
    this.recipeSvc.updateCurrentGroceryList(null);
    this.someData = false;
    this.dataSource.data = [];
  }
}
