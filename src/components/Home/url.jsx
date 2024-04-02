import React from 'react';

const YourComponent = () => {
    // Get the current URL pathname
    const currentURL = window.location.pathname;

    return (
        <div>
            <p>Current URL: {currentURL}</p>
            {/* Your other content here */}
        </div>
    );
}

export default YourComponent;
