// import React from 'react'
// import './style.css'
// import CustomCard from './CustomCard'
// import projectmanagement from '../../assets/projectmanagement.png'
// import team from '../../assets/team.png'
// import renting from '../../assets/renting.png'
// import verified from '../../assets/verified.png'

// function AboutPreference() {
//   return (
//     <div class='container-main'>
//         <h2 class='header1'>Why Choose Grihamate ?</h2>
//         <p class='para1'>Experience the difference with our comprehensive real estate solutions designed to exceed your expectations at every step.

// </p>
//     <div style={{ display: "flex", gap: "20px" ,marginBottom:"82px" }}>
//       <CustomCard
//         image={projectmanagement}
//         heading="Property Management"
//         description="Comprehensive property management solutions including maintenance, tenant screening, and rent collection.

// "
//         button="Find a rent"
//       />
//       <CustomCard
//         image={team}
//         heading="Tennant Support"
//         description="24/7 tenant support services ensuring smooth communication and quick resolution of concerns.

// "
//         button="Find a rent"
//       />
//          <CustomCard
//         image={renting}
//     heading="Hassle-Free Renting"
//         description="Streamlined rental processes with digital documentation and transparent agreement procedures.
// ."
//         button="Find a rent"
//       />
//          <CustomCard
//         image={verified}
//         heading="Verified Listings"
//         description="All Properties undergo rigorous verification ensuring authencity and legal compliance."
//         button="Find a rent"
//       />
//     </div>


//     </div>
//   )
// }

// export default AboutPreference
import React from 'react'
import './style.css'
import CustomCard from './CustomCard'
import projectmanagement from '../../assets/projectmanagement.png'
import team from '../../assets/team.png'
import renting from '../../assets/renting.png'
import verified from '../../assets/verified.png'

function AboutPreference() {
  return (
    <section className="preference-section">
      <div className="container-preference">
        <h2 className="header1">Why Choose Grihamate?</h2>
        <p className="para1">
          Experience the difference with our comprehensive real estate solutions
          designed to exceed your expectations at every step.
        </p>

        <div className="preference-cards">
          <CustomCard
            image={projectmanagement}
            heading="Property Management"
            description="Comprehensive property management solutions including maintenance, tenant screening, and rent collection."
            button="Find a rent"
          />
          <CustomCard
            image={team}
            heading="Tenant Support"
            description="24/7 tenant support services ensuring smooth communication and quick resolution of concerns."
            button="Find a rent"
          />
          <CustomCard
            image={renting}
            heading="Hassle-Free Renting"
            description="Streamlined rental processes with digital documentation and transparent agreement procedures."
            button="Find a rent"
          />
          <CustomCard
            image={verified}
            heading="Verified Listings"
            description="All properties undergo rigorous verification ensuring authenticity and legal compliance."
            button="Find a rent"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutPreference
