import React, { useState } from 'react'
import Loading from '../components/Loading'

export default function useLoading() {
    const [loading, setLoading] = useState(false);

  return [
      loading ? <Loading /> : null,
      () => setLoading(true),
      () => setLoading(false)
  ]
   
}
