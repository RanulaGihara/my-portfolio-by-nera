"use client";   
import '../styles/globals.css'
import { ReactNode } from 'react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import Navbar from '@/components/navbar'

const theme = createTheme({
  palette: {
    primary: { main: '#1D4ED8' },     
    secondary: { main: '#F43F5E' },
  },
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
