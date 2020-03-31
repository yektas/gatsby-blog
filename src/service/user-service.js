const SUBSCRIBER_ID_KEY = "subscriber_id"

export function setSubscriberId(subscriberId) {
  window.localStorage.setItem(SUBSCRIBER_ID_KEY, subscriberId)
}

export function getSubscriberId() {
  return window.localStorage.getItem(SUBSCRIBER_ID_KEY)
}

export function getSubscriberStatus(subscriberId) {
  const apiSecret = process.env.CONVERTKIT_API_SECRET
  return fetch(
    `https://api.convertkit.com/v3/subscribers/${subscriberId}?api_secret=${apiSecret}`
  )
    .then(resp => resp.json())
    .then(res => res.subscriber.state)
}
