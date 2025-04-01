
/*  
    This file contains the game scenes and their properties.
    Each scene can be a dialogue, scenario, or research event.

    Key: scene id, Value: scene object
    Each scene object contains:
    - type: The type of scene (dialogue, scenario, research)
    - props: The properties of the scene
      - text: The text to display in the scene
      - character: The character name speaking in the scene
      - background: The background image of the scene
      - sprite: The sprite image of the character
      - position: The position of the character (left, right, center)
      - choices: The choices available in the scenario
      - effect: The effect of the choice on the game state
      - nextState: The next state to transition to after making a choice
      - title: The title of the research event
      - content: The content of the research event (or path to the research file)
*/

export const gameScenes = {
    dialogue1: {
      type: "dialogue",
      props: {
        text: "Welcome to the game!",
        character: "CEO",
        sprite: "/sprites/ceo.png",
        position: "left",
      },
    },
    scenario3: {
      type: "scenario",
      props: {
        title: "Choose your strategy",
        choices: [
          { label: "Option A", effect: 10, nextState: "dialogue2" },
          { label: "Option B", effect: -5, nextState: "dialogue2" },
        ],
      },
    },
    research1: {
      type: "research",
      props: {
        title: "Research Insights",
        content: "Data and analysis supporting the scenario.",
      },
    },
  };
  