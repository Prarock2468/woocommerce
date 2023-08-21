import React, { useState, useEffect } from 'react';
function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const handleError = (error, errorInfo) => {
      // You can log the error to an error reporting service here
      console.error('Error caught by ErrorBoundary:', error, errorInfo);
      setHasError(true);
    };
    const resetError = () => {
      setHasError(false);
    };
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleError);
    window.addEventListener('beforeunload', resetError);
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleError);
      window.removeEventListener('beforeunload', resetError);
    };
  }, []);
  if (hasError) {
    return <div>Something went wrong.</div>;
  }
  return props.children;
}
export default ErrorBoundary;