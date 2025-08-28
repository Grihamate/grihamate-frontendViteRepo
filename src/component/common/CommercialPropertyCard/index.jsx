import homeImg  from "../../../assets/heroImg.jpg"
import bedroomImg from "../../../assets/bedrromIcon.png"
import bathroomImg from "../../../assets/bathroomIcon.png"
import areaIcon from "../../../assets/areaIcon.png"
import garageIcon from "../../../assets/garagesIcon.png"
import { useState ,useEffect } from "react"
import "./style.css"
import { getProperty } from "../../../service/getProperty"

const CommercialPropertyCard = () => {
      const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getProperty(); // call the API service
        console.log("API Response:", data); // check the result in console
        setProperties(data.allProperties || []); // save data to state
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      }
    };

    fetchProperties();
  }, []);

    return (
        <div className="com-card-box">
             <img src={homeImg}/>
             <div className="com-card-details">
                <div className="com-text">
                    <h1>
                        Luxury house in Las Vegas
                    </h1>
                    <h2>
                        $25000 
                    </h2>
                </div>
                <div className="com-icons-bar">
                    <div className="com-icon">
                        <img src={bedroomImg}/>
                        <p className="count">2</p>
                    </div>

                    <div className="com-icon">
                        <img src={bathroomImg}/>
                        <p className="count">2</p>
                    </div>

                    <div className="com-icon">
                        <img src={areaIcon}/>
                        <p className="count">2</p>
                    </div>

                    <div className="com-icon">
                        <img src={garageIcon}/>
                        <p className="count">2</p>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default CommercialPropertyCard;