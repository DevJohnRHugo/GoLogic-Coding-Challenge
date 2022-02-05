import { Room } from "./room.model";
import { User } from "./user.model";

export class Booking {
    bookingId?: number;
    user?: User;
    email?: string;
    userId?: number;
    room?: Room;
    roomId?: number;
    numberOfGuest?: number;
    checkInDate?: string;
    checkOutDate?: string;
}
