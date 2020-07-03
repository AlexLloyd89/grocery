import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeModule } from "./pages/home/home.module";
import { AnotherModule } from "./pages/another/another.module";
import { ListModule } from "./pages/list/list.module";
import { RecipeModule } from "./pages/recipe/recipe.module";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => HomeModule),
  },

  {
    path: "list",
    loadChildren: () =>
      import("./pages/list/list.module").then((m) => ListModule),
  },
  {
    path: "recipe",
    loadChildren: () =>
      import("./pages/recipe/recipe.module").then((m) => RecipeModule),
  },
  {
    path: "all-recipes",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/another/another.module").then((m) => AnotherModule),
      },
    ],
  },

  //catch all
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
