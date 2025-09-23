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
import { bookSiteVisit } from "../../service/siteVisit";
import SuccessModal from "../../component/sucessModal/SuccessfulModal";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

   const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");


    console.log("yeh data g -->",property)

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

          <div className="property-right-column">
            <div className="property-details-section">
              <button   
                className={`btn-sale ${ property.listingType === "For Rent" ? "rent-btn" : "sale-btn"}`}
              >
                <span>{property.listingType}</span>
              </button>
              <h1 className="property-title">{property.basicDetails?.title}</h1>
              <p className="property-location">{property.location?.fullAddress}</p>
              <p className="property-price">
                ₹{property.basicDetails?.monthlyRent} / month
              </p>
 
<p className="property-extra">
  <span className="label">Security Deposit:</span>
  <span className="value">₹{property.basicDetails?.securityDeposit || 0}</span>
</p>

<p className="property-extra">
  <span className="label">Maintenance Charges:</span>
  <span className="value">₹{property.basicDetails?.maintenanceCharges || 0}</span>
</p>

<p className="property-extra">
  <span className="label">Welcome Charges:</span>
  <span className="value">₹100000</span>
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
              <button className="btn-visit" onClick={handleBookVisit} >Book Site Visit</button>
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
  





<div className="map-section">
  <h3 className="map-heading">Location and Map</h3>

  <div className="map-box">
    <MapPin size={48} className="map-icon" />
    <p className="map-subtitle">Interactive Map Integration</p>
    <p className="map-address">Bandra West, Mumbai - Premium Location</p>
  </div>
</div>


{/* {property.whatsNearby && (
   <div className="nearby-section">
  <h3 className="nearby-heading">What's Nearby</h3>



  {property?.whatsNearby?.education.length > 0 && (
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


  {property?.whatsNearby?.food?.length > 0 && (
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




 {property.whatsNearby?.culture?.length > 0 && (
  <div className="nearby-category">
    <div className="category-header">
      <Theater className="category-icon" size={20} />
      <h4>Culture</h4>
    </div>
    <div className="category-list">
      {property.whatsNearby.culture.map((item) => (
          <div className="item"  key={item?._id}>
            <span>{item?.name}</span>
            <span>{item?.distance} km</span>
          </div>
      ))
      }

    </div>
  </div>
 )}

 
</div>

)

} */}


{property.whatsNearby &&
  (
    property.whatsNearby.education.length > 0 ||
    property.whatsNearby.health.length > 0 ||
    property.whatsNearby.food.length > 0 ||
    property.whatsNearby.culture.length > 0
  ) && (
    <div className="nearby-section">
      <h3 className="nearby-heading">What's Nearby</h3>

      {/* Education */}
      {property.whatsNearby.education.length > 0 && (
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
      {property.whatsNearby.health.length > 0 && (
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
      {property.whatsNearby.food.length > 0 && (
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

      {/* Culture */}
      {property.whatsNearby.culture.length > 0 && (
        <div className="nearby-category">
          <div className="category-header">
            <Theater className="category-icon" size={20} />
            <h4>Culture</h4>
          </div>
          <div className="category-list">
            {property.whatsNearby.culture.map((item) => (
              <div className="item" key={item._id}>
                <span>{item.name}</span>
                <span>{item.distance} km</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}




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
