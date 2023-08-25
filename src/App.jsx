import ProfilePic from "assets/image-jeremy.png";
import { useState } from "react";
import "./App.css";
import TrackingItem from "./components/TrackingItem";

function App() {
  const [selectedDuration, setSelectedDuration] = useState("Week");
  return (
    <>
      <section className="container">
        <div className="user">
          <div className="profile">
            <img
              className="profile__pic"
              src={ProfilePic}
              alt="profile picture"
            />
            <div className="username">
              <p className="report">Report for</p>
              <h1 className="user__name">Jeremy Robson</h1>
            </div>
          </div>
          <div className="filter">
            <input
              type="radio"
              id="daily"
              value="Day"
              checked={selectedDuration === "Day"}
              onChange={(e) => setSelectedDuration(e.target.value)}
            />
            <label
              className={selectedDuration === "Day" ? "checked" : "unchecked"}
              htmlFor="daily"
            >
              Daily
            </label>
            <input
              type="radio"
              id="weekly"
              value="Week"
              checked={selectedDuration === "Week"}
              onChange={(e) => setSelectedDuration(e.target.value)}
            />
            <label
              className={selectedDuration === "Week" ? "checked" : "unchecked"}
              htmlFor="weekly"
            >
              Weekly
            </label>
            <input
              type="radio"
              id="monthly"
              value="Month"
              checked={selectedDuration === "Month"}
              onChange={(e) => setSelectedDuration(e.target.value)}
            />
            <label
              className={selectedDuration === "Month" ? "checked" : "unchecked"}
              htmlFor="monthly"
            >
              Monthly
            </label>
          </div>
        </div>
        <TrackingItem selectedDuration={selectedDuration} />
      </section>
    </>
  );
}

export default App;
