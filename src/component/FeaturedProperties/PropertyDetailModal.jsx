import React from "react";
import { Bed, Bath, Car, Ruler, Phone, Mail } from "lucide-react";


const PropertyDetailModal = ({ property, loading, onClose, navigate }) => {
  if (!property) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="property-detail-modal"
        onClick={(e) => e.stopPropagation()}
        style={{ position: "relative" }}
      >
        {/* Close button */}
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {loading ? (
          <Loader />
        ) : (
          <>
            {/* Heading */}
            <h2 className="quick-view-heading">Quick View</h2>

            {/* Flex area: image + details */}
            <div className="modal-flex">
              {/* Image column */}
              <div className="modal-images">
                {property.images && property.images.length > 0 ? (
                  <img
                    src={property.images[0].url}
                    alt="Property"
                    className="modal-main-image"
                  />
                ) : (
                  <div className="no-image">No Image Available</div>
                )}
              </div>

              {/* Details column */}
              <div className="modal-details">
                <p className="price">
                  <span>₹{property.basicDetails?.monthlyRent || "NA"}</span>
                  <span className="price-month"> / month</span>
                </p>

                <h2 className="heading-property">
                  {property.basicDetails?.title || "NA"}
                </h2>

                <div className="location-info">
                  <span>
                    {property.location?.fullAddress ||
                      property.location?.city ||
                      "NA"}
                  </span>
                </div>

                {/* Property Info */}
                <div className="property-info">
                  <div className="info-item">
                    <div className="info-top">
                      <Bed size={22} />
                      <span className="info-value">
                        {property.basicDetails?.bhkType || "NA"}
                      </span>
                    </div>
                    <div className="info-label">Bedrooms</div>
                  </div>

                  <div className="info-item">
                    <div className="info-top">
                      <Ruler size={22} />
                      <span className="info-value">
                        {property.basicDetails?.area || "NA"}
                      </span>
                    </div>
                    <div className="info-label">Area (sq.ft)</div>
                  </div>

                  <div className="info-item">
                    <div className="info-top">
                      <Bath size={22} />
                      <span className="info-value">
                        {property.basicDetails?.bathrooms || "NA"}
                      </span>
                    </div>
                    <div className="info-label">Bathrooms</div>
                  </div>

                  <div className="info-item">
                    <div className="info-top">
                      <Car size={22} />
                      <span className="info-value">
                        {property.basicDetails?.garages || "NA"}
                      </span>
                    </div>
                    <div className="info-label">Garages</div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <b className="description-header">Description:</b>
                  <p className="description-para">
                    {property.description || "NA"}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="modal-actions">
                  {/* Row 1: Call + Mail */}
                  <div className="action-row">
                    <button
                      className="btn-call"
                      onClick={() =>
                        window.open(`tel:${property.contactInfo?.phone || ""}`)
                      }
                    >
                      <Phone size={18} /> Call Now
                    </button>

                    <button
                      className="btn-mail"
                      onClick={() =>
                        window.open(`mailto:${property.contactInfo?.email || ""}`)
                      }
                    >
                      <Mail size={18} /> Mail
                    </button>
                  </div>

                  {/* Row 2: View Full Details */}
                  <button
                    className="btn-details"
                    onClick={() => navigate(`/property/${property._id}`)}
                  >
                    View Full Details
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PropertyDetailModal;
