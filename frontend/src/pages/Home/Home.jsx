import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);
  return (
    <div className="home-container">
      
      <div className="home-content">
        <div className="home-user-info">
          <h2 className="home-welcome-message">
            Welcome {user.userName} to Onex!
          </h2>
          <p className="home-user-email">{user.email}</p>
        </div>
        <div className="home-cards-container">
          <div className="home-card">
            <h3 className="home-card-title">Dashboard</h3>
            <p className="home-card-description">
              View and manage your data and settings
            </p>
            <button className="home-card-button">View Dashboard</button>
          </div>
          <div className="home-card">
            <h3 className="home-card-title">Transactions</h3>
            <p className="home-card-description">
              Manage your transactions and spending
            </p>
            <button className="home-card-button">View Transactions</button>
          </div>
          <div className="home-card">
            <h3 className="home-card-title">Support</h3>
            <p className="home-card-description">
              Need help? Get in touch with our support team
            </p>
            <button className="home-card-button">Contact Support</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
