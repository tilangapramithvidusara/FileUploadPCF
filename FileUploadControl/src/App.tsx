import * as React from 'react'
import { AppInterface } from './types/fileTypes'
import CustomView from './components/CustomView/CustomView'

const App = (props: AppInterface) => {
  return (
    <div className='app'>
      <CustomView />
    </div>
  )
}

export default App


