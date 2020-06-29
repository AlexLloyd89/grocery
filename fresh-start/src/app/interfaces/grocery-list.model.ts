import { RecipeModel } from "./recipe.model";

export interface GroceryListModel {
  dateCreated?: Date;
  recipes: RecipeModel[];
}
