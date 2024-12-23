import React, { useEffect } from 'react'
import Card from '../components/Card'
import '../css/Service-Listing.css'
import Navbar from '../components/Navbar'
import Navjustic from '../components/Navjustic'
import Footer from '../components/Footer'
import pfp from '../assets/images/profile-user.png'  

const ServiceListing = () => {

  const loadData = async () => {
    const response = await fetch("http://localhost:7000/api/search/criminallawyer", {
        method: "Get",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let data = await response.json();
    console.log(data);
}
useEffect(() => {
    loadData();
}, []);

  return (
    <>  
        <Navbar />
        <Navjustic />
        <div className='main'>
        <h1>Criminal Lawyer</h1>
        <div className='cards'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
        </div>
        <div className="main2">
            <h1>Leaderboard</h1>
            <div className="leaderboard">
                <div className="lead-head">
                    <h2>Rank</h2>
                    <h2>Lawyer</h2>
                    <h2>Points</h2>
                </div>
                <div className="lead-data">
                    <h3>1</h3>
                    <h3><img src={pfp} alt=""/>Hinayath Sulthana</h3>
                    <h3>4000</h3>
                </div>
                <div className="lead-data">
                    <h3>2</h3>
                    <h3><img src={pfp} alt=""/>Kowshik Shrinivas</h3>
                    <h3>3500</h3>
                </div>
                <div className="lead-data">
                    <h3>3</h3>
                    <h3><img src={pfp} alt=""/>Naveen V</h3>
                    <h3>3000</h3>
                </div>
                <div className="lead-data">
                    <h3>4</h3>
                    <h3><img src={pfp} alt=""/>Mithun K</h3>
                    <h3>2500</h3>
                </div>
                <div className="lead-data">
                    <h3>5</h3>
                    <h3><img src={pfp} alt=""/>MuthuKaruppan KNM</h3>
                    <h3>2000</h3>
                </div>
                <div className="lead-data">
                    <h3>6</h3>
                    <h3><img src={pfp} alt="" />RAM JETH</h3>
                    <h3>1900</h3>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default ServiceListing