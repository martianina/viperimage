'use client';
import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import '@/styles/App.css';
import '@/styles/Contact.css';
// import '@asseinfo/react-kanban/dist/styles.css';
// import '@/styles/Plugins.css';

import '@/styles/index.css';

export default function AppWrappers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
