'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div id="pre-load">
      <div id="loader" className="loader">
        <div className="loader-container has-theme-light-blue">
          <div className="loader-icon">
            <img src="/assets/images/logo/aba-logo.webp" alt="Loading" />
          </div>
        </div>
      </div>
    </div>
  )
}
