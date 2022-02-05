import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Booking } from 'src/app/core/models/booking.model';
import { BookingService } from 'src/app/core/services/booking/booking.service';
import { DialogPromptComponent } from '../dialog-prompt/dialog-prompt.component';

@Component({
  selector: 'app-dialog-details',
  templateUrl: './dialog-details.component.html',
  styleUrls: ['./dialog-details.component.scss']
})
export class DialogDetailsComponent implements OnInit {
  booking: Booking = new Booking();

  bookingFormGroup = new FormGroup({
    numberOfGuest: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]+$"),
    ]),
    checkInDate: new FormControl('', [
      Validators.required
    ]),
    checkOutDate: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
    ])
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private formBuilder: FormBuilder, private bookingService: BookingService
  ) { }

  ngOnInit(): void {
  }


  bookRoom(roomId: any, checkInDate: string, checkOutDate: string) {
    if (this.bookingFormGroup.valid) {
      this.booking.email = this.bookingFormGroup.controls["email"].value;
      this.booking.userId = 1;
      this.booking.roomId = roomId;
      this.booking.numberOfGuest = this.bookingFormGroup.controls["numberOfGuest"].value;
      this.booking.checkInDate = new Date(checkInDate).toLocaleDateString();
      this.booking.checkOutDate = new Date(checkOutDate).toLocaleDateString();

      this.bookingService.bookRoom(this.booking).subscribe(
        () => {
          this.dialog.open(DialogPromptComponent, {
            data: {
              title: "Successful booking",
              message: `You have successfully booked for dates ${this.booking.checkInDate} to ${this.booking.checkOutDate}`
            }
          });
        },
        (error) => {
          if (error.status === 400) {
            this.dialog.open(DialogPromptComponent, {
              data: {
                title: "Invalid booking",
                message: error.error.message
              }
            });
            console.log("Invalid input", error);
          }
          else {
            console.log("Unexpected error happened", error);
          }
        }
      )
    }
  }
}
