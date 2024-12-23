// ShowPage.js

import React from 'react';
import { Link } from 'react-router-dom';

function ShowPage() {
  return (
    <div className="container">
      <h1>Your Login is successful into Justice Link</h1>
      <p>Welcome to Justice Link. You have successfully logged in!</p>
      <Link to="/lawyers-information" className="btn">Continue</Link> {/* Navigate to lawyers' information page */}
    </div>
  );
}

export default ShowPage;
