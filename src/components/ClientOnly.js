import React, { useState, useEffect } from "react"

const ClientOnly = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }
  return <div>{children}</div>
}

export default ClientOnly