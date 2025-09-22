import React, { useEffect, useState } from "react";



import Adityaimg from '../../../assets/Adityaimg.jpeg';
import { Bed, Bath, Car, Ruler, Phone, Mail, Compass, Calendar, Sofa, Star , Home ,MapPin ,MessageCircle  } from "lucide-react";
import "./style.css";
import { GraduationCap, Stethoscope, Utensils, Theater ,Plane } from "lucide-react";
import PropertyCard from "../../../component/common/card";
import relatedImage from '../../../assets/dummyrelatedimage.png'
import { useParams } from "react-router-dom";
import { getSalePropertyById } from "../../../service/getSalePropertyById";
import { bookSiteVisit } from "../../../service/siteVisit";
import { getToken } from "../../../utils/authUtils";
import { sendContactMessage } from "../../../service/contactService";
import SuccessModal from "../../../component/sucessModal/SuccessfulModal";

const SaleDetailPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

 const handleBookVisit = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setModalMessage("No token found. Please login first.");
        setIsModalOpen(true);
        return;
      }

      const result = await bookSiteVisit(token);

      if (result.success) {
        setModalMessage(result.message); // show API success message
      } else {
        setModalMessage("Failed to book site visit");
      }

      setIsModalOpen(true); // open modal
    } catch (err) {
      setModalMessage("Error booking visit. Please try again.");
      setIsModalOpen(true);
    }
  };
//   get in touch api integration
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });


  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await sendContactMessage(formData);
      alert(result.message); // show success message
      setFormData({ fullname: "", email: "", phone: "", message: "" }); // reset form
    } catch (err) {
      alert(err.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  // 👇 fetch token from localStorage (if you saved it during login)
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const data = await getSalePropertyById(id, token);
        console.log("Fetched Sale Property:", data); // 👈 log API response

        setProperty(data.Saleproperty);
      } catch (err) {
        console.error("Error fetching property:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id, token]);

  const dummyProperties = [
  {
    id: 1,
    basicDetails: {
      title: "Modern 2BHK Apartment",
      bhkType: "2 BHK",
      bathrooms: 2,
      area: 1200,
      monthlyRent: 35000,
    },
    location: {
      fullAddress: "Bandra West",
      city: "Mumbai",
    },
    description: "Spacious flat with modern interiors, close to the metro.",
    images: [],
  },
  {
    id: 2,
    basicDetails: {
      title: "Luxury 3BHK Villa",
      bhkType: "3 BHK",
      bathrooms: 3,
      area: 2400,
      monthlyRent: 75000,
    },
    location: {
      fullAddress: "Juhu Beach Road",
      city: "Mumbai",
    },
    description: "Beachfront villa with private parking and terrace garden.",
    images: [],
  },
  {
    id: 3,
    basicDetails: {
      title: "Affordable 1BHK Studio",
      bhkType: "1 BHK",
      bathrooms: 1,
      area: 650,
      monthlyRent: 18000,
    },
    location: {
      fullAddress: "Andheri East",
      city: "Mumbai",
    },
    description: "Budget-friendly studio apartment with easy connectivity.",
    images: [],
  },
];
 const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");


  if (loading) return ;
  if (!property) return <div>No property found</div>;



  return (
    <div className="page-container">
        <SuccessModal
  isOpen={isModalOpen}
  message={modalMessage}
  onClose={() => setIsModalOpen(false)}
/>
      <div className="page-inner property-detail-page">
        <div className="property-flex">
           
          <div className="property-images-section">
            {property.images && property.images.length > 0 ? (
              <>
                <img
                  src={property.images[0].url}
                  alt={property.images[0].name}
                  className="main-image"
                />
                <div className="thumbnail-row">
                  {property.images.slice(1).map((img) => (
                    <img
                      key={img._id}
                      src={img.url}
                      alt={img.name}
                      className="thumbnail-image"
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="no-image">No Images Available</div>
            )}
          </div>

       <div className="right-sticky-parent">
  <div className="property-right-column">
    
    <div className="property-details-section">
        <button   
          className={`btn-sale ${ property.listingType === "For Rent" ? "rent-btn" : "sale-btn"}`}
        >
        <span>{property.listingType}</span>
        </button>

      <h1 className="property-title">{property.basicDetails?.title}</h1>
      <p className="property-location">{property.location?.fullAddress}</p>

      <div className="property-stats">
        <div className="stat-item">
          <div className="stat-top">
            <Bed size={16} />
            <h4>{property.basicDetails?.bhkType}</h4>
          </div>
          <p>Bedrooms</p>
        </div>

        <div className="stat-item">
          <div className="stat-top">
            <Bath size={16} />
            <h4>{property.basicDetails?.bathrooms}</h4>
          </div>
          <p>Bathrooms</p>
        </div>

        <div className="stat-item">
          <div className="stat-top">
            <Ruler size={16} />
            <h4>{property.basicDetails?.area}</h4>
          </div>
          <p>Total Area</p>
        </div>

        <div className="stat-item">
          <div className="stat-top">
            <Car size={16} />
            <h4>{property.basicDetails?.garages || 0}</h4>
          </div>
          <p>Garages</p>
        </div>
      </div>

      {/* Call Advisor button */}
      <div className="advisor-contact">
        <div className="tooltip-wrapper">
          <a href="tel:7011769523" className="btn-advisor-call">
            <Phone size={18} className="icon-black" />
            Contact Now
          </a>
          <span className="tooltip-text">Call Advisor at 7011769523</span>
        </div>
      </div>

      <div className="tooltip-wrapper">
        <a
          href="https://wa.me/7011769523"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-advisor-whatsapp"
        >
          <MessageCircle size={18} className="icon-white" />
          WhatsApp
        </a>
        <span className="tooltip-text">Chat on WhatsApp: 7011769523</span>
      </div>
    </div>

    {/* Advisor Card */}
        <div className="advisor-card">
      <h3 className="advisor-heading">Advisor</h3>

      <div className="advisor-form">
        <h4 className="form-title">Request Info</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-send" disabled={loading}>
            {loading ? "Sending..." : "Send Email"}
          </button>
        </form>
      </div>

      <div className="advisor-contact">
        <div className="tooltip-wrapper">
          <a href="tel:7011769523" className="btn-advisor-call">
            <Phone size={18} className="icon-black" />
            Call Advisor
          </a>
          <span className="tooltip-text">Call Advisor at 7011769523</span>
        </div>

        <div className="tooltip-wrapper">
          <a
            href="https://wa.me/7011769523"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-advisor-whatsapp"
          >
            <MessageCircle size={18} className="icon-white" />
            WhatsApp
          </a>
          <span className="tooltip-text">Chat on WhatsApp: 7011769523</span>
        </div>
      </div>
    </div>

    {/* Schedule Visit */}
    <div className="schedule-visit-box">
      <h3 className="visit-title">Schedule a Visit</h3>
      <p className="visit-text">
        Book a free property visit at your convenience
      </p>
      <button className="btn-visit " onClick={handleBookVisit}>Book Site Visit</button>
    </div>
  </div>
</div>

        </div>


            <div className="property-description">
          <h3 className="desc-heading">Description</h3>
          <p className="desc-text">
            {property.description || "No description available"}
          </p>

          <div className="property-facts">
            <div className="fact-card">
              <Ruler size={40} />
              <div>
                <h4>Total Area</h4>
                <p>{property.basicDetails?.area} sq.ft</p>
              </div>
            </div>

            <div className="fact-card">
              <Compass size={40} />
              <div>
                <h4>Direction</h4>
                <p>{property.basicDetails?.propertyFacing}</p>
              </div>
            </div>

            <div className="fact-card">
              <Calendar size={40} />
              <div>
                <h4>Property Age</h4>
                <p>{property.basicDetails?.propertyAge}</p>
              </div>
            </div>

            <div className="fact-card">
              <Sofa size={40} />
              <div>
                <h4>Furnishing</h4>
                <p>{property.basicDetails?.furnishingStatus}</p>
              </div>
            </div>
          </div>
        </div>
        {/* sales page details */}
<div className="property-details sale-property">
  <h3 className="details-heading">Details</h3>

  <div className="details-grid">
    {/* Property Size */}
    <div className="detail-heading">Property Size</div>
    <div className="detail-value">
      {property.basicDetails?.area || "NA"} sq.ft
    </div>

    {/* Bathrooms */}
    <div className="detail-heading">Bathrooms</div>
    <div className="detail-value">
      {property.basicDetails?.bathrooms || "NA"}
    </div>

    {/* Garages */}
    <div className="detail-heading">Garages</div>
    <div className="detail-value">
      {property.basicDetails?.garages || "NA"}
    </div>

    {/* Property Type */}
    <div className="detail-heading">Property Type</div>
    <div className="detail-value">
      {property.propertyType || "NA"}
    </div>

    {/* Furnishing Status */}
    <div className="detail-heading">Furnishing</div>
    <div className="detail-value">
      {property.basicDetails?.furnishingStatus || "NA"}
    </div>

    {/* Property Age (Year Built) */}
    <div className="detail-heading">Year Built</div>
    <div className="detail-value">
      {property.basicDetails?.propertyAge || "NA"}
    </div>



    {/* Bedrooms */}
    <div className="detail-heading">Bedrooms</div>
    <div className="detail-value">
      {property.basicDetails?.bhkType || "NA"}
    </div>

    {/* Additional Rooms (if you have custom field later) */}
    <div className="detail-heading">Additional Rooms</div>
    <div className="detail-value">
      {property.basicDetails?.additionalRooms || "NA"}
    </div>

    {/* Pool Size (if provided) */}
    <div className="detail-heading">Pool Size</div>
    <div className="detail-value">
      {property.basicDetails?.poolSize || "NA"}
    </div>

    {/* Pool Equipment (if provided) */}
    <div className="detail-heading">Pool Equipment</div>
    <div className="detail-value">
      {property.basicDetails?.poolEquipment || "NA"}
    </div>

    {/* Pool Status (if provided) */}
    <div className="detail-heading">Pool Status</div>
    <div className="detail-value">
      {property.basicDetails?.poolStatus || "NA"}
    </div>
  </div>
</div>

{/* sales address */}
<div className="property-details">
  <h3 className="details-heading">Address</h3>

  <div className="details-grid-address">
    {/* Row 1 */}
    <div className="detail-heading">Address</div>
    <div className="detail-value">{property.location?.fullAddress}</div>

    <div className="detail-heading">City</div>
    <div className="detail-value">{property.location?.city}</div>

    {/* Row 2 */}
    <div className="detail-heading">State</div>
    <div className="detail-value">{property.location?.state}</div>

    <div className="detail-heading">Zip / Postal Code</div>
    <div className="detail-value">{property.location?.pincode}</div>

    {/* Row 3 */}
    <div className="detail-heading">Area</div>
    <div className="detail-value">{property.location?.locality}</div>
  </div>
</div>




        <div className="property-amenities">
          <h3>Amenities & Facilities</h3>
          <div className="amenities-grid">
            {property.basicDetails?.amenities?.map((amenity, index) => (
              <div key={index} className="amenity-item">
                <span className="amenity-icon">✓</span>
                <span className="amenity-text">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
        {/* floor plans for sales page */}
  
 <div className="property-details">
  <h3 className="details-heading">Floor Plans</h3>

  {property.floorPlan ? (
    <div className="floor-row">
        <div>First Floor</div>
      {/* Dining Area */}
      {property.floorPlan.diningArea && (
        <div className="floor-item">
          <Home className="floor-icon" size={22} />
          <span> {property.floorPlan.diningArea} sq.ft</span>
        </div>
      )}

      {/* Bedroom Area */}
      {property.floorPlan.bedroomArea && (
        <div className="floor-item">
          <Bed className="floor-icon" size={22} />
          <span>{property.floorPlan.bedroomArea} sq.ft</span>
        </div>
      )}

      {/* Bathroom Area */}
      {property.floorPlan.bathroomArea && (
        <div className="floor-item">
          <Bath className="floor-icon" size={22} />
          <span> {property.floorPlan.bathroomArea} sq.ft</span>
        </div>
      )}
    </div>
  ) : (
    <p>No floor plan available</p>
  )}
</div>





<div className="map-section">
  <h3 className="map-heading">Virtual Tour</h3>

  <div className="map-box">
   

    {property.virtualTour ? (
      <video
        width="100%"
        height="500"
        className="video-display"
        controls
        src={property.virtualTour}
      >
        Your browser does not support the video tag.
      </video>
    ) : (
      <p className="map-address">Virtual tour not available</p>
    )}
  </div>
</div>



<div className="nearby-section">
  <h3 className="nearby-heading">What's Nearby</h3>

  {/* Education */}
  {property.whatsNearby?.education?.length > 0 && (
    <div className="nearby-category">
      <div className="category-header">
        <GraduationCap className="category-icon" size={20} />
        <h4>Education</h4>
      </div>
      <div className="category-list">
        {property.whatsNearby.education.map((item) => (
          <div className="item" key={item._id}>
            <span>{item.name}</span>
            <span>{item.distance} km</span>
          </div>
        ))}
      </div>
    </div>
  )}

  {/* Health */}
  {property.whatsNearby?.health?.length > 0 && (
    <div className="nearby-category">
      <div className="category-header">
        <Stethoscope className="category-icon" size={20} />
        <h4>Health</h4>
      </div>
      <div className="category-list">
        {property.whatsNearby.health.map((item) => (
          <div className="item" key={item._id}>
            <span>{item.name}</span>
            <span>{item.distance} km</span>
          </div>
        ))}
      </div>
    </div>
  )}

  {/* Food */}
  {property.whatsNearby?.food?.length > 0 && (
    <div className="nearby-category">
      <div className="category-header">
        <Utensils className="category-icon" size={20} />
        <h4>Food</h4>
      </div>
      <div className="category-list">
        {property.whatsNearby.food.map((item) => (
          <div className="item" key={item._id}>
            <span>{item.name}</span>
            <span>{item.distance} km</span>
          </div>
        ))}
      </div>
    </div>
  )}

  {/* Travel */}
  {property.whatsNearby?.travel?.length > 0 && (
    <div className="nearby-category">
      <div className="category-header">
        <Plane className="category-icon" size={20} />
        <h4>Travel</h4>
      </div>
      <div className="category-list">
        {property.whatsNearby.travel.map((item) => (
          <div className="item" key={item._id}>
            <span>{item.name}</span>
            <span>{item.distance} km</span>
          </div>
        ))}
      </div>
    </div>
  )}
</div>




        <div className="related-section">
      <h2 className="related-heading">Related Listings</h2>
      <div className="related-listings">
        {dummyProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
    

      </div>
    </div>
  );
};

export default SaleDetailPage;
