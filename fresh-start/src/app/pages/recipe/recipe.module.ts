import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecipeListContainerComponent } from "./recipe-list-container/recipe-list-container.component";
import { SharedModule } from "src/app/shared/shared.module";
import { RecipeRoutingModule } from "./recipe-routing.module";

@NgModule({
  declarations: [RecipeListContainerComponent],
  imports: [CommonModule, SharedModule, RecipeRoutingModule],
})
export class RecipeModule {}
