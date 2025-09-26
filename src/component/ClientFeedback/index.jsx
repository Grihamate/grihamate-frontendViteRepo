
import girlImg from "../../assets/girlImg.jpg";
import CommercialPropertyCard from "../common/CommercialPropertyCard";
import "./style.css";
import ankushImag from "../../assets/flatImg.jpg"

const ClientFeedback = () => {
  return (
    <div className="client-container">
      <div className="client-info">
        <div className="client-detail">
             <div className="client-text">
            <h1>What our clients say about us</h1>
            <h1>"</h1>
            <p>
              I was looking for a 3BHK apartment for my family. The search was super easy here and within 5 days, I found the perfect flat. The best part – I didn’t have to pay any brokerage.
            </p>
            <div className="mia-container">
              <h1>Ritu Sharma</h1>
              <p>Buyer</p>
            </div>
          </div>
          <img src={ankushImag} alt="Client" />
         
        </div>
      </div>

      <div className="commercial-container">
         <div className="commercial-heading-container">
             <h1 className="commercial-heading">
                Commercial Property
             </h1>
             <p className="commercial-para">Find the perfect commercial property that matches your vision and supports long-term growth.</p>
         </div>

         <div className="comr-cards-container">
               <CommercialPropertyCard/>
               <CommercialPropertyCard/>
               <CommercialPropertyCard/>
               <CommercialPropertyCard/>
                <CommercialPropertyCard/>
               <CommercialPropertyCard/>
               <CommercialPropertyCard/>
               
            
            
            

         </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
