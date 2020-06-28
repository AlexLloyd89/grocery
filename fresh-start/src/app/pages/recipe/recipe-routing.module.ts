import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { RecipeListContainerComponent } from "./recipe-list-container/recipe-list-container.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: RecipeListContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
