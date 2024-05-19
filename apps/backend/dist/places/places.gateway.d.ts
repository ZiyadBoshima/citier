import { OnModuleInit } from "@nestjs/common";
import { Server, Socket } from 'socket.io';
export declare class PlacesGateway implements OnModuleInit {
    server: Server;
    onModuleInit(): void;
    onRequestPlacesDetails(client: Socket, body: any): void;
}
