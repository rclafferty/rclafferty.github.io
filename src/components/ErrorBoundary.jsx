import React from 'react';

class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div className="alert alert-danger">
                        <h2>Something went wrong!</h2>
                    </div>
                    
                    <p className='centered'>{this.props.fallback}</p>
                    <p className='centered'>If the problem persists, feel free to contact me at <a href="mailto:robert.casey.lafferty@gmail.com">robert.casey.lafferty@gmail.com</a>.</p>
                    </div>
                </>
            );
        }

        return this.props.children; // Render the children components if no error
    }
}

export default ErrorBoundary;