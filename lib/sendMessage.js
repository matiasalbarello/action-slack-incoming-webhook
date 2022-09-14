const core = require('@actions/core')
const fetch = require('node-fetch')

async function sendMessage(message, to) {
  const body = JSON.stringify(message);
  try {
    console.log(`Sending message to ${to} with body:`)
    console.log(`${body}`)
    const res = await fetch(to, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: body
    })

    if (!res.ok) {
      throw new Error(`Failed to send message to ${to} with body ${body}: ${res.status} ${res.statusText}`)
    }

    return await res.statusText
  }
  catch (error) {
    throw error
  }
}

module.exports = sendMessage
