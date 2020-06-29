import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GroceryListContainerComponent } from "./grocery-list-container/grocery-list-container.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ListRoutingModule } from "./list-routing.module";
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

@NgModule({
  declarations: [GroceryListContainerComponent, RecipeCardComponent],
  imports: [CommonModule, SharedModule, ListRoutingModule],
})
export class ListModule {}
