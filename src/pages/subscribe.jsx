import React, { useState, useEffect } from "react"
import Navbar from "../components/navbar"
import SEO from "../components/seo"
import TwoColumnLayout from "../components/two-column-layout"
import HomeLayout from "../components/home-layout"
import Footer from "../components/footer"
import {
  getSubscriberId,
  getSubscriberStatus,
  setSubscriberId,
} from "../service/user-service"

const subscribedMessage = ""

const Subscribe = () => {
  const [email, setEmail] = useState()
  const [subscriberState, setSubscriberState] = useState("inactive")

  useEffect(() => {
    async function getSubscriberState() {
      const subscriberId = getSubscriberId()
      let state
      if (!subscriberId) {
        state = "inactive"
      } else {
        state = await getSubscriberStatus(subscriberId)
      }
      if (state) {
        setSubscriberState(state)
      }
    }
    getSubscriberState()
  }, [])

  const handleSubmit = event => {
    event.preventDefault()

    const apiKey = process.env.CONVERTKIT_API_KEY
    const formId = process.env.CONVERTKIT_FORM_ID
    const url = `https://api.convertkit.com/v3/forms/${formId}/subscribe`

    const data = {
      api_key: apiKey,
      email: email,
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        setSubscriberId(data.subscription.subscriber.id)
        setSubscriberState("pending")
      })
  }

  return (
    <HomeLayout header="halo" showRightColumn={true}>
      <SEO title="Subscribe" type="website" />
      {subscriberState === "active" ? (
        <h2 className="mobile:text-lg mobile:leading-normal sm:leading-9 font-extrabold tracking-tight text-gray-900 sm:text-2xl sm:leading-10">
          Awesome! <br />
          <span className="text-indigo-600">
            You are in the subscriber list now.
          </span>
        </h2>
      ) : subscriberState === "pending" ? (
        <h2 className="mobile:text-lg mobile:leading-normal sm:leading-9 font-extrabold tracking-tight text-gray-900 sm:text-2xl sm:leading-10">
          Check your email for confirmation
        </h2>
      ) : (
        <>
          <h2 className="mobile:text-lg mobile:leading-normal sm:leading-9 font-extrabold tracking-tight text-gray-900 sm:text-2xl sm:leading-10">
            Join the newsletter
            <br />
            <span className="text-indigo-600">
              ​Subscribe to get notified when I post stuff.
            </span>
          </h2>
          <div className="flex mobile:flex-wrap mobile:mt-5 sm:mt-8">
            <input
              className="mobile:w-full w-1/2 rounded px-3 py-2 shadow mobile:m-0 mr-5"
              type="email"
              placeholder="Your email"
              onChange={event => setEmail(event.target.value)}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="mobile:w-1/2 sm:md:w-1/2 px-5 py-3 mobile:my-5 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Subscribe
            </button>
          </div>
        </>
      )}
    </HomeLayout>
  )
}

export default Subscribe
