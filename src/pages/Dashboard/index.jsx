import React, { useEffect, useState } from "react";
import MyBookings from "./BookingCard";
import UserProfile from "./UserProfile";

import MyProperties from "./OrderDetails";
import { getUserProfile } from "../../service/dashboard";
import "./style.css";

function Dashboard() {
  const [userData, setUserData] = useState(null);

  const bookingsData = [
    { title: "Modern Luxury Home", address: "123 Palm Street, New York", date: "25 Sep 2025", time: "10:00 AM", status: "Upcoming" },
    { title: "Cozy Apartment", address: "456 Green Ave, California", date: "28 Sep 2025", time: "3:00 PM", status: "Upcoming" },
    { title: "Beachside Villa", address: "789 Ocean Drive, Miami", date: "30 Sep 2025", time: "6:30 PM", status: "Upcoming" }
  ];

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      try {
        const data = await getUserProfile(token);

        console.log("Full API Response:", data); // ✅ full response
        setUserData(data); // store full API data
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="dashboard-container">
      {/* pass only the `user` part */}
      <UserProfile user={userData ? userData.user : null} />

      <div className="my-div">

        <MyProperties
  myProperties={userData && userData.user ? userData.user.my_properties : []}
  mySellProperties={userData && userData.user ? userData.user.my_sell_properties : []}
/>

      </div>

  <MyBookings bookings={userData && userData.user ? userData.user.booking_history : []} />

    </div>
  );
}

export default Dashboard;
