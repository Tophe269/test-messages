import React, { useState } from 'react'
import fetchWorker from '../../common/workers/fetch.worker'
import ListContainer from 'modules/list/container/ListContainer'

const App = () => {
  const [list, setList] = useState([])
  const worker = new fetchWorker()
  worker.addEventListener( 'message', event => setList( event.data.result ) )

  return  (
    <ListContainer list={list} setList={setList} />
  )
}
export default App
