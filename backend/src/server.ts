import express, { Request, Response } from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const PORT = Number(process.env.PORT) || 5001;

app.use(cors());
app.use(express.json());

const io = new Server(server , {
    cors:{
        origin: "*",
        methods:["GET","POST"]
    }
})

io.on("connection",(socket ) => {
    console.log("Connected to the client :",socket.id);
    socket.on("disconnect", () => {
        console.log(`user disconnected with ${socket.id}`);
    }) 
})



app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
