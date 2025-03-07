import React from 'react'

const ShowUserName = (props) => {
  return (
    <div className='mt-12'>
        <h2 className='text-2xl text-center'>O nome do usuário: {props.name}</h2>
    </div>
  )
}

export default ShowUserName