import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Material Imports

import { MatForm } from "@angular/material";

// tslint:disable-next-line: comment-format
//Custom Components
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule]
})
export class SharedModule {}
