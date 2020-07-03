import { Injectable } from "@angular/core";
import { RecipeModel } from "../interfaces/recipe.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  recipes: RecipeModel[] = [
    {
      name: "Chicken Parm",

      ingredients: [
        {
          groceryStore: "Sam's Club",
          ingredientName: "Chicken",
          amount: "1 breast",
        },
        {
          groceryStore: "Publix",
          ingredientName: "Bread crumbs",
          amount: "1 cup",
        },
        ,
        { groceryStore: "Farmacy", ingredientName: "eggs", amount: "3" },
      ],
    },
    {
      name: "Chicken Parm",

      ingredients: [
        {
          groceryStore: "Sam's Club",
          ingredientName: "Chicken",
          amount: "1 breast",
        },
        {
          groceryStore: "Publix",
          ingredientName: "Bread crumbs",
          amount: "1 cup",
        },
        ,
        { groceryStore: "Farmacy", ingredientName: "eggs", amount: "3" },
      ],
    },
    {
      name: "Chicken Parm",

      ingredients: [
        {
          groceryStore: "Sam's Club",
          ingredientName: "Chicken",
          amount: "1 breast",
        },
        {
          groceryStore: "Publix",
          ingredientName: "Bread crumbs",
          amount: "1 cup",
        },
        ,
        { groceryStore: "Farmacy", ingredientName: "eggs", amount: "3" },
      ],
    },
    {
      name: "Chicken Parm",

      ingredients: [
        {
          groceryStore: "Sam's Club",
          ingredientName: "Chicken",
          amount: "1 breast",
        },
        {
          groceryStore: "Publix",
          ingredientName: "Bread crumbs",
          amount: "1 cup",
        },
        ,
        { groceryStore: "Farmacy", ingredientName: "eggs", amount: "3" },
      ],
    },
    {
      name: "Breakfast burrito",
      ingredients: [
        {
          groceryStore: "Sam's Club",
          ingredientName: "Chicken",
          amount: "1 breast",
        },
        {
          groceryStore: "Publix",
          ingredientName: "Cheese",
          amount: "1 cup",
        },
        ,
        { groceryStore: "Farmacy", ingredientName: "eggs", amount: "3" },
      ],
    },
    {
      name: "Breakfast burrito",
      ingredients: [
        {
          groceryStore: "Sam's Club",
          ingredientName: "Chicken",
          amount: "1 breast",
        },
        {
          groceryStore: "Publix",
          ingredientName: "Cheese",
          amount: "1 cup",
        },
        ,
        { groceryStore: "Farmacy", ingredientName: "eggs", amount: "3" },
      ],
    },
    {
      name: "Breakfast burrito",
      ingredients: [
        {
          groceryStore: "Sam's Club",
          ingredientName: "Chicken",
          amount: "1 breast",
        },
        {
          groceryStore: "Publix",
          ingredientName: "Cheese",
          amount: "1 cup",
        },
        ,
        { groceryStore: "Farmacy", ingredientName: "eggs", amount: "3" },
      ],
    },
    {
      name: "Breakfast burrito",
      ingredients: [
        {
          groceryStore: "Sam's Club",
          ingredientName: "Chicken",
          amount: "1 breast",
        },
        {
          groceryStore: "Publix",
          ingredientName: "Cheese",
          amount: "1 cup",
        },
        ,
        { groceryStore: "Farmacy", ingredientName: "eggs", amount: "3" },
      ],
    },
    {
      name: "Beyond burger",

      ingredients: [
        {
          groceryStore: "Sam's Club",
          ingredientName: "Hamburger bun",
          amount: "2 buns",
        },
        {
          groceryStore: "Sam's Club",
          ingredientName: "Beyond burger",
          amount: "2 burgers",
        },
      ],
    },
    {
      name: "Beyond burger",

      ingredients: [
        {
          groceryStore: "Sam's Club",
          ingredientName: "Hamburger bun",
          amount: "2 buns",
        },
        {
          groceryStore: "Sam's Club",
          ingredientName: "Beyond burger",
          amount: "2 burgers",
        },
      ],
    },
    {
      name: "Beyond burger",

      ingredients: [
        {
          groceryStore: "Sam's Club",
          ingredientName: "Hamburger bun",
          amount: "2 buns",
        },
        {
          groceryStore: "Sam's Club",
          ingredientName: "Beyond burger",
          amount: "2 burgers",
        },
      ],
    },
    {
      name: "Beyond burger",

      ingredients: [
        {
          groceryStore: "Sam's Club",
          ingredientName: "Hamburger bun",
          amount: "2 buns",
        },
        {
          groceryStore: "Sam's Club",
          ingredientName: "Beyond burger",
          amount: "2 burgers",
        },
      ],
    },
  ];
  currentGroceryList$ = new BehaviorSubject<RecipeModel[]>([]);
  constructor() {}

  updateCurrentGroceryList(list: RecipeModel) {
    this.currentGroceryList$.next(
      this.currentGroceryList$.getValue().concat([list])
    );
  }
}
