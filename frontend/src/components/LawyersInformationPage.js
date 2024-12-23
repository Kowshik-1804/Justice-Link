import React from 'react';
import { Link } from 'react-router-dom'
function LawyersInformationPage() {
  return (
    <>
    <div className="container">
      <h1>Your Login is successful into Justice Link</h1>
      <p>Welcome to Justice Link. You have successfully logged in!</p>
      <Link to="/lawyers-information" className="btn">Continue</Link>
    </div>
    <div className="suggested-lawyers">
  <div className="suggested-lawyer">
    <h1>Suggested Lawyer:</h1>
    <div className="lawyer-box">
      <div className="lawyer-info">
        <span>Name:</span> Kowshik
      </div>
      <div className="lawyer-info">
        <span>Email:</span> kowshik@gmail.com
      </div>
      <div className="lawyer-info">
        <span>Address:</span> Coimbatore
      </div>
      <div className="lawyer-info">
        <span>Specialized in:</span> Family Law
      </div>
    </div>
  </div>
  <div className="suggested-lawyer">
    <h1>Suggested Lawyer:</h1>
    <div className="lawyer-box">
      <div className="lawyer-info">
        <span>Name:</span> Naveen
      </div>
      <div className="lawyer-info">
        <span>Email:</span> naveen@gmail.com
      </div>
      <div className="lawyer-info">
        <span>Address:</span> Coimbatore
      </div>
      <div className="lawyer-info">
        <span>Specialized in:</span> Criminal Law
      </div>
    </div>
  </div>
  <div className="suggested-lawyer">
    <h1>Suggested Lawyer: </h1>
    <div className="lawyer-box">
      <div className="lawyer-info">
        <span>Name:</span> Hinayath Sulthana
      </div>
      <div className="lawyer-info">
        <span>Email:</span> hinayathsulthana@gmail.com
      </div>
      <div className="lawyer-info">
        <span>Address:</span> Coimbatore
      </div>
      <div className="lawyer-info">
        <span>Specialized in:</span> Corporate Law
      </div>
    </div>
  </div>
</div>
</>
  );
}

export default LawyersInformationPage;
