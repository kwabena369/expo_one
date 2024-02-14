import React from 'react'


const layout = ({children}:{
    children :React.ReactNode
}) => {
  return (
    <div>

<div className="bg-blue-400 font-sans text-2xl">
    Header there
</div>

        <div className="container">
{children}
        </div>
    </div>
  )
}

export default layout