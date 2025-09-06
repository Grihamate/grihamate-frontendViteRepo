import "./style.css"
import personImg from "../../assets/personImg.jpg"

const NewsLetter = () => {
    return (
        <div className="news-container">
              {/* <div className="overlay-box"></div>
              <img src={personImg}/> */}

            <div class="newsletter-content">
                <h2>Subscribe Our Newsletter</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam</p>

                <form class="newsletter-form">
                    <input type="email" placeholder="Enter Your Mail" required />
                    <button type="submit">Subscribe Now</button>
                </form>
            </div>


           
            <img src={personImg} alt="Newsletter" />
          
        </div>
    )
}


export default NewsLetter;