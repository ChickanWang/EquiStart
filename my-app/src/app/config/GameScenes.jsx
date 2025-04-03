/*  
    This file contains the game scenes and their properties.
    Each scene can be a dialogue, scenario, or research event.

    Key: scene id, Value: scene object
    Each scene object contains:
    - type: The type of scene (dialogue, scenario, research)
    - props: The properties of the scene

      For scenario events:
      - text: The text to display in the scene
      - background: The background image of the scene
      - sprite: The sprite image of the character
      - position: The position of the character (left, right, center) [not implemented]
      - choices: The choices available in the scenario
        - label: The label of the choice
        - text: The text to display when the choice is made
        - effect: The effect of the choice on the game state
        - nextState: The next state to transition to after making a choice

      For research events [Need to flesh out]:
      - title: The title of the research event
      - content: The content of the research event (or path to the research file)
      - background: The background image of the research event
      - sprite: The sprite image of the character
      - nextState: The next state to transition to after the research event [should go back to the scenario]

      For dialogue events:
      - background: The background image of the dialogue scene
      - sprite: The sprite image of the character
      - dialogueData: The dialogue data to display in the dialogue scene
      - nextState: The next state to transition to after the dialogue
*/

export const gameScenes = {
  nextState: {
    type: "handleNextState",
  },
  fundingRound: {
    type: "fundingRound",
  },
  finalResults: {
    type: "finalResults",
  },

  // Initial Dialogue
  dialogue1: {
    type: "dialogue",
    props: {
      dialogueData: [
        "Welcome to EquiStart!",
        "You are the CEO of a budding tech company.",
        "Your goal is to grow your company by balancing financial gains and employee satisfaction.",
        "Are you ready to get started?",
      ],
      background: "/backgrounds/office_background.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState",
    },
  },

  // Scenario 1: Ethical Hiring
  ethical_hiring_scenario: {
    type: "scenario",
    props: {
      title: "Ethical Hiring Dilemma",
      text: `There's no time to waste, your company is off to the races! You are looking to hire some more employees to help
      manage the increasing workload and put up some job postings. However, after just a few days there are already hundreds of 
      applicants! You are feeling overwhelmed and are unsure if you and your hiring team have the time to look through all these 
      resumes and interview so many candidates. You remember one of your colleagues mentioned how AI resume screening tools 
      accelerated their hiring processes. You have also been seeing advertisements from a company called HireVue that uses 
      AI-powered video interviewing and assessments that claims to make hiring faster and fairer, it is a large investment but 
      if it's claims are true it could save you a lot of time and money in the long run. What will you do?`,
      background: "/backgrounds/office_background.jpg",
      research: "ethical_hiring_scenario_research",
      sprite: "/sprites/ceo.png",
      position: "left",
      choices: [
        {
          label: "Use an AI Resume Screening Tool",
          text: "Hire the candidate to boost diversity and bring fresh perspectives.",
          effect: [10, 5, 15, 20, -5],
          nextState: "ethical_hiring_scenario_dialogue_1",
        },
        {
          label: "Buy a HireVue Plan",
          text: "Hire a candidate who fits the current mold to keep the team homogeneous.",
          effect: [10, 10, -10, -5, -10],
          nextState: "ethical_hiring_scenario_dialogue_2",
        },
        {
          label: "Continue with Human Recruiters",
          text: "Postpone the decision to implement a blind hiring process, then revisit the candidate pool.",
          effect: [5, 5, 5, 10, 0],
          nextState: "ethical_hiring_scenario_dialogue_3",
        },
      ],
    },
  },
  ethical_hiring_scenario_research: {
    type: "research",
    props: {
      title: "Inclusive Hiring Practices",
      content: `Research shows that diverse teams perform better, 
          innovate more, and reflect broader perspectives. 
          Diversity in the workplace is linked to increased profitability, 
          better decision-making, and higher employee satisfaction. 
          Teams with varied backgrounds are more likely to approach problems creatively, 
          avoid groupthink, and connect with a wider customer base. Studies from McKinsey 
          and Harvard Business Review consistently show that inclusive companies outperform 
          their less diverse peers in nearly every metric, from revenue growth to employee retention. 
          Emphasizing diversity isn't just a moral imperative—it's a competitive advantage in a global market.`,

      sources: [
        {
          title: "The Benefits of Diversity in the Workplace",
          body: `Research shows that diverse teams perform better, innovate more, and reflect broader perspectives. 
            Organizations that prioritize diversity tend to have improved collaboration, stronger team dynamics, 
            and better problem-solving outcomes. Diversity also enhances company reputation and attracts top 
            talent from different backgrounds. Research shows that diverse teams perform better, innovate more, and reflect broader perspectives. 
            Organizations that prioritize diversity tend to have improved collaboration, stronger team dynamics, 
            and better problem-solving outcomes. Diversity also enhances company reputation and attracts top 
            talent from different backgrounds.Research shows that diverse teams perform better, innovate more, and reflect broader perspectives. 
            Organizations that prioritize diversity tend to have improved collaboration, stronger team dynamics, 
            and better problem-solving outcomes. Diversity also enhances company reputation and attracts top 
            talent from different backgrounds.Research shows that diverse teams perform better, innovate more, and reflect broader perspectives. 
            Organizations that prioritize diversity tend to have improved collaboration, stronger team dynamics, 
            and better problem-solving outcomes. Diversity also enhances company reputation and attracts top 
            talent from different backgrounds.`,
          url: "https://www.example.com/research1",
          img: "/research1.jpg",
        },
        {
          title: "AI in Hiring: Pros and Cons",
          body: `AI can help streamline the hiring process, but it can also introduce bias if not used carefully. 
            Algorithms trained on biased data may unintentionally favor certain groups, leading to unfair outcomes. 
            However, with proper design and oversight, AI can support more objective evaluations 
            and reduce manual bottlenecks.`,
          url: "https://www.example.com/research2",
          img: "/research2.jpg",
        },
        {
          title: "The Importance of Human Oversight in AI Hiring",
          body: `While AI can assist in hiring, human judgment is crucial to ensure fairness and inclusivity. 
          Oversight helps prevent algorithmic bias and ensures that candidate evaluations are context-aware. 
          Combining AI efficiency with human insight leads to more balanced and ethical hiring decisions.`,
          url: "https://www.example.com/research3",
          img: "/research3.jpg",
        }
      ],      
      background: "/backgrounds/library.jpg",
      sprite: "/sprites/back_to_work.png",
      nextState: "ethical_hiring_scenario",
    },
  },
  ethical_hiring_scenario_dialogue_1: {
    type: "dialogue",
    props: {
      dialogueData: [
        "Congrats on your decision! As a result, your company has seen a boost in innovation and employee satisfaction.",
      ],
      background: "/backgrounds/office_background.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState",
    },
  },
  ethical_hiring_scenario_dialogue_2: {
    type: "dialogue",
    props: {
      dialogueData: [
        "Your decision has led to a more homogeneous team, but some employees are unhappy.",
      ],
      background: "/backgrounds/office_background.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState",
    },
  },
  ethical_hiring_scenario_dialogue_3: {
    type: "dialogue",
    props: {
      dialogueData: [
        "Your decision to delay has led to a more inclusive hiring process, but it may take longer to see results.",
      ],
      background: "/backgrounds/office_background.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState",
    },
  },

  // Scenario 2: Environmental Responsibility
  environment: {
    type: "scenario",
    props: {
      title: "Environmental Responsibility",
      text: `Your company is considering a new product line that could significantly increase profits.
        However, it would also lead to increased carbon emissions and waste. Some employees advocate for
        a more sustainable approach, while others argue for the financial benefits. How do you proceed?`,
      background: "/backgrounds/office_background_2.jpg",
      research: "environmental_research",
      sprite: "/sprites/ceo.png",
      position: "left",
      choices: [
        {
          label: "Prioritize Sustainability",
          text: "Invest in eco-friendly materials and processes, even if it means lower profits.",
          effect: [10, 5, 15, 20, -5],
          nextState: "environmental_dialogue_1",
        },
        {
          label: "Maintain Current Practices",
          text: "Continue with the current product line for maximum profit.",
          effect: [10, 10, -10, -5, -10],
          nextState: "environmental_dialogue_2",
        },
        {
          label: "Prioritize Profitability",
          text: "Focus on maximizing profits, even if it harms the environment.",
          effect: [5, 5, 5, 10, 0],
          nextState: "environmental_dialogue_3",
        },
      ],
    },
  },
  environmental_research: {
    type: "research",
    props: {
      background: "/backgrounds/library.jpg",
      sprite: "/sprites/back_to_work.png",
      nextState: "environment",
      title: "Sustainable Business Practices",
      content: `Research shows that diverse teams perform better, 
          innovate more, and reflect broader perspectives. 
          Diversity in the workplace is linked to increased profitability, 
          better decision-making, and higher employee satisfaction. 
          Teams with varied backgrounds are more likely to approach problems creatively, 
          avoid groupthink, and connect with a wider customer base. Studies from McKinsey 
          and Harvard Business Review consistently show that inclusive companies outperform 
          their less diverse peers in nearly every metric, from revenue growth to employee retention. 
          Emphasizing diversity isn't just a moral imperative—it's a competitive advantage in a global market.`,

      sources: [
        {
          title: "The Benefits of Diversity in the Workplace",
          body: `Research shows that diverse teams perform better, innovate more, and reflect broader perspectives. 
            Organizations that prioritize diversity tend to have improved collaboration, stronger team dynamics, 
            and better problem-solving outcomes. Diversity also enhances company reputation and attracts top 
            talent from different backgrounds. Research shows that diverse teams perform better, innovate more, and reflect broader perspectives. 
            Organizations that prioritize diversity tend to have improved collaboration, stronger team dynamics, 
            and better problem-solving outcomes. Diversity also enhances company reputation and attracts top 
            talent from different backgrounds.Research shows that diverse teams perform better, innovate more, and reflect broader perspectives. 
            Organizations that prioritize diversity tend to have improved collaboration, stronger team dynamics, 
            and better problem-solving outcomes. Diversity also enhances company reputation and attracts top 
            talent from different backgrounds.Research shows that diverse teams perform better, innovate more, and reflect broader perspectives. 
            Organizations that prioritize diversity tend to have improved collaboration, stronger team dynamics, 
            and better problem-solving outcomes. Diversity also enhances company reputation and attracts top 
            talent from different backgrounds.`,
          url: "https://www.example.com/research1",
          img: "/research1.jpg",
        },
        {
          title: "AI in Hiring: Pros and Cons",
          body: `AI can help streamline the hiring process, but it can also introduce bias if not used carefully. 
            Algorithms trained on biased data may unintentionally favor certain groups, leading to unfair outcomes. 
            However, with proper design and oversight, AI can support more objective evaluations 
            and reduce manual bottlenecks.`,
          url: "https://www.example.com/research2",
          img: "/research2.jpg",
        },
        {
          title: "The Importance of Human Oversight in AI Hiring",
          body: `While AI can assist in hiring, human judgment is crucial to ensure fairness and inclusivity. 
          Oversight helps prevent algorithmic bias and ensures that candidate evaluations are context-aware. 
          Combining AI efficiency with human insight leads to more balanced and ethical hiring decisions.`,
          url: "https://www.example.com/research3",
          img: "/research3.jpg",
        }
      ], 
    },
  },
  environmental_dialogue_1: {
    type: "dialogue",
    props: {
      dialogueData: [
        "Great choice! Your commitment to sustainability has boosted employee morale and brand loyalty.",
      ],
      background: "/backgrounds/office_background_2.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState",
    },
  },
  environmental_dialogue_2: {
    type: "dialogue",
    props: {
      dialogueData: [
        "Your decision has led to increased profits, but some employees are unhappy with the environmental impact.",
      ],
      background: "/backgrounds/office_background_2.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState",
    },
  },
  environmental_dialogue_3: {
    type: "dialogue",
    props: {
      dialogueData: [
        "Your focus on profitability has led to short-term gains, but long-term consequences may arise.",
      ],
      background: "/backgrounds/office_background_2.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState",
    },
  },
  dialogue2: {
    type: "dialogue",
    props: {
      dialogueData: ["You've selected a strategy. Let's see how it plays out!"],
    },
  },
  dialogue3: {
    type: "dialogue",
    props: {
      dialogueData: ["The game is over! Thank you for playing."],
    },
  },
};
