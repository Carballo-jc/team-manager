import React from "react";

const Alternantes = ({ alternantes }) => {
  return (
    <section>
      <h2>Suplente</h2>
      <div className="section_alternantes">
        {alternantes.map((alternant, index) => {
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

export default Alternantes;
