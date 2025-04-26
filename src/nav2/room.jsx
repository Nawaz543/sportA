import React, { useState } from "react";
import "./Room.css";

const gamesList = ["Cricket", "Football", "Badminton", "Chess", "Carrom", "Kabaddi", "Basketball"];

const Room = () => {
  const [yourRooms, setYourRooms] = useState([
    {
      roomNo: "001",
      roomName: "Champions Hub",
      organizerName: "John Doe",
      organizerEmail: "john@example.com",
      games: {}
    },
    {
      roomNo: "002",
      roomName: "Legends Arena",
      organizerName: "Alice Smith",
      organizerEmail: "alice@example.com",
      games: {}
    }
  ]);

  const [joinedRooms, setJoinedRooms] = useState([
    {
      roomNo: "101",
      roomName: "Warriors Field",
      organizerName: "Chris Evans",
      organizerEmail: "chris@example.com",
      games: {}
    },
    {
      roomNo: "102",
      roomName: "Victory Ground",
      organizerName: "Emma Johnson",
      organizerEmail: "emma@example.com",
      games: {}
    }
  ]);

  const handleGameClick = (roomIndex, game) => {
    const updatedRooms = [...yourRooms];
    if (!updatedRooms[roomIndex].games[game]) {
      updatedRooms[roomIndex].games[game] = { date: "", time: "", location: "" };
    }
    setYourRooms(updatedRooms);
  };

  const handleGameChange = (roomIndex, game, field, value) => {
    const updatedRooms = [...yourRooms];
    updatedRooms[roomIndex].games[game][field] = value;
    setYourRooms(updatedRooms);
  };

  return (
    <div className="room-container">
      <div className="room-header">
        <h2>Rooms</h2>
        <button className="back-button">Back</button>
      </div>

      <h3>Your Room</h3>
      {yourRooms.length > 0 ? yourRooms.map((room, index) => (
        <div className="room-card" key={index}>
          <p><strong>Room No:</strong> {room.roomNo}</p>
          <p><strong>Room Name:</strong> {room.roomName}</p>
          <p><strong>Organizer Name:</strong> {room.organizerName}</p>
          <p><strong>Organizer Email:</strong> {room.organizerEmail}</p>

          <div className="games-section">
            {gamesList.map((game, gameIndex) => (
              <div key={gameIndex} className="game-item">
                {room.games[game] && room.games[game].date ? (
                  <div className="game-details">
                    <p><strong>{game}</strong> - {room.games[game].date}, {room.games[game].time}, {room.games[game].location}</p>
                  </div>
                ) : (
                  <button onClick={() => handleGameClick(index, game)}>{game}</button>
                )}

                {room.games[game] && !room.games[game].date && (
                  <div className="input-fields">
                    <input
                      type="date"
                      placeholder="Date"
                      onChange={(e) => handleGameChange(index, game, "date", e.target.value)}
                    />
                    <input
                      type="time"
                      placeholder="Time"
                      onChange={(e) => handleGameChange(index, game, "time", e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      onChange={(e) => handleGameChange(index, game, "location", e.target.value)}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="edit-button">Edit Data</button>
        </div>
      )) : <p>No rooms created yet.</p>}

      <h3>Joined Room</h3>
      {joinedRooms.length > 0 ? joinedRooms.map((room, index) => (
        <div className="room-card" key={index}>
          <p><strong>Room No:</strong> {room.roomNo}</p>
          <p><strong>Room Name:</strong> {room.roomName}</p>
          <p><strong>Organizer Name:</strong> {room.organizerName}</p>
          <p><strong>Organizer Email:</strong> {room.organizerEmail}</p>

          <div className="games-section">
            {gamesList.map((game, gameIndex) => (
              <div key={gameIndex} className="game-item">
                {room.games[game] && room.games[game].date ? (
                  <div className="game-details">
                    <p><strong>{game}</strong> - {room.games[game].date}, {room.games[game].time}, {room.games[game].location}</p>
                  </div>
                ) : (
                  <p><strong>{game}</strong> - Not registered</p>
                )}
              </div>
            ))}
          </div>

          <button className="register-button">Register in Games</button>
        </div>
      )) : <p>No rooms joined yet.</p>}
    </div>
  );
};

export default Room;
