import React, { useState } from "react"; 
import "./CreateRoom.css"; // Import CSS file

export default function Room({ onBack }) {
  const [isCreateRoom, setIsCreateRoom] = useState(false); // Toggle between Join/Create Room
  return (
    <div className="room-container" id="room-container">
      {/* Header with Navigation */}
      <div className="room-header">
        <button className="back-button" onClick={onBack}>⬅ Back</button>
        <button className="toggle-screen" onClick={() => setIsCreateRoom(!isCreateRoom)}>
          {isCreateRoom ? "Click to Join Room" : "Click to Create Room"}
        </button>
      </div>

      {/* Wrapper for sliding effect */}
      <div className="room-wrapper" style={{ transform: `translateX(${isCreateRoom ? "-100%" : "0"})` }}>
        {/* Join Room Screen */}
        <div className="room-screen">
          <h2 className="join-room-text">Join Room</h2>
          <form className="room-form">
            <input type="text" placeholder="Input Room Name*" required />
            <input type="text" placeholder="Enter Organizer Name" />
            <input type="email" placeholder="Enter Organizer Email*" required />
            <input type="tel" placeholder="Enter Organizer No." />
            <input type="text" placeholder="Enter City*" required />
            <input type="text" placeholder="Enter Location" />
            <button className="room-btn">Find Room</button>
          </form>
        </div>

        {/* Create Room Screen */}
        <div className="room-screen">
          <h2>Create New Room</h2>
          <form className="room-form">
            <div className="image-upload">
              <label id="label">Add Banner:</label>
              <input type="file" accept="image/*" />
              <label id="label">Add Logo:</label>
              <input type="file" accept="image/*" />
            </div>
            <input type="text" placeholder="Input Room Name*" required />
            <input type="text" placeholder="Enter Organizer Name*" required />
            <input type="email" placeholder="Enter Organizer Email*" required />
            <input type="tel" placeholder="Enter Organizer No.*" required />
            <label id="label">Match Dates:</label>
            <input type="date" required />
            <input type="date" required />
            <input type="text" placeholder="Enter City*" required />
            <input type="text" placeholder="Enter Location" />

            <h3>Add Games in Your Room:</h3>
            <div className="games-container">
              {["Cricket", "Football", "Badminton", "Chess", "Carrom", "Kabaddi", "Basketball"].map(game => (
                <label key={game} className="game-checkbox">
                    <input type="checkbox" value={game} />
                    <span>{game}</span>
                </label>
              ))}
            </div>
            <button className="room-btn">Create Room</button>
          </form>
        </div>
      </div>
    </div>
  );
}
