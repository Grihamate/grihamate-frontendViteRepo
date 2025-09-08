// import React from "react";
// import "./style.css";

// export default function Card({
//   image,
//   alt = "card image",
//   heading,
//   subheading,
//   onClick,
//   className = "",
//   style = {},
//   imageStyle = {},

//   // separate props for heading
//   headingStyle = {},
//   headingClassName = "",

//   // separate props for subheading
//   subheadingStyle = {},
//   subheadingClassName = "",

//   layout = "vertical",

//   // NEW props
//   circle = true, // default: render image in a circle
//   circleColor = "#ECF3FE", // default circle background
// }) {
//   const wrapperClass = `card-wrapper ${
//     layout === "horizontal" ? "card-horizontal" : ""
//   } ${className}`;

//   return (
//     <article
//       className={wrapperClass}
//       style={style}
//       onClick={onClick}
//       role={onClick ? "button" : undefined}
//       tabIndex={onClick ? 0 : undefined}
//       onKeyDown={(e) => {
//         if (onClick && (e.key === "Enter" || e.key === " ")) onClick();
//       }}
//     >
//       {/* --- Image area --- */}
//       {image &&
//         (circle ? (
//           <div
//             className="card-circle"
//             style={{ backgroundColor: circleColor }}
//           >
//             <img
//               src={image}
//               alt={alt}
//               className="card-circle-image"
//               style={imageStyle}
//             />
//           </div>
//         ) : (
//           <div
//             className="card-image"
//             style={{ backgroundImage: `url(${image})`, ...imageStyle }}
//           />
//         ))}

//       {/* --- Body area --- */}
//       {(heading || subheading) && (
//         <div className="card-body">
//           {heading && (
//             <h3
//               className={`card-heading ${headingClassName}`}
//               style={headingStyle}
//             >
//               {heading}
//             </h3>
//           )}
//           {subheading && (
//             <p
//               className={`card-subheading ${subheadingClassName}`}
//               style={subheadingStyle}
//             >
//               {subheading}
//             </p>
//           )}
//         </div>
//       )}
//     </article>
//   );
// }
import React from "react";
import "./style.css";

export default function Card({
  image,
  alt = "card image",
  heading,
  subheading,
  onClick,
  className = "",
  style = {},
  imageStyle = {},
  imageClassName = "",
  imageContainerStyle = {},

  // heading
  headingStyle = {},
  headingClassName = "",

  // subheading
  subheadingStyle = {},
  subheadingClassName = "",

  layout = "vertical",

  // Circle mode (default true for icons)
  circle = true,
  circleColor = "#ECF3FE",
}) {
  const wrapperClass = `card-wrapper ${
    layout === "horizontal" ? "card-horizontal" : ""
  } ${className}`;

  return (
    <article
      className={wrapperClass}
      style={style}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) onClick();
      }}
    >
      {image &&
        (circle ? (
          <div
            className="card-circle"
            style={{ backgroundColor: circleColor, ...imageContainerStyle }}
          >
            <img
              src={image}
              alt={alt}
              className={`card-circle-image ${imageClassName}`}
              style={imageStyle}
            />
          </div>
        ) : (
          <img
            src={image}
            alt={alt}
            className={`card-rectangle-image ${imageClassName}`}
            style={imageStyle}
          />
        ))}

      {(heading || subheading) && (
        <div className="card-body">
          {heading && (
            <h3
              className={`card-heading ${headingClassName}`}
              style={headingStyle}
            >
              {heading}
            </h3>
          )}
          {subheading && (
            <p
              className={`card-subheading ${subheadingClassName}`}
              style={subheadingStyle}
            >
              {subheading}
            </p>
          )}
        </div>
      )}
    </article>
  );
}
