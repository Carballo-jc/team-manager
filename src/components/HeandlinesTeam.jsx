import React from "react";

const Heandlines = ({ heandlines }) => {
  return (
    <section>
      <h2>Suplente</h2>
      <div className="section_heandlines">
        {heandlines.map((alternant, index) => {
          const { name, image } = alternant;
          return (
            <article key={index}>
              <div>
                <img src={image} alt="" />
                <button>X</button>
              </div>
              <p>{name}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Heandlines;
