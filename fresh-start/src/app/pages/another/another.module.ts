import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { AnotherRoutingModule } from "./another-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, AnotherRoutingModule]
})
export class AnotherModule {}
