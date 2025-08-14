"use client";

import React, { useEffect, useState } from 'react'
import { Button } from './ui/MovingBorder'
import { workExperience } from '@/data'

const Experience = () => {
  const [gridStyle, setGridStyle] = useState({});
  const [imgWidth, setImgWidth] = useState("8rem"); // default lg size
  const [cardStyle, setCardStyle] = useState({});

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 640) {
        // sm
        setGridStyle({
          display: "grid",
          gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
          marginTop: "3rem",
          gap: "2.5rem",
        });
        setImgWidth("4rem"); // w-16
      } else {
        // default (lg)
        setGridStyle({
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          marginTop: "3rem",
          gap: "2.5rem",
        });
        setImgWidth("8rem"); // w-32
      }
    };

    if (window.innerWidth >= 1024) {
      setCardStyle({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "2.5rem", 
        gap: "0.5rem",
      });
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setCardStyle({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "1.25rem", 
        gap: "0.5rem",
      });
    } else {
      setCardStyle({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0.75rem",
        gap: "0.5rem",
      });
    }

    updateLayout(); 
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);
  return (
    <div className="py-20 w-full">
    <h1 className="heading">
      My <span className="text-purple">work experience</span>
    </h1>

    <div style={gridStyle}>
      {workExperience.map((card) => (
        <Button
          key={card.id}
          //   random duration will be fun , I think , may be not
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div style={cardStyle}>
            <img
              src={card.thumbnail}
              alt={card.thumbnail}
              style={{ width: imgWidth }}
            />
            <div
              style={{ marginInlineStart: "0px", }}
              className="card-text">
              <h1 style={{ textAlign: "start",fontWeight: 700, fontsize: "1.25rem", lineheight: "1.75rem" }}>
                {card.title}
              </h1>
              <p style={{textAlign: "start", margintop: "0.75rem",fontWeight: 600, color: "rgba(190, 193, 221, 1)",}}>
                {card.desc}
              </p>
            </div>
            <style jsx>{`
              @media (min-width: 1024px) {
                .card-text {
                  margin-inline-start: 1.25rem; /* lg:ms-5 */
                }
              }
            `}</style>
          </div>
        </Button>
      ))}
    </div>
  </div>
)
}

export default Experience