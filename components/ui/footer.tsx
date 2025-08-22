import React from 'react'
const year = new Date().getFullYear();
function Footer() {
  return (
    <footer className='p-5 h-14 bg-black text-white'>
       Dabakh {year}
    </footer>
  )
}

export default Footer