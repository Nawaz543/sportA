import React, { useState } from 'react';
import './Live.css';

const LiveMatch = ({onBack}) => {
  const [selectedRoom, setSelectedRoom] = useState('Select Room');
  const [showDropdown, setShowDropdown] = useState(false);

  const roomNumbers = ['101', '102', '103', '104'];

  const matches = [
    {
      logo: '/images/football.png',
      matchName: 'Inter-College Football Final',
      teamName: 'Team A vs Team B',
      organizer: 'by Sports Council',
      ground: 'at Main Ground',
      startTime: 'Start at 3:00 PM',
    },
    {
      logo: '/images/cricket.png',
      matchName: 'Cricket Semifinal',
      teamName: 'Team C vs Team D',
      organizer: 'by Dept. of Sports',
      ground: 'at West Field',
      startTime: 'Start at 11:00 AM',
    },
  ];

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setShowDropdown(false);
  };

  return (
    <div className="live-match-container">
      {/* Header */}
      <div className="top-bar">
        <h1>Upcoming Match</h1>
        <button className="back-button" onClick={onBack}>Back</button>
      </div>

      {/* Room Selector */}
      <div className="room-selector">
        <div className="room-label" onClick={() => setShowDropdown(!showDropdown)}>
          Room: <span className="selected-room">{selectedRoom}</span>
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

      {/* Match Cards */}
      <div className="match-cards">
        {matches.map((match, idx) => (
          <div className="match-card" key={idx}>
            <img src={match.logo} alt="logo" className="match-logo" />
            <div className="match-info">
              <div className="match-name">{match.matchName}</div>
              <div className="team-name">{match.teamName}</div>
              <div className="organizer">{match.organizer}</div>
              <div className="ground">{match.ground}</div>
              <div className="card-footer">
                <span className="start-time">{match.startTime}</span>
                <button className="card-button">Contact</button>
                <button className="card-button">Share</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveMatch;
