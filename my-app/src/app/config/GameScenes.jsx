
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
        dialogueData: [
          "Welcome to the game!",
          "In this game, you'll make decisions as a CEO.",
          "Your goal is to balance company growth and employee satisfaction.",
          "Are you ready to get started?"
        ],
        background: "/backgrounds/office_background.jpg",
        sprite: "/sprites/ceo.png",
        nextState: "scenario1", 
      },
    },
    scenario1: {
      type: "scenario",
      props: {
        title: "Ethical Hiring Dilemma",
        text: `Your startup is expanding rapidly, and you've received a standout application 
        from a candidate belonging to an underrepresented group. Some of your current team express 
        concerns that the candidate might not fit the established company culture. As the founder, 
        you must decide how to proceed while balancing innovation, diversity, and business performance.`,
        background: "/backgrounds/office_background.jpg",
        sprite: "/sprites/ceo.png",
        position: "left",
        choices: [
            { 
                label: "Prioritize Diversity & Innovation",
                text: "Hire the candidate to boost diversity and bring fresh perspectives.",
                effect: [10, 5, 15, 20, -5, -5, 0],
                nextState: "dialogue2"
            },
            { 
                label: "Maintain Status Quo",
                text: "Hire a candidate who fits the current mold to keep the team homogeneous.",
                effect: [10, 10, -10, -5, -10, -15, 0],
                nextState: "dialogue2"
            },
            { 
                label: "Delay & Innovate Hiring Process",
                text: "Postpone the decision to implement a blind hiring process, then revisit the candidate pool.",
                effect: [5, 5, 5, 10, 0, -5, -5],
                nextState: "dialogue2"
            },
        ],
      },
    },
    dialogue2: {
      type: "dialogue",
      props: {
        dialogueData: ["You've selected a strategy. Let's see how it plays out!"],
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
  