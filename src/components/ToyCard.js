import React from "react";

function ToyCard({setToys, eachToy, deleteToy, handleLikePress }) {

  function deleteItem(){
    let toyId = eachToy.id
    fetch(`http://localhost:3001/toys/${toyId}`,{
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then(() => {
      deleteToy(eachToy)})
  }
  
  function updateLikes() {
    const updatedToy = {
      likes: eachToy.likes + 1,
    };
    const id = eachToy.id;
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((resp) => resp.json())
      .then(newObj => handleLikePress(newObj));
  }

  return (
    <div className="card">
      <h2>{eachToy.name}</h2>
      <img
        src={eachToy.image}
        alt={eachToy.name}
        className="toy-avatar"
      />
      <p>{eachToy.likes} Likes </p>
      <button className="like-btn" onClick={updateLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={deleteItem}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
