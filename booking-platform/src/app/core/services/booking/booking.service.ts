import { Booking } from './../../models/booking.model';
import { Room } from './../../models/room.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map, timeout } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private readonly baseUrl: string = environment.baseUrl;
  private readonly endpointsUrl = environment.endpointUrls;

  constructor(private httpClient: HttpClient, private dialog: MatDialog) { }

  getRooms() {
    return this.httpClient.get<Room[]>(`${this.baseUrl}${this.endpointsUrl.roomList}`)
      .pipe(timeout(100000)
        , catchError(error => {
          return throwError(error);
        })
      );
  }

  getRoomById(roomId: number) {
    return this.httpClient.get<Room>(`${this.baseUrl}${this.endpointsUrl.roomInfo}${roomId}`)
      .pipe(timeout(100000)
        , catchError(error => {
          return throwError(error);
        })
      );
  }

  bookRoom(val: any) {
    return this.httpClient.post<Booking>(`${this.baseUrl}${this.endpointsUrl.bookRoom}`, val)
      .pipe(timeout(100000)
        , catchError(error => {
          return throwError(error);
        })
      );
  }

}
