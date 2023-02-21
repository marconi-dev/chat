from channels.generic.websocket import AsyncJsonWebsocketConsumer

class ChatConsumer(AsyncJsonWebsocketConsumer):
    groups = ['main']
    async def connect(self):
        await self.accept()
        await self.channel_layer.group_send(self.groups[0], 
            {'type':'send_message', 'message':{'status':"connected"}}
        )

    async def receive_json(self, text_data):
        user = text_data['user']
        msg = text_data['msg']  

        data = {'type':'message', 'msg':msg, 'user':user}
        await self.channel_layer.group_send(self.groups[0], 
            {'type':'send_message', 'message':data}
        )

    async def send_message(self, event):
        msg = event['message']
        await self.send_json(msg)