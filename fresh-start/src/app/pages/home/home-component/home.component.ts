import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RecipeService } from "src/app/services/recipe.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  data = [];
  constructor(private router: Router, private rs: RecipeService) {}

  ngOnInit(): void {
    this.rs.currentGroceryList$.subscribe((data) => {
      this.data = data;
    });
  }

  routeToList() {
    this.router.navigate(["/list"]);
  }

  routeToRecipe() {
    this.router.navigate(["/recipe"]);
  }

  routeToAllrecipes() {
    this.router.navigate(["/all-recipes/shopping-list"]);
  }
}
