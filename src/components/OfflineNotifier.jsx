import React, {useState, useEffect} from 'react'

const OfflineNotifier = () => {
    const [isOffline, setIsOffline] = useState(!navigator.onLine)

    useEffect(() => {
      const handleOnline = () => setIsOffline(false);
      const handleOffline = () => setIsOffline(true);  

      window.addEventListener('online', handleOnline)
      window.addEventListener('offline', handleOffline)
    
      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      }
    }, [])
    
  return (
    isOffline && (
        <div className="fixed top-0 left-0 w-full bg-red-700 text-white text-center py-2 z-50">
            You are offline. Please check your internet connection.
        </div>
    )
  )
}

export default OfflineNotifier;