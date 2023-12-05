import React from "react";

function Sublinks({ data, story }) {
  return (
    <>
      {data ? (
        <section className="w-full z-20 top-11 left-0 absolute bg-transparent">
          <div className="w-4/5 py-8 flex flex-row bg-transCream mx-auto">
            <div className="w-3/4 flex p-4 flex-row flex-wrap">
              {data.map((sub) => {
                return (
                  <div className="h-auto m-4 w-56" key={sub.id}>
                    <h1 className="font-primary text-5xl">{sub.name}</h1>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col items-center justify-center">
              {story ? (
                <div className="w-2/4">
                  {story.map((item) => {
                    return (
                      <div
                        className="flex h-auto flex-col items-center justify-center"
                        key={item.id}
                      >
                        <img className="h-auto" src={item.image} alt="story" />
                        <h4 className="font-primary text-lg py-1 w-full">
                          {item.name}
                        </h4>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default Sublinks;
