import React from 'react';
import hero from "./assets/images/hero.jpg"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

//   componentDidCatch(error, errorInfo) {
//     // You can also log the error to an error reporting service
//     logErrorToMyService(error, errorInfo);
//   }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <img src={hero} alt="hero" />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;