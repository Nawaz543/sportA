import React, { useState } from "react";
import "./Room.css"; // Make sure this file exists

const gamesList = [
  "Cricket",
  "Football",
  "Badminton",
  "Chess",
  "Carrom",
  "Kabaddi",
  "Basketball",
];

// Dummy example data
const initialYourRooms = [
  {
    roomNo: "101",
    roomName: "Champions Arena",
    organizerName: "John Doe",
    organizerEmail: "john@example.com",
    games: {},
  },
  {
    roomNo: "102",
    roomName: "Legends League",
    organizerName: "Jane Smith",
    organizerEmail: "jane@example.com",
    games: {},
  },
];

const initialJoinedRooms = [
  {
    roomNo: "201",
    roomName: "Warriors Den",
    organizerName: "Mike Tyson",
    organizerEmail: "mike@example.com",
    games: {Cricket: {
        date: "2025-05-10",
        time: "14:30",
        location: 'ground A',
      },},
  },
  {
    roomNo: "202",
    roomName: "Battlefield Zone",
    organizerName: "Bruce Lee",
    organizerEmail: "bruce@example.com",
    games: {},
  },
];

const Room = ({onBack}) => {
  const [yourRooms, setYourRooms] = useState(initialYourRooms);
  const [joinedRooms, setJoinedRooms] = useState(initialJoinedRooms);
  const [tempGameData, setTempGameData] = useState({});


  const handleGameClick = (roomIndex, game) => {
    setTempGameData({ roomIndex, game, date: "", time: "", location: "" });
  };

  const handleTempChange = (field, value) => {
    setTempGameData({ ...tempGameData, [field]: value });
  };

  const handleSubmitGame = () => {
    const { roomIndex, game, date, time, location } = tempGameData;

    if (!date) {
      alert("Please select a date before submitting.");
      return;
    }

    const updatedRooms = [...yourRooms];
    updatedRooms[roomIndex].games[game] = { date, time, location };

    setYourRooms(updatedRooms);
    setTempGameData({});
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="room-page">
      {/* Top Bar */}
      <div className="top-bar">
        <h2>Rooms</h2>
        <button onClick={onBack} className="back-button">Back</button>
      </div>

      {/* Your Rooms */}
      <h3>Your Rooms</h3>
      {yourRooms.length === 0 ? (
        <p>No rooms created yet.</p>
      ) : (
        yourRooms.map((room, index) => (
          <div key={index} className="room-card">
            <p>Room No: {room.roomNo}</p>
            <p>Room Name: {room.roomName}</p>
            <p>Organizer Name: {room.organizerName}</p>
            <p>Organizer Email: {room.organizerEmail}</p>

            <div className="game-list">
              {gamesList.map((game, gameIndex) => (
                tempGameData.roomIndex === index && tempGameData.game === game ? (
                  <form
                    key={gameIndex}
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmitGame();
                    }}
                    className="game-form"
                  >
                    <input
                      type="date"
                      value={tempGameData.date}
                      onChange={(e) => handleTempChange("date", e.target.value)}
                    />
                    <input
                      type="time"
                      value={tempGameData.time}
                      onChange={(e) => handleTempChange("time", e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      value={tempGameData.location}
                      onChange={(e) => handleTempChange("location", e.target.value)}
                    />
                    <button type="submit" className="submit-button">Submit</button>
                  </form>
                ) : room.games[game] ? (
                  <div className="game-details" key={gameIndex}>
                    <p>
                      <strong>{game}</strong> - Date: {formatDate(room.games[game].date)}
                      {room.games[game].time && ` on ${room.games[game].time}`}
                      {room.games[game].location && ` at ${room.games[game].location}`}
                    </p>
                  </div>
                ) : (
                  <button key={gameIndex} onClick={() => handleGameClick(index, game)}>
                    {game}
                  </button>
                )
              ))}
            </div>

            <button className="edit-button">Edit Data</button>
          </div>
        ))
      )}

      {/* Joined Rooms */}
      <h3>Joined Rooms</h3>
      {joinedRooms.length === 0 ? (
        <p>No joined rooms yet.</p>
      ) : (
        joinedRooms.map((room, index) => (
          <div key={index} className="room-card">
            <p>Room No: {room.roomNo}</p>
            <p>Room Name: {room.roomName}</p>
            <p>Organizer Name: {room.organizerName}</p>
            <p>Organizer Email: {room.organizerEmail}</p>

            <div className="game-list">
              {gamesList.map((game, gameIndex) => (
                room.games[game] ? (
                  <div className="game-details" key={gameIndex}>
                    <p>
                      <strong>{game}</strong> - Date: {formatDate(room.games[game].date)}
                      {room.games[game].time && ` on ${room.games[game].time}`}
                      {room.games[game].location && ` at ${room.games[game].location}`}
                    </p>
                  </div>
                ) : null
              ))}
            </div>

            <button className="register-button">Register in Games</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Room;
