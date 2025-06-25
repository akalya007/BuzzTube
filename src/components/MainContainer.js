import React from 'react'
import ButtonList from './ButtonList'
import VedioContainer from './VedioContainer'

const MainContainer = () => {
  return (
   <div className="h-full min-w-screen">
  <ButtonList />
  <VedioContainer />
</div>
  )
}

export default MainContainer