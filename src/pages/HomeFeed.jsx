import React from 'react'
import Header from '../components/HomeFeed/HomeFeed.header'
import Main from '../components/HomeFeed/HomeFeed.main'
import Footer from '../components/HomeFeed/HomeFeed.footer'

export default function HomeFeed() {
  return (
    <>
      <div class="flex flex-col items-center bg-neutral/1000 justify-start h-screen">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}