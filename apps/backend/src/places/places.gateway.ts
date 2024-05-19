import { OnModuleInit } from "@nestjs/common"
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets"
import { Server, Socket } from 'socket.io'

@WebSocketGateway()
export class PlacesGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server

  onModuleInit() {
      this.server.on('connection', (socket) => {
        console.log(socket.id + ' connected.')
      })
  }

  @SubscribeMessage('place-details')
  onRequestPlacesDetails(@ConnectedSocket() client: Socket, @MessageBody() body: any) {
    this.server.to(client.id).emit('place-details', body)
  }
}