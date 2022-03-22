import React from 'react'

export default function FlowsCreate() {

    async function sendData(data = {}, url = 'https://devapi.aau-sw.dk/flows/create') {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',

            body: JSON.stringify(data)
        })
        return response.json()
    }

  return (
    <div>FlowsCreate</div>
  )
}
