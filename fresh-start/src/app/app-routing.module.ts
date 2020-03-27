import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeModule } from "./pages/home/home.module";
import { AnotherModule } from "./pages/another/another.module";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./pages/home/home.module").then(m => HomeModule)
  },

  {
    path: "another",
    loadChildren: () =>
      import("./pages/another/another.module").then(m => AnotherModule)
  },
  //catch all
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
