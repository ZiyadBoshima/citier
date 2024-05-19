import { OnModuleInit } from "@nestjs/common"
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets"
import { Server, Socket } from 'socket.io'
import { PlacesService } from "./places.service"

@WebSocketGateway()
export class PlacesGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server

  constructor(private readonly placesService: PlacesService) {}

  onModuleInit() {
      this.server.on('connection', (socket) => {
        console.log(socket.id + ' connected.')
      })
  }

  @SubscribeMessage('place-details')
  async onRequestPlacesDetails(@ConnectedSocket() client: Socket, @MessageBody() body: any) {
    const placeDetails = await this.placesService.getPlaceDetails(body)
    
    this.server.to(client.id).emit('place-details', placeDetails)
  }
}