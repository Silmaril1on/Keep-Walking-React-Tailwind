import React, { useState } from "react";
import labels from "../../database/homeLabelsData";

function SectionTwo() {
  const labelData = labels.map((item) => item.whisky);
  const [whiskyLabel, setWhiskyLabel] = useState(0);
  const [color, setColor] = useState(undefined);

  const renderLabel = (index) => {
    const data = labels.map((item) => item);
    setWhiskyLabel(index);
    setColor(data[index].headline);
  };

  return (
    <div className="hidden w-full lg:flex justify-center items-center bg-cream">
      <div className="flex flex-row w-4/5">
        <div className="w-1/4 relative">
          <div className="flex flex-col absolute">
            <h6 className="font-secondary py-14">Welcome to Johnnie Walker</h6>
            {labels.map((label, index) => {
              return (
                <h1
                  onClick={() => renderLabel(index)}
                  key={label.id}
                  className="font-primary text-7xl py-1 cursor-pointer w-80"
                  style={label.headline === color ? { color: label.color } : {}}
                >
                  {label.headline}
                </h1>
              );
            })}
          </div>
        </div>
        <Labels data={labelData[whiskyLabel]} />
      </div>
    </div>
  );
}

function Labels({ data }) {
  return (
    <div className="w-full">
      <div className="">
        {data.map((item) => {
          const { id, name, image, video, info, button } = item;
          return (
            <div key={id} className="flex flex-row items-end">
              {image ? (
                <div className="w-3/5 ">
                  <img src={image} alt="label" />
                </div>
              ) : (
                <div className=" w-3/5 h-full">
                  <video autoPlay={true} loop={true} muted>
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              )}
              <div className="w-4/12 h-auto mb-5">
                <h1 className="font-primary text-3xl">{name}</h1>
                <p className="indent-14 italic text-sm px-1 py-5">{info}</p>
                <button className="font-primary px-1 flex flex-row">
                  {button}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SectionTwo;
