import Link from 'next/link'
import { AppBar, Toolbar, Button } from '@mui/material'

export default function Navbar() {
  return (
    <AppBar position="static" color="primary" enableColorOnDark>
      <Toolbar className="container mx-auto flex justify-between">
        <Link href="/" className="text-white font-bold text-lg">MyPortfolio</Link>
        <div className="space-x-4">
          {['About','Projects','Contact'].map((path) => (
            <Button key={path} LinkComponent={Link} href={`/${path}`} color="inherit">
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  )
}
