import { Component, OnInit } from "@angular/core";
import { RecipeModel } from "src/app/interfaces/recipe.model";
import { RecipeService } from "src/app/services/recipe.service";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { Router } from "@angular/router";

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
  constructor(private recipesService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.recipesService.getRecipes();

    this.recipesService.recipes$.subscribe((data) => {
      this.recipes = data;
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map((value) => (typeof value === "string" ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.recipes.slice()))
    );
    this.filteredOptions.subscribe((data) => {
      console.log("data", data);
      console.log("this.recipes", this.recipes);
      if (data.length > 0) {
        this.filteredRecipes = data;
      } else {
        this.filteredRecipes = this.recipes;
      }
    });
  }

  private _filter(name: string): RecipeModel[] {
    const filterValue = name.toLowerCase();

    return this.recipes.filter(
      (option) => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  navigate() {
    this.recipesService.createGroceryList(
      this.recipesService.currentGroceryList$.value
    );
    this.router.navigate(["/all-recipes/shopping-list"]);
  }
}
