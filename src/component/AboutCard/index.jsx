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

  // separate props for heading
  headingStyle = {},
  headingClassName = "",

  // separate props for subheading
  subheadingStyle = {},
  subheadingClassName = "",

  layout = "vertical",
}) {
  const wrapperClass = `card-wrapper ${layout === "horizontal" ? "card-horizontal" : ""} ${className}`;

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
      {image && (
        <div
          className="card-image"
          style={{ backgroundImage: `url(${image})`, ...imageStyle }}
          role="img"
          aria-label={alt}
        />
      )}

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
