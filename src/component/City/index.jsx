import "./style.css"
import uttarPradesh from "../../assets/uttarPradeshImg.jpg"
import Delhi from "../../assets/DelhiImg.jpg"
import Goa from "../../assets/GoaImg.jpg"
import Hariyana from "../../assets/hariyana.jpg"
import Mumbai from "../../assets/Mumbai.jpg"
import Pune from "../../assets/puneImg.jpg"


const City = () => {

const cities = [
  { 
    name: "New Delhi", 
    properties: 28, 
    img: Delhi,
  },
  { 
    name: "Mumbai", 
    properties: 12, 
     img: Mumbai,
  },
  { 
    name: "Haryana", 
    properties: 18, 
     img: Hariyana,
  },
  { 
    name: "Pune", 
    properties: 32, 
     img: Pune,
  },
  { 
    name: "Goa", 
    properties: 32, 
     img: Goa,
  },
  { 
    name: "Uttar Pradesh", 
    properties: 56, 
     img: uttarPradesh,
  },
];



  return (
    <div className="city-container">
       <div className="city-text">
          <h1>What city you live in ?</h1>
          <p>Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus. Porttitor fermentum eu urna eget</p>
       </div>
       <div className="city-photo">
              {cities.map((city, index) => (
          <div
            key={index}
            className={`city-card card-${index + 1}`}
            style={{ backgroundImage: `url(${city.img})` }}
          >
            <div className="overlay">
              <h3>{city.name}</h3>
              <p>{city.properties} properties</p>
            </div>
          </div>
        ))}
       </div>

    </div>
  )
}

export default City;