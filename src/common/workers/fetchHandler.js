import fetchWorker from './fetch.worker'

function fetchData ({ method = 'GET', url = '', params = {} }) {
  return new Promise((resolve, reject) => {
    const worker = new fetchWorker()

    worker.addEventListener( 'message', event => {
      if (event.data.result) {
        resolve(event.data.result)
      }
      if (event.data.error) {
        reject(event.data.error)
      }
    } )

    worker.postMessage({ method, url, params })
  })

}

export default fetchData