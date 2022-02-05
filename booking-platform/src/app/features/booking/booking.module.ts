import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { BookingComponent } from "./booking.component";

@NgModule({
    declarations: [
        BookingComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule
    ],
    exports: [
        BookingComponent
    ]
})
export class BookingModule { }