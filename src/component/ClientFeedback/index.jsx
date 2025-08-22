
import girlImg from "../../assets/girlImg.jpg";
import CommercialPropertyCard from "../common/CommercialPropertyCard";
import "./style.css";

const ClientFeedback = () => {
  return (
    <div className="client-container">
      <div className="client-info">
        <div className="client-detail">
             <div className="client-text">
            <h1>What our clients say about us</h1>
            <h1>"</h1>
            <p>
              Arcu laoreet malesuada nunc eget. Fermentum ut dui etiam aliquam
              habitant elit euismod erat praesent. Tincidunt semper interdum
              fames cras.
            </p>
            <div className="mia-container">
              <h1>Miya More</h1>
              <p>Buyer</p>
            </div>
          </div>
          <img src={girlImg} alt="Client" />
         
        </div>
      </div>

      <div className="commercial-container">
         <div className="commercial-heading-container">
             <h1 className="commercial-heading">
                Commercial Property
             </h1>
             <p className="commercial-para">Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus</p>
         </div>

         <div className="comr-cards-container">
               <CommercialPropertyCard/>
               <CommercialPropertyCard/>
               <CommercialPropertyCard/>
               <CommercialPropertyCard/>
                <CommercialPropertyCard/>
               <CommercialPropertyCard/>
               <CommercialPropertyCard/>
               <CommercialPropertyCard/>
            
             <CommercialPropertyCard/>
               <CommercialPropertyCard/>
               <CommercialPropertyCard/>
               <CommercialPropertyCard/>
             <CommercialPropertyCard/>
               <CommercialPropertyCard/>
               <CommercialPropertyCard/>
               <CommercialPropertyCard/>
                <CommercialPropertyCard/>
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
