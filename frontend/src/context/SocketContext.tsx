import SockeIoClient from 'socket.io-client';
import { createContext, ReactNode } from 'react';

const Ws_server = 'http://localhost:5001';

type SocketContextType = {
  socket: ReturnType<typeof SockeIoClient>;
};

const SocketContext = createContext<SocketContextType | null>(null);
const socket = SockeIoClient(Ws_server);

interface Props {
  children: ReactNode;
}

export const SocketProvider: React.FC<Props> = ({ children }) => {
  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
}; 
