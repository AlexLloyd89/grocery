import { Routes, RouterModule } from "@angular/router";
import { AnotherComponent } from "./another-components/another.component";
import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: AnotherComponent },
  { path: "shopping-list", component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnotherRoutingModule {}
