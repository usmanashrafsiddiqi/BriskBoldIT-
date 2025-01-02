import React from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  
    const defaultImage = "/assets/background.jpg"; 

    return (
        <div
            style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "12px", 
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease", 
            }}
        >
            {/* Hover Effect */}
            <a
                href={largeImage || defaultImage}
                title={title}
                data-lightbox-gallery="gallery1"
                style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                }}
            >
                <div style={{ width: "100%", height: "100%", position: "relative" }}>
                    {/* Hover Text */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
                            color: "white",
                            fontSize: "1.25rem",
                            fontWeight: "600",
                            textAlign: "center",
                            padding: "1rem",
                        }}
                        className="group-hover:opacity-100 group"
                    >
                        <h4>{title}</h4>
                    </div>
                    {/* Image */}
                    <img
                        src={smallImage || defaultImage} 
                        alt={title}
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            transition: "transform 0.3s ease",
                            borderRadius: "12px", 
                        }}
                        className="group-hover:scale-105"
                    />
                </div>
            </a>
        </div>
    );
};
