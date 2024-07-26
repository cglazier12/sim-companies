import React from 'react'
import { BellIcon } from '@heroicons/react/24/solid'
import Test from './pages/test'
import LeftColumn from './pages/LeftColumn'
import RightColumn from './pages/RightColumn'
import CandlestickChart from './components/charts/candlestick'

const App: React.FC = () => {
  return (
    <div className="flex min-h-full flex-col">
      <header className="shrink-0 border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="h-8 w-auto"
          />
          <div className="flex items-center gap-x-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-300">
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your profile</span>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="h-8 w-8 rounded-full bg-gray-800"
              />
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
        {/* LEFT COLUMN */}
        <LeftColumn />

        <main className="flex-1">
          <CandlestickChart />
        </main>

        {/* Right COLUMN */}
        <RightColumn />
      </div>
    </div>
  )
}

export default App
