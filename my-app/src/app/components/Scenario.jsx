// components/Scenario.jsx
"use client";
const Scenario = ({ title, choices }, { onChoice }) => (
  <div>
    Scenario
    <h2>{title}</h2>
    {choices.map((choice, i) => (
      <button key={i} onClick={() => onChoice(choice)}>
        {choice.label}
      </button>
    ))}
  </div>
);
export default Scenario;
