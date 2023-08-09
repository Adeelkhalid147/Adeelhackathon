import React, {FC} from 'react'

const Wrapper:FC<{ children: React.ReactNode }>= ({children}) => {
  return (
    <div className='max-w-7xl mx-12 md:mx-10'>{children}</div>
  )
}

export default Wrapper