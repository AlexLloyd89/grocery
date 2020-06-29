import { Component, OnInit } from "@angular/core";
import { RecipeModel } from "src/app/interfaces/recipe.model";
import { RecipeService } from "src/app/services/recipe.service";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-grocery-list-container",
  templateUrl: "./grocery-list-container.component.html",
  styleUrls: ["./grocery-list-container.component.scss"],
})
export class GroceryListContainerComponent implements OnInit {
  recipes: RecipeModel[] = [];
  myControl = new FormControl();
  filteredOptions: Observable<RecipeModel[]>;
  filteredRecipes: RecipeModel[] = [];
  constructor(private recipesService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipesService.recipes;

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map((value) => (typeof value === "string" ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.recipes.slice()))
    );
    this.filteredOptions.subscribe((data) => (this.filteredRecipes = data));
  }

  private _filter(name: string): RecipeModel[] {
    const filterValue = name.toLowerCase();

    return this.recipes.filter(
      (option) => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
