import { Booking } from './../../core/models/booking.model';
import { Room } from './../../core/models/room.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from 'src/app/core/services/booking/booking.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDetailsComponent } from 'src/app/shared/components/dialog-details/dialog-details.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  rooms!: Room[];
  booking: Booking = new Booking();
  currentYear: number = new Date().getFullYear();
  bookingFormGroup: FormGroup;

  constructor(private bookingService: BookingService, private dialog: MatDialog, private formBuilder: FormBuilder) {
    this.bookingFormGroup = this.formBuilder.group({
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

  }

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms() {
    this.bookingService.getRooms()
      .subscribe(response => {
        this.rooms = response;
      });
  }

  seeDetails(roomId: number) {
    const room = this.rooms.find(e => e.id == roomId);
    console.log(room);
    this.dialog.open(DialogDetailsComponent, {
      data: {
        room: room
      }
    });
  }
}