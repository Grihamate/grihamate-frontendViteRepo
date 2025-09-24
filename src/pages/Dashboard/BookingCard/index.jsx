import React from "react";
import { MapIcon } from "lucide-react";
import "./style.css";

const MyBookings = ({ bookings }) => {
  if (!bookings || bookings.length === 0) {
    return <p>No bookings available.</p>;
  }

  return (
    <div className="mybookings-container">
      <h2 className="mybookings-heading">My Bookings</h2>
      <div className="bookings-list">
        {bookings.map((booking, index) => (
          <div key={index} className="booking-card">
            <h3 className="booking-title">{booking.title || "N/A"}</h3>
            <p className="booking-address">
              <MapIcon className="map-icon" /> {booking.address || "N/A"}
            </p>
            <p className="booking-datetime">
              {booking.date || "N/A"} | {booking.time || "N/A"}
            </p>
            <button className="booking-status">{booking.status || "N/A"}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
