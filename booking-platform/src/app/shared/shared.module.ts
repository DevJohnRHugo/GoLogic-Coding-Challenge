import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "../app-routing.module";
import { DialogDetailsComponent } from "./components/dialog-details/dialog-details.component";
import { DialogPromptComponent } from "./components/dialog-prompt/dialog-prompt.component";
import { MaterialModule } from "./material/material.module";

@NgModule({
    declarations: [
        DialogPromptComponent,
        DialogDetailsComponent,
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        MaterialModule,
        AppRoutingModule
    ],
    exports: [
        MaterialModule,
        DialogPromptComponent,
        DialogDetailsComponent,
        AppRoutingModule
    ]
})
export class SharedModule { }