from channels.generic.websocket import AsyncJsonWebsocketConsumer

class ChatConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        await self.accept()
        await self.send_json({'status':'connected'})

    async def receive_json(self, text_data):
        user = text_data['user']
        msg = text_data['msg']  

        data = {
            'type':'message',
            'msg':msg, 
            'user':user
        }

        await self.send_json(data)