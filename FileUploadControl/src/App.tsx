import * as React from 'react'
import { AppInterface } from './types/fileTypes'
import FileUploadComponent from './components/FileUploadComponent'
import DocViewComponent from './components/DocxView/DocxView'

const App = (props: AppInterface) => {
  return (
    <div className='app'>
      {/* <FileUploadComponent /> */}
      <DocViewComponent />
    </div>
  )
}

export default App


