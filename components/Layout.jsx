import React from 'react'

export default function Layout({children}) {
  return (
    <div>
        <nav>
            nabvar
        </nav>

        <main>
           {children}
        </main>

        <footer>
            Footer
        </footer>
    </div>
  )
}
