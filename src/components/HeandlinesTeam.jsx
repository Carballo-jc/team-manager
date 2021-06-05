import React from "react";
import { useDispatch } from "react-redux";
import { deletePlayerHeandline } from "../actions/playerActions";


const Heandlines = ({heandlines}) => {
const dispatch = useDispatch()
  const deleteHeandline = (titular) => dispatch(deletePlayerHeandline(titular));

const delelePlayerHendline=(titular)=>{
     deleteHeandline(titular)
}
  return (
    <div>
      <h2>Titular</h2>
      <div className="section_heandlines">
        {
        heandlines.map((titular) => {
          const { name, image,  id } = titular;
          return (
          // <article>
          //     <Player 
          //   key={id}
          //   name={titular.name}
          //   image={titular.image}
          //   titular={titular}
          //   />
          //   <button onClick={() =>delelePlayerHendline(titular)}>X</button>
          // </article>
            <article key={id}>
              <div>
                <img src={image} alt="" />
                <button onClick={() =>delelePlayerHendline(titular)}>X</button>
              </div>
              <p>{name}</p>
            </article>
          );
        })
      }
     
      </div>
    </div>
  );
};

export default Heandlines;
