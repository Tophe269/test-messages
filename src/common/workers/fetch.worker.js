const baseUrl = 'http://localhost:3001/'

const fetchData = async (event) => {
    const { method = 'GET', url = '', params = {} } = event.data

    const config = {
        method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    }

    if (method === 'POST') {
        config.body = JSON.stringify(params)
    }

    let completeUrl =  `${baseUrl}${url}`

    if (method === 'GET') {
        const paramsKeys = Object.keys(params)
        completeUrl = paramsKeys.reduce(
            (acc, key, index) => (`${ acc }${ index === 0 ? '' : '&' }${ key }=${ params[key] }`),
            `${completeUrl}${ paramsKeys.length ? '?' : '' }`
        )
    }

    try {
        const response = await fetch(
            completeUrl,
            config
        )
        const result = await response.json()
        self.postMessage({ result })
    } catch (error) {
        self.postMessage({ error })
    }
}

self.addEventListener("message", fetchData);
