import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        console.error("Error caught by ErrorBoundary:", error);
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <h1 style={{ color: "white" }}>Something went wrong. Check the console for details.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;


