import { Routes, RouterModule } from "@angular/router";

import { NgModule } from "@angular/core";
import { GroceryListContainerComponent } from "./grocery-list-container/grocery-list-container.component";

const routes: Routes = [{ path: "", component: GroceryListContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule {}
