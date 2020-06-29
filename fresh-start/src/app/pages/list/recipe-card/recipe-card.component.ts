import { Component, OnInit, Input } from "@angular/core";
import { RecipeModel } from "src/app/interfaces/recipe.model";

@Component({
  selector: "app-recipe-card",
  templateUrl: "./recipe-card.component.html",
  styleUrls: ["./recipe-card.component.scss"],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: RecipeModel;
  total: number;
  constructor() {}

  ngOnInit(): void {}

  toggleFavorite(item: RecipeModel): void {
    item.favorite = !item.favorite;
  }

  addRecipe(item: RecipeModel): void {
    if (!item.total) {
      item.total = 1;
    } else {
      item.total++;
    }
  }

  remove(item: RecipeModel): void {
    item.total--;
  }
}
