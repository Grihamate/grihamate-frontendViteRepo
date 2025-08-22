import "./style.css"
import stateImg from "../../assets/heroImg.jpg"

const City = () => {

const cities = [
  { 
    name: "New Delhi", 
    properties: 28, 
    img: stateImg,
  },
  { 
    name: "Mumbai", 
    properties: 12, 
     img: stateImg,
  },
  { 
    name: "Haryana", 
    properties: 18, 
     img: stateImg,
  },
  { 
    name: "Uttar Pradesh", 
    properties: 32, 
     img: stateImg,
  },
  { 
    name: "Goa", 
    properties: 32, 
     img: stateImg,
  },
  { 
    name: "UP", 
    properties: 56, 
     img: stateImg,
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