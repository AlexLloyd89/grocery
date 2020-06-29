import { IngredientModel } from "./grocery-store.model";

export interface RecipeModel {
  name: string;
  ingredients: IngredientModel[];
  favorite: boolean;
  total?: number;
}
