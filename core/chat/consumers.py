from channels.generic.websocket import AsyncJsonWebsocketConsumer

class ChatConsumer(AsyncJsonWebsocketConsumer):
    groups = ['main']
    async def connect(self):
        await self.accept()

    async def receive_json(self, text_data):
        data = {'type':'message', **text_data}
        await self.channel_layer.group_send(self.groups[0], 
            {'type':'send_message', 'message':data}
        )

    async def send_message(self, event):
        msg = event['message']
        await self.send_json(msg)