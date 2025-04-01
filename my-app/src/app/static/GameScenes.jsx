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
      nextState: "scenario3", // 👈 Tells dialogue where to go next
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
