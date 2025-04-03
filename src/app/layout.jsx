/* 
  This layout component wraps the entire application with the GameProvider context, 
  allowing all child components to access the game state and functions defined in the context
*/
"use client";
import './globals.css';
import { GameProvider } from './context/GameContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GameProvider>{children}</GameProvider>
      </body>
    </html>
  );
}
