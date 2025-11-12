import React from 'react'

const Mainheading = ({children}) => {
  return (
    <div className='text-3xl font-bold border-l-4 pl-2 mb-4 capitalize border-r-primary text-primary'>
      {children}
    </div>
  )
}

export default Mainheading
