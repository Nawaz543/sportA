import React, { lazy, Suspense } from 'react';

const UserPlus = lazy(() => import('lucide-react').then(m => ({ default: m.UserPlus })));
const Headset = lazy(() => import('lucide-react').then(m => ({ default: m.Headset })));
const Heart = lazy(() => import('lucide-react').then(m => ({ default: m.Heart })));
const Star = lazy(() => import('lucide-react').then(m => ({ default: m.Star })));
const Share2 = lazy(() => import('lucide-react').then(m => ({ default: m.Share2 })));
const ArrowLeft = lazy(() => import('lucide-react').then(m => ({ default: m.ArrowLeft })));
const Pencil = lazy(() => import('lucide-react').then(m => ({ default: m.Pencil })));
import "./Profile.css";

export default function Profile({ user, onBack }) {
  const isPicAvailable = Boolean(user?.photoURL);

  return (
    <div className="profile-overlay">
      <div className="profile-container">
        {/* Header */}
        <div className="profile-header">
          <button className="back-btn" onClick={onBack}>
          <Suspense fallback={<span style={{ width: 24, height: 24 }}></span>}>
            <ArrowLeft size={20} color="white" />
          </Suspense>
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
        <Suspense fallback={<span style={{ width: 24, height: 24 }}></span>}>
          <UserPlus size={40} color="#007bff" />
        </Suspense>
      )}
    </div>
    <button className="edit-btn" onClick={() => alert("Edit clicked!")}>
      Edit 
      <Suspense fallback={<span style={{ width: 24, height: 24 }}></span>}>
        <Pencil size={18}  /></Suspense>
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
          <Suspense fallback={<span style={{ width: 24, height: 24 }}></span>}>
            <Headset size={18} color="#007bff" /> </Suspense>Support Us
          </a>
          <a href="#follow">
          <Suspense fallback={<span style={{ width: 24, height: 24 }}></span>}>
            <Heart size={18} color="#ff4757" /> </Suspense> Follow Us
          </a>
          <a href="#rate">
          <Suspense fallback={<span style={{ width: 24, height: 24 }}></span>}>
            <Star size={18} color="#f1c40f" /> </Suspense> Rate Us
          </a>
          <a href="#share">
          <Suspense fallback={<span style={{ width: 24, height: 24 }}></span>}>
            <Share2 size={18} color="#10b981" /></Suspense> Share this App
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
