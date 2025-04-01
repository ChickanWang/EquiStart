"use client";
import { GameProvider } from './context/GameContext';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <GameProvider>{children}</GameProvider>
      </body>
    </html>
  );
}
// This layout component wraps the entire application with the GameProvider context, allowing all child components to access the game state and functions defined in the context.