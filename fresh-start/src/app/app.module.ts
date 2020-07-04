import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HeaderComponent } from "./shared/components/header/header.component";
import { MatToolbarModule } from "@angular/material/toolbar";

// import { AngularFireModule } from "@angular/fire";
// import { AngularFireStorageModule } from "@angular/fire/storage";
import { environment } from "../environments/environment";
import * as firebase from "firebase";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireStorageModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    firebase.initializeApp(environment.firebaseConfig);
  }
}
