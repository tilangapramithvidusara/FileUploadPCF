import * as React from 'react'
import { AppInterface } from './types/fileTypes'
import TextComponentView from './screens/TextComponentView'

const App = (props: AppInterface) => {
  return (
    <div className='app'>
      <TextComponentView />
    </div>
  )
}

export default App


