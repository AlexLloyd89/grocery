import { Routes, RouterModule } from "@angular/router";
import { AnotherComponent } from "./another-components/another.component";
import { NgModule } from "@angular/core";

const routes: Routes = [{ path: "", component: AnotherComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnotherRoutingModule {}
