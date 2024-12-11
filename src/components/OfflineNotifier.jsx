import React from 'react'
import useOfflineNotifer from '../utils/useOfflineNotifer';

const OfflineNotifier = () => {
  const isOffline = useOfflineNotifer();
    
  return (
    isOffline && (
        <div className="fixed top-0 left-0 w-full bg-red-700 text-white text-center py-2 z-50">
            You are offline. Please check your internet connection.
        </div>
    )
  )
}

export default OfflineNotifier;