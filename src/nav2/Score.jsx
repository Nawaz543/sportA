import React, { useState } from 'react';
import './Score.css';

const matchTypes = ['Cricket', 'Football', 'Badminton', 'Chess', 'Carrom', 'Kabaddi', 'Basketball', 'Custom'];

const detailedScores = {
  Cricket: {
    teamA: ['Runs: 120/4', 'Overs: 14.3', 'Wickets: 4', 'Current Batsmen : ms', 'Current Bowler : md','Innings : 2nd','Match Status : complete'],
    teamB: ['Runs: 110/3', 'Overs: 13.0', 'Wickets: 3', 'Current Batsmen : ms', 'Current Bowler : md','Innings : 2nd','Match Status : Incomplete','Target : 222']
  },
  Football: {
    teamA: ['Goals: 2', 'Yellow Cards : 2','Red Cards : 0','Fouls : 1','Half : Current half (1st/2nd/ET) ','Match Time : 90 min','Match Status : progress','Possession: 60%'],
    teamB: ['Goals: 1', 'Red Cards : 0','Fouls : 1','Half : Current half (1st/2nd/ET) ','Match Time : 90 min','Match Status : progress','Possession: 60%']
  },
  Badminton: {
    teamA: ['Game Points: 21', 'Set 1: Win', 'Set 2: 15','Set 3 : 2','Match Status : in progress'],
    teamB: ['Game Points: 17', 'Set 1: Lose', 'Set 2: 21','Set 3 : 2','Match Status : in progress']
  },
  Chess: {
    teamA: ['Player : White','Time Left: 15:32', 'Captured: 3 pawns, 1 rook','Match Status : complete','Result : Win'],
    teamB: ['Player : Black','Time Left: 14:48', 'Captured: 2 bishops','Match Status : complete','Result : Loose']
  },
  Carrom: {
    teamA: ['Score: 15', 'White Coins: 5', 'Black Coins: 3','Queen Pocketed : Yes','Match status : in progress'],
    teamB: ['Score: 12', 'White Coins: 3', 'Black Coins: 4','Queen Pocketed : No','Match status : in progress']
  },
  Kabaddi: {
    teamA: ['Raid Points: 12', 'Tackle Points: 8', 'All-outs: 1','Total Points : 33','Match Status : in progress'],
    teamB: ['Raid Points: 10', 'Tackle Points: 9', 'All-outs: 0','Total Points : 33','Match Status : in progress']
  },
  Basketball: {
    teamA: ['Quarter score : 12', 'Total Score : 32', 'Fouls : 2', 'Quarter : 2', 'Match Status : Completed'],
    teamB: ['Quarter score : 12', 'Total Score : 32', 'Fouls : 2', 'Quarter : 2', 'Match Status : Completed']
  },
  Custom: {
    teamA: ['Score: 5', 'Time: 10:45','Status : complete','Note : Additional remarks'],
    teamB: ['Score: 4', 'Time: 10:45','Status : complete','Note : Additional remarks']
  }
};

const roomData = matchTypes.flatMap((type, idx) => ([
  {
    roomNo: 1,
    matchId: `${type}-001`,
    matchType: type,
    teamName: `${type} Team A vs Team B`,
    organizer: `${type} Club`,
    ground: `${type} Arena`,
    startTime: '2:00 PM',
    scores: detailedScores[type]
  },
  {
    roomNo: 2,
    matchId: `${type}-002`,
    matchType: type,
    teamName: `${type} Warriors vs Legends`,
    organizer: `${type} Association`,
    ground: `${type} Ground`,
    startTime: '4:00 PM',
    scores: detailedScores[type]
  }
]));

const Scoreboard = ({onBack }) => {
  const [selectedMatch, setSelectedMatch] = useState('Cricket');
  const [activeTeams, setActiveTeams] = useState({});

  const toggleTeam = (matchId) => {
    setActiveTeams((prev) => ({
      ...prev,
      [matchId]: prev[matchId] === 'B' ? 'A' : 'B'
    }));
  };

  return (
    <div className="scoreboard-container">
      <div className="header-section">
        <div className="header-top">
          <h1>Scoreboard</h1>
          <button className="back-button" onClick={onBack}>Back</button>
        </div>
        <div className="match-selector">
          {matchTypes.map((match) => (
            <button
              key={match}
              className={`match-btn ${selectedMatch === match ? 'active' : ''}`}
              onClick={() => setSelectedMatch(match)}
            >
              {match}
            </button>
          ))}
        </div>
      </div>

      <div className="cards-section">
        {roomData
          .filter((room) => room.matchType === selectedMatch)
          .map((room, index) => {
            const activeTeam = activeTeams[room.matchId] || 'A';

            return (
              <div className="score-card" key={room.matchId}>
                <h2>Room {room.roomNo}</h2>
                <div className="logo-banner">
                  <img src="/logo.png" alt="Logo" className="logo-img" />
                  <img src="/banner.png" alt="Banner" className="banner-img" />
                </div>

                <div className="score-details">
                  <div className="left-section">
                    <div>Match ID: {room.matchId}</div>
                    <div>Team Name: {room.teamName}</div>
                    <div>by {room.organizer}</div>
                    <div>at {room.ground}</div>
                    <div>Start at: {room.startTime}</div>
                    <div className="action-buttons">
                      <button>Contact</button>
                      <button
                        onClick={() => {
                          const url = `${window.location.origin}/room/${room.matchId}`;
                          navigator.clipboard.writeText(url);
                          alert('Link copied to clipboard!');
                        }}
                      >
                        Share
                      </button>
                      <button>View Players</button>
                    </div>
                  </div>

                  <div className="right-section">
                    <h3>Current Score</h3>
                    <div className="score-toggle">
                      <div className={`team-box ${activeTeam === 'A' ? 'active' : ''}`}>
                        <h4>Team A</h4>
                        {room.scores.teamA.map((item, idx) => (
                          <div key={idx} className="score-detail">{item}</div>
                        ))}
                      </div>
                      <div className={`team-box ${activeTeam === 'B' ? 'active' : ''}`}>
                        <h4>Team B</h4>
                        {room.scores.teamB.map((item, idx) => (
                          <div key={idx} className="score-detail">{item}</div>
                        ))}
                      </div>
                      <button
                        className="toggle-btn"
                        onClick={() => toggleTeam(room.matchId)}
                      >
                        {activeTeam === 'A' ? 'Team B' : 'Team A'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Scoreboard;
