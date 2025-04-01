// TODO
"use client";
const Dialogue = ({ text, character, sprite, position }) => (
  <div>
    Dialogue
    <img src={sprite} alt={character} style={{ float: position }} />
    <p>
      <strong>{character}:</strong> {text}
    </p>
  </div>
);
export default Dialogue;
