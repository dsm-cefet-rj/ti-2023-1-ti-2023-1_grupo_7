import './styles/globals.css'

export const metadata = {
  title: 'YJL - Stock Monitoring',
  description: 'An app to help you track your investments',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
