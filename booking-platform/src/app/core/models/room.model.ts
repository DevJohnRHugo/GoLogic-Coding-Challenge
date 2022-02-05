import { Address } from "./address.model";


export class RoomImage {
    id!: number;
    imageName!: string;
    room!: Room;
    roomId!: number;
}

export class Room {
    id!: number;
    title!: string;
    price!: number;
    description!: string;
    address!: Address;
    addressId!: number;
    roomCapacity!: number;
    roomImages!: RoomImage[];
}
