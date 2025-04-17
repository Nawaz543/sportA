import React, { useState } from 'react';
import './Announcement.css';

const Announcement = ({onBack}) => {
  const [selectedRoom, setSelectedRoom] = useState('Select Room');
  const [showDropdown, setShowDropdown] = useState(false);

  const roomNumbers = ['example123'];

  const postponedMatches = [];
  const canceledMatches = ['Tennis - Match X'];
  const otherAnnouncements = ['Volleyball match will be delayed by 30 mins'];

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setShowDropdown(false);
  };

  return (
    <div className="announcement-container">
      <div className="top-bar">
        <h1>Announcement</h1>
        <button className="back-button" onClick={onBack} >Back</button>
      </div>

      <div className="room-selector">
        <div
          className="room-label"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Room No: <span className="selected-room">{selectedRoom}</span>
        </div>
        {showDropdown && (
          <ul className="dropdown">
            {roomNumbers.map((room) => (
              <li key={room} onClick={() => handleRoomSelect(room)}>
                {room}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="announcement-list">
      <div className="announcement-section">
         <h2>Postponed Matches</h2>
             <ul>
              {postponedMatches.length === 0 ? (
                <li><b>There are no changes</b></li>
              ) : (
              postponedMatches.map((match, idx) => (
               <li key={idx}>{match}</li>
                ))
             )}
            </ul>
        </div>

        <div className="announcement-section">
          <h2>Canceled Matches</h2>
         <ul>
             {canceledMatches.length === 0 ? (
               <li>There are no cancellations</li>
              ) : (
             canceledMatches.map((match, idx) => (
               <li key={idx}>{match}</li>
              ))
             )}
         </ul>
        </div>


        <div className="announcement-section">
            <h2>Other</h2>
            <ul>
                {otherAnnouncements.length === 0 ? (
                    <li>No other announcements</li>
                ) : (
                otherAnnouncements.map((note, idx) => (
                    <li key={idx}>{note}</li>
                   ))
                )}
            </ul>
        </div>

      </div>
    </div>
  );
};

export default Announcement;
