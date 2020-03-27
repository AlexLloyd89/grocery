import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeModule } from "./pages/home/home.module";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./pages/home/home.module").then(m => HomeModule)
  },

  //catch all
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
