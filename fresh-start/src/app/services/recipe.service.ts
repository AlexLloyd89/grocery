import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  recipes = [
    {
      name: "Chicken Parm",
      favorite: false,
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
      favorite: true,
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
      favorite: false,
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
  constructor() {}
}
