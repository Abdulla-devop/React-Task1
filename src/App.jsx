// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
 return (
    <Welcome/>
  )
}

export default App

function Welcome(){
  return(
    <div className="container">
      <div className="box">
        <p className="word">Free</p>
        <h1 className="rupee">$0/month</h1>
        <hr className="line"></hr>
        <div className="text">
        <h6>✔ Single User
        <p>✔ 50GB Storage</p>
        <p>✔ Unlimited Public Projects</p>
        <p>✔ Community Access</p>
       <div className="dimmer">
        <p>× Unlimited private projects</p>
        <p>× Dedicated Phone Support</p>
        <p>× Free Subdomain</p>
        <p>× Monthly Status Reports</p>
        </div>
        <button className="btn">Button</button>
        </h6>
        </div>
      </div>

      <div className="box">
        <p className="word">Plus</p>
        <h1 className="rupee">$9/month</h1>
        <hr className="line"></hr>
        <div className="text">
        <h6>✔ 5 User
        <p>✔ 50GB Storage</p>
        <p>✔ Unlimited Public Projects</p>
        <p>✔ Community Access</p>
        <p>✔ Unlimited private projects</p>
        <p>✔ Dedicated Phone Support</p>
        <p>✔ Free Subdomain</p>
        <p className="dimmer">× Monthly Status Reports</p>
        <button className="btn">Button</button>
        </h6>
        </div>
      </div>

      <div className="box">
        <p className="word">Pro</p>
        <h1 className="rupee">$49/month</h1>
        <hr className="line"></hr>
        <div className="text">
        <h6>✔ Unlimited Users
        <p>✔ 50GB Storage</p>
        <p>✔ Unlimited Public Projects</p>
        <p>✔ Community Access</p>
        <p>✔ Unlimited private projects</p>
        <p>✔ Dedicated Phone Support</p>
        <p>✔ Free Subdomain</p>
        <p>✔ Monthly Status Reports</p>
        <button className="btn">Button</button>
        </h6>
        </div>
      </div>

      </div>
  )
}