import React from "react";
import "./Profile.css";
import {
  UserPlus,
  Headset,
  Heart,
  Star,
  Share2,
  ArrowLeft,
  Pencil
} from "lucide-react";

export default function Profile({ user, onBack }) {
  const isPicAvailable = Boolean(user?.photoURL);

  return (
    <div className="profile-overlay">
      <div className="profile-container">
        {/* Header */}
        <div className="profile-header">
          <button className="back-btn" onClick={onBack}>
            <ArrowLeft size={20} color="white" />
          </button>
          <h2>Profile</h2>
        </div>

      {/* Picture & Info */}
<div className="profile-info">
  <div className="profile-pic-wrapper">
    <div className="profile-pic">
      {isPicAvailable ? (
        <img src={user.photoURL} alt="Profile" />
      ) : (
        <UserPlus size={40} color="#007bff" />
      )}
    </div>
    <button className="edit-btn" onClick={() => alert("Edit clicked!")}>
      Edit <Pencil size={18} />
    </button>
  </div>

  <div className="user-details">
    <p className="name">{user.name}</p>
    <p className="email">{user.email}</p>
    <p className="status-line">
      Profile: {user.profileComplete ? "✅ Complete" : "❌ Incomplete"}
    </p>
  </div>
</div>

<hr />

        {/* Main Links */}
        <div className="profile-links">
          <a href="#performance">My Performance</a>
          <a href="#rooms">Rooms</a>
        </div>

        <hr />

        {/* Bottom Action Links */}
        <div className="bottom-links">
          <a href="#support">
            <Headset size={18} color="#007bff" /> Support Us
          </a>
          <a href="#follow">
            <Heart size={18} color="#ff4757" /> Follow Us
          </a>
          <a href="#rate">
            <Star size={18} color="#f1c40f" /> Rate Us
          </a>
          <a href="#share">
            <Share2 size={18} color="#10b981" /> Share this App
          </a>
        </div>

        <hr />

        <div className="help-link">
          <a href="#help">Help</a>
        </div>
      </div>
    </div>
  );
}
