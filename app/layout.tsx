'use client'

import './globals.css'
import React from "react";
import {Inter} from "next/font/google";
import NavBar from "@/app/components/NavBar";
import {createTheme, ThemeProvider} from "@mui/material";
import {grey, indigo, pink, teal} from "@mui/material/colors";

const inter = Inter({ subsets: ['greek'] })

const theme = createTheme({
    palette: {
        primary: {
            main: grey[800],
        },
        secondary: {
            main: '#f44336',
        },
    },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
            <NavBar />
            {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
