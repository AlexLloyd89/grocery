import { Injectable } from "@angular/core";
import { RecipeModel } from "../interfaces/recipe.model";
import { BehaviorSubject } from "rxjs";
import { database } from "firebase";
import { IngredientModel } from "../interfaces/grocery-store.model";
import _ from "lodash";
@Injectable({
  providedIn: "root",
})
export class RecipeService {
  recipes$ = new BehaviorSubject<RecipeModel[]>([]);

  currentGroceryList$ = new BehaviorSubject<RecipeModel[]>([]);
  constructor() {}

  updateCurrentGroceryList(list: RecipeModel) {
    if (list) {
      this.currentGroceryList$.next(
        this.currentGroceryList$.getValue().concat([list])
      );
    }
  }

  updateRecipes(value: RecipeModel[]) {
    this.recipes$.next(value);
  }

  createRecipe(name, ingredients: IngredientModel[]) {
    database().ref("/recipe").push({
      name: name,
      ingredients: ingredients,
    });
  }

  createGroceryList(data) {
    database().ref("/grocery-list").set(data);
  }

  getRecipes() {
    database()
      .ref("/recipe")
      .on("value", (snap) => {
        let update = _.toArray(snap.val());
        this.updateRecipes(update);
      });
  }

  getGroceryList() {
    let myData = database().ref("/grocery-list");

    myData.once("value").then((snapshot) => {
      this.updateCurrentGroceryList(snapshot.val());
    });
  }

  deleteList() {
    database().ref("/grocery-list").remove();
    this.currentGroceryList$.next([]);
  }
}
