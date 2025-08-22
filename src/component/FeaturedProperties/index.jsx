import plusIcon from "../../assets/plusIcon.png"
import PropertyCard from "../../component/common/card";
import "./style.css";

const FeaturedProperties = () => {
    return (
        <div className="parent-div">
             <div className="property-section">
            <div className="section-header">
                <div className="detail-box">
                    <h5>Featured Properties</h5>
                    <p>Discover the best properties handpicked for you</p>
                </div>

                <button className="feature-btn">
                   <img src={plusIcon} alt="plus" /> 
                   <p>Post your Property</p>
                 </button>
            </div>

            <div className="cards-container">
                <PropertyCard/>
                <PropertyCard/>
                <PropertyCard/>
                <PropertyCard/>
                <PropertyCard/>
                <PropertyCard/>
                 <PropertyCard/>
                <PropertyCard/>
                

            </div>

            
        </div>

        </div>
    );
};

export default FeaturedProperties;
