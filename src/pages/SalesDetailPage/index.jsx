import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPropertyById } from "../../service/getPropertybyId";
import Loader from "../../component/common/Loader";
import Adityaimg from '../../assets/Adityaimg.jpeg';
import { Bed, Bath, Car, Ruler, Phone, Mail, Compass, Calendar, Sofa, Star , Home ,MapPin ,MessageCircle  } from "lucide-react";
import "./style.css";
import { GraduationCap, Stethoscope, Utensils, Theater } from "lucide-react";
import PropertyCard from "../../component/common/card";
import relatedImage from '../../assets/dummyrelatedimage.png'

const PropertyDetailPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const data = await getPropertyById(id, token);
        setProperty(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
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


  if (loading) return <Loader />;
  if (!property) return <div>No property found</div>;


  return (
    <div className="page-container">
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

          <div className="property-right-column">
            <div className="property-details-section">
              <button className="btn-sale">
                <span>For Sale</span>
              </button>
              <h1 className="property-title">{property.basicDetails?.title}</h1>
              <p className="property-location">{property.location?.fullAddress}</p>
              <p className="property-price">
                ₹{property.basicDetails?.monthlyRent} / month
              </p>

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
                    <h4>{property.basicDetails?.area} </h4>
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
            </div>

     <div className="advisor-card">
      <h3 className="advisor-heading">Advisor</h3>

      <div className="advisor-contact">
        {/* Call Advisor button */}
<div className="tooltip-wrapper">
  <a href="tel:7011769523" className="btn-advisor-call">
    <Phone size={18} className="icon-black" />
    Call Advisor
  </a>
  <span className="tooltip-text">Call Advisor at 701176952</span>
</div>

        {/* WhatsApp button */}
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

            <div className="schedule-visit-box">
              <h3 className="visit-title">Schedule a Visit</h3>
              <p className="visit-text">
                Book a free property visit at your convenience
              </p>
              <button className="btn-visit">Book Site Visit</button>
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

<div className="property-details">
  <h3 className="details-heading"> Details</h3>

  <div className="details-grid">
    {/* Row 1 */}
    <div className="detail-heading">Property Type</div>
    <div className="detail-value">Sale</div>
    <div className="detail-heading">Bathrooms</div>
    <div className="detail-value">4</div>

    {/* Row 2 */}
    <div className="detail-heading">Garages</div>
    <div className="detail-value">4</div>
    <div className="detail-heading">Wifi</div>
    <div className="detail-value">Yes</div>

    {/* Row 3 */}
    <div className="detail-heading">Furnishing</div>
    <div className="detail-value">Semi-Furnished</div>
    <div className="detail-heading">Property Age</div>
    <div className="detail-value">5 Years</div>
  </div>
</div>
{/* sales address */}
<div className="property-details">
  <h3 className="details-heading">Address</h3>

  <div className="details-grid">
    {/* Row 1 */}
    <div className="detail-heading">Address</div>
    <div className="detail-value">123 Main Street</div>
    <div className="detail-heading">City</div>
    <div className="detail-value">New York</div>

    {/* Row 2 */}
    <div className="detail-heading">State</div>
    <div className="detail-value">NY</div>
    <div className="detail-heading">Zip / Postal Code</div>
    <div className="detail-value">10001</div>

    {/* Row 3 */}
    <div className="detail-heading">Area</div>
    <div className="detail-value">Downtown</div>
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

      {/* First Floor */}
      <div className="floor-row">
        <div className="floor-label">First Floor</div>
        <div className="floor-item">
          <Home className="floor-icon" size={22} />
          <span>1200 sq.ft</span>
        </div>
        <div className="floor-item">
          <Bed className="floor-icon" size={22} />
          <span>800 sq.ft</span>
        </div>
        <div className="floor-item">
          <Bath className="floor-icon" size={22} />
          <span>300 sq.ft</span>
        </div>
      </div>

      {/* Second Floor */}
      <div className="floor-row">
        <div className="floor-label">Second Floor</div>
        <div className="floor-item">
          <Home className="floor-icon" size={22} />
          <span>1000 sq.ft</span>
        </div>
        <div className="floor-item">
          <Bed className="floor-icon" size={22} />
          <span>700 sq.ft</span>
        </div>
        <div className="floor-item">
          <Bath className="floor-icon" size={22} />
          <span>250 sq.ft</span>
        </div>
      </div>
    </div>




<div className="map-section">
  <h3 className="map-heading">Location and Map</h3>

  <div className="map-box">
    <MapPin size={48} className="map-icon" />
    <p className="map-subtitle">Interactive Map Integration</p>
    <p className="map-address">Bandra West, Mumbai - Premium Location</p>
  </div>
</div>


<div className="nearby-section">
  <h3 className="nearby-heading">What's Nearby</h3>

  {/* Education */}
  <div className="nearby-category">
    <div className="category-header">
      <GraduationCap className="category-icon" size={20} />
      <h4>Education</h4>
    </div>
    <div className="category-list">
      <div className="item">
        <span>St. Xavier’s School</span>
        <span>0.87 miles</span>
      </div>
      <div className="item">
        <span>National College</span>
        <span>1.2 miles</span>
      </div>
    </div>
  </div>

  {/* Health */}
  <div className="nearby-category">
    <div className="category-header">
      <Stethoscope className="category-icon" size={20} />
      <h4>Health</h4>
    </div>
    <div className="category-list">
      <div className="item">
        <span>City Hospital</span>
        <span>0.65 miles</span>
      </div>
      <div className="item">
        <span>Wellness Clinic</span>
        <span>1.1 miles</span>
      </div>
    </div>
  </div>

  {/* Food */}
  <div className="nearby-category">
    <div className="category-header">
      <Utensils className="category-icon" size={20} />
      <h4>Food</h4>
    </div>
    <div className="category-list">
      <div className="item">
        <span>Café Mocha</span>
        <span>0.3 miles</span>
      </div>
      <div className="item">
        <span>Blue Lagoon Restaurant</span>
        <span>0.9 miles</span>
      </div>
    </div>
  </div>

  {/* Culture */}
  <div className="nearby-category">
    <div className="category-header">
      <Theater className="category-icon" size={20} />
      <h4>Culture</h4>
    </div>
    <div className="category-list">
      <div className="item">
        <span>Art Museum</span>
        <span>1.4 miles</span>
      </div>
      <div className="item">
        <span>City Theater</span>
        <span>2.0 miles</span>
      </div>
    </div>
  </div>
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

export default PropertyDetailPage;
