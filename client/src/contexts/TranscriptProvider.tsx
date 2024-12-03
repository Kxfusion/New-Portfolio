// import { useReducer, createContext } from "react";
// import type { Socket } from 'socket.io-client';

// type TranscriptProviderParams = React.PropsWithChildren<{
//     socket: Socket,
// }>;

// const TranscriptContext = createContext('');

// export default function TranscriptProvider({ children, socket }: TranscriptProviderParams) {
//     // const transcriptReducer = transcriptReducerGenerator(socket);
//     // const [transcript, request] = useReducer(transcriptReducer, '');
//     // return (
//     //     <TranscriptContext.Provider value={transcript}>
//     //         {children}
//     //     </TranscriptContext.Provider>
//     // );
// }

// const transcriptReducerGenerator = (socket: Socket) => {
//     // return (action: { type: 'initial' | 'continue', step: Number }) => {
//     //     switch (action.type) {
//     //         case 'initial': {
//     //             return '';
//     //         }
//     //         case 'continue': {
//     //             return '';
//     //         }
//     //         default: {
//     //             throw Error(`Unknown action: ${action}`);
//     //         }
//     //     }
//     // };
// }