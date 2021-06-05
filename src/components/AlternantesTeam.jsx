import React from "react";
import { useDispatch } from "react-redux";
import { deletePlayerAlternate } from "../actions/playerActions";

const AlternantesTeam = ({ alternates }) => {
  const dispatch = useDispatch();
  const borrar = (alternant) => dispatch(deletePlayerAlternate(alternant));
  const deleteAlternate = (alternant) => {
    borrar(alternant);
  };
  return (
    <div>
      <h2>Suplente</h2>
      <div className="section_alternantes">
        {alternates.map((alternant) => {
          const { name, image, id } = alternant;
          return (
            <article key={id} >
              <div >
                <img src={image} alt={name}/>
                <button onClick={()=>deleteAlternate(alternant)}>X</button>
              </div>
              <p>{name}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default AlternantesTeam;
