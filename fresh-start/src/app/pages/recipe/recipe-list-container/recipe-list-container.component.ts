import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-recipe-list-container",
  templateUrl: "./recipe-list-container.component.html",
  styleUrls: ["./recipe-list-container.component.scss"],
})
export class RecipeListContainerComponent implements OnInit {
  recipeForm: FormGroup;
  ingredients: FormArray;
  groceryStores = [
    "Publix",
    "Sam's Club",
    "Farmacy",
    "Wal-Mart",
    "Ingles",
    "Harris Teeter",
  ];

  constructor(private snack: MatSnackBar) {}

  ngOnInit(): void {
    this.generateRecipeForm();
  }

  generateRecipeForm() {
    this.recipeForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      ingredients: new FormArray([this.createIngredient()]),
    });
  }

  createIngredient() {
    return new FormGroup({
      ingredientName: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required),
      groceryStore: new FormControl(null, Validators.required),
    });
  }

  addIngredient() {
    this.ingredients = this.recipeForm.get("ingredients") as FormArray;
    this.ingredients.push(this.createIngredient());
  }

  getIngredients() {
    return (this.recipeForm.get("ingredients") as FormArray).controls;
  }

  deleteIngredient(index: number) {
    if (this.ingredients.length > 1) {
      this.ingredients.removeAt(index);
    }
  }

  submitRecipeForm() {
    this.snack.open("Recipe added successfully", "X", { duration: 2000 });
  }
}
