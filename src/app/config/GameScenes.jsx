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
        "You are the CEO of a budding background check screening company.",
        "Your clients are business owners and companies who rely on you to give back accurate information on the people they ask you to check.",
        "Your goal is to grow your company by balancing financial gains, internal employee satisfaction, and external public opinion.",
        "Are you ready to get started?",
      ],
      background: "/backgrounds/office_background.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState",
    },
  },

  // Scenario 1: Ethical Hiring
  // ethical_hiring_scenario: {
  //   type: "scenario",
  //   props: {
  //     title: "Hiring Dilemma",
  //     text: `You are looking to hire some more employees to help manage the increasing workload and put up some job postings.
  //     However, after just a few days there are already hundreds of applicants! You're feeling overwhelmed and are unsure if
  //     you and your hiring team have the time to look through all these resumes and interview so many candidates. One of your
  //     colleagues mentioned how AI resume screening tools accelerated their hiring processes. You have also been seeing
  //     advertisements from a company called HireVue that uses AI-powered video interviewing and assessments that claims to
  //     make hiring faster and fairer with facial and voice recognition scanning. If it's claims are true it could save you a
  //     lot of time and money in the long run. What will you do?`,
  //     background: "/backgrounds/office_background.jpg",
  //     research: "ethical_hiring_scenario_research",
  //     sprite: "/sprites/ceo.png",
  //     position: "left",
  //     choices: [
  //       {
  //         label: "Use an AI Resume Screening Tool",
  //         text: "Use the tool to save on screening time and costs.",
  //         effect: [-5, 10, -5, -15],
  //         nextState: "ethical_hiring_scenario_dialogue_1",
  //       },
  //       {
  //         label: "Buy a HireVue Plan",
  //         text: "Use HireVue to save on recruiting time and costs.",
  //         effect: [-5, 15, -20, -5],
  //         nextState: "ethical_hiring_scenario_dialogue_2",
  //       },
  //       {
  //         label: "Continue with Human Recruiters",
  //         text: "Don't buy additional AI recruitment tools and stick with human recruiting.",
  //         effect: [-10, -20, 10, 5],
  //         nextState: "ethical_hiring_scenario_dialogue_3",
  //       },
  //     ],
  //   },
  // },
  // ethical_hiring_scenario_research: {
  // type: "research",
  // props: {
  //   sources: [
  //     {
  //       title:
  //         "Gender, Race, and Intersectional Bias in Resume Screening via Language Model Retrival",
  //       body: `In this study a resume audit study was performed to determine if LLMs and massive text embedding (MTE) models are biased.
  //         Their findings were that the models were biased and significantly favoured White-associated names in 85.1% of cases and female
  //         associated names only 11.1%. Their study also found that Black males were disadvantaged in 100% of the cases, with Black women
  //         being preferred over men.
  //       `,
  //       url: "https://ojs.aaai.org/index.php/AIES/article/view/31748/33915",
  //       img: "/sprites/resume.png",
  //     },
  //     {
  //       title:
  //         "Rights Group Files Federal Complain Against AI-Hiring Firm HireVue, Citing 'Unfair and Deceptive' Practices",
  //       body: `The Electronic Privacy Information Center (EPIC)  filed a federal complaint against HireVue's business practices, claiming
  //         that the company's unproven uses of AI systems to assess candidate employability by scanning their faces and voices is unfair.
  //         The system estimates a candidate's skills and behaviours such as "willingness to learn" and "personal stability" from analyzing
  //         word selection, speaking voice, and facial movements. HireVue maintains a blackbox stance and keeps its algorithms secret from
  //         the public.`,
  //       url: "https://www.washingtonpost.com/technology/2019/11/06/prominent-rights-group-files-federal-complaint-against-ai-hiring-firm-hirevue-citing-unfair-deceptive-practices/",
  //       img: "/sprites/hirevue.png",
  //     },
  //     {
  //       title: "AI Job Hiring Outperforms Humans in Hiring",
  //       body: `Researchers have found that AI hiring improves efficiency, increases fill-rate of open positions, and the candidates that
  //         are recommended are more likely to be hired after an interview. However, analyzing candidate and recruiter opinions about AI
  //         hiring reveals that responses are overwhelmingly negative. People trust AI hiring less than human hiring due to privacy concerns,
  //         finding AI less personable, and that companies that use AI hiring are seen as less attractive.`,
  //       url: "https://www.lse.ac.uk/News/Latest-news-from-LSE/2022/e-May-22/Artificial-Intelligence-job-hiring-outperforms-human-hiring",
  //       img: "/sprites/human.png",
  //     },
  //   ],
  //   background: "/backgrounds/library.jpg",
  //   sprite: "/sprites/back_to_work.png",
  //   nextState: "ethical_hiring_scenario",
  // },
  // },
  // ethical_hiring_scenario_dialogue_1: {
  //   type: "dialogue",
  //   props: {
  //     dialogueData: [
  //       "You decided to purchase an AI resume screening tool to accelerate the recruiting process.",
  //       "In exchange for saving time and money, your employees and the public are having some concerns over fairness and biases in AI tooling.",
  //       "You also can't help but notice that almost all the applicants making it to the interview stage and your new hires are White males.",
  //       "As a result, your profitability has increased, employee satisfaction and public perception has slightly decreased, and workforce diversity has decreased.",
  //     ],
  //     background: "/backgrounds/office_background.jpg",
  //     sprite: "/sprites/ceo.png",
  //     nextState: "nextState",
  //   },
  // },
  // ethical_hiring_scenario_dialogue_2: {
  //   type: "dialogue",
  //   props: {
  //     dialogueData: [
  //       "You decided to use HireVue to help with selecting and interviewing clients.",
  //       "It has helped you save a lot of time and money, but a recent article criticizing HireVue's blackbox use of biometric data as unfair and discriminatory released.",
  //       "Your employees are feeling uncomfortable and candidates are leaving scathing public reviews of your hiring process.",
  //       "As a result, your profitability has increased, diversity and employee satisfaction has slightly decreased, and public perception has significantly decreased.",
  //     ],
  //     background: "/backgrounds/office_background.jpg",
  //     sprite: "/sprites/ceo.png",
  //     nextState: "nextState",
  //   },
  // },
  // ethical_hiring_scenario_dialogue_3: {
  //   type: "dialogue",
  //   props: {
  //     dialogueData: [
  //       "Well if it ain't broke, don't fix it.",
  //       "You decided to not use additional AI tools in your recruiting process and stuck with good ol' fashioned human labour.",
  //       "The recruiting process has been lengthy and time consuming, and your company is feeling the strain of this.",
  //       "Your HR department and managers are spending more time than expected interviewing candidates and work output is decreasing.",
  //       "However, seeing recent studies and articles criticizing AI tools in recruitment have you feeling a little thankful you avoided the public backlash.",
  //       "As a result, your diversity has slightly increased, public perception has increased, employee satisfaction has decreased, and profitability has significantly decreased.",
  //     ],
  //     background: "/backgrounds/office_background.jpg",
  //     sprite: "/sprites/ceo.png",
  //     nextState: "nextState",
  //   },
  // },

  // Scenario 2: Workplace surveillance
  security_scenario: {
    type: "scenario",
    props: {
      title: "Security Dilemma",
      text: `Recently in the news there more and more talks of company data breaches. One by one your competitors have been victims of a data 
        breach and are facing backlash. Your current clients are now getting paranoid and are looking for reassurance from you to ease their 
        worries. Improving your company's security could be a smart move since this is the perfect chance to steal your competitors' clients 
        and also put an end to this feeling that you're next on the chopping block. You've been looking into a few methods on how to improve 
        security. You were thinking of just tacking on MFA to your applications and portals and calling it a day, but you've also always thought 
        that using biometrics like your fingerprint to access things would be so convenient (and cool). On the other hand, you feel like the 
        current video-based security training modules you have in place are pretty good, maybe you can just make your employees redo it?`,
      background: "/backgrounds/office_background.jpg",
      research: "security_scenario_research",
      sprite: "/sprites/ceo.png",
      position: "left",
      choices: [
        {
          label: "Mandatory biometrics",
          text: "Install facial recognition and fingerprint scanners and require verification to access any data.",
          effect: [-20, -20, -10, -10],
          nextState: "security_scenario_dialogue_1",
        },
        {
          label: "Implement MFA",
          text: "Require MFA to access any company related data.",
          effect: [-5, 20, 20, 0],
          nextState: "security_scenario_dialogue_2",
        },
        {
          label: "Increase current security training",
          text: "Increase completion frequency of your current security training videos.",
          effect: [-5, -20, -20, 0],
          nextState: "security_scenario_dialogue_3",
        },
      ],
    },
  },
  security_scenario_research: {
    type: "research",
    props: {
      sources: [
        {
          title:
            "ICO Orders Serco Leisure to Stop Using Facial Recognition Technology",
          body: `The Information Commissioner's Office (ICO) in the UK issued an official order to the event management company Serco Leisure
            to stop using facial recognition technology and fingerprint scanning to monitor employee attendance. The company failed to show 
            why it is necessary or proportionate to use facial recognition and fingerprint scanning for attendance checks and subsequently 
            receive pay. There was no clear way for staff to opt out of giving their biometric data and it was deemed neither fair nor 
            proportionate.
          `,
          url: "https://hbr.org/2022/11/does-facial-recognition-tech-enhance-security",
          img: "/sprites/biometric.png",
        },
        {
          title: "Case Study: Does Facial Recognition Tech Enhance Security?",
          body: `A day-care center installed a facial recognition security system to verify and allow authorized individuals to enter and for 
          parents to pick up their children. It photographs every visitor's face and flags an alarm if the visitor cannot be recognized or if 
          their face is covered. Multiple false alarms occurred with the system, all five alarms were triggered by dark-skinned women. 
          `,
          url: "https://hbr.org/2022/11/does-facial-recognition-tech-enhance-security",
          img: "/sprites/facescanner.png",
        },
        // {
        //   title:
        //     "",
        //   body: ``,
        //   url: "",
        //   img: "/sprites/mfa.png",
        // },
        {
          title: "Are We Ready to Give Up on Security",
          body: `Microsoft's 2023 Digital Defense Report found that a popular form of video-based traning reduced phish-clicking behaviour
            only by 3%. IBM Security found that there is a different in 1.5 million USD or 33.9% in data breach costs between companies with 
            high and low adoption of security awareness training in the workplace.`,
          url: "https://thehackernews.com/2023/12/are-we-ready-to-give-up-on-security.html",
          img: "/sprites/training.png",
        },
      ],
      background: "/backgrounds/library.jpg",
      sprite: "/sprites/back_to_work.png",
      nextState: "security_scenario",
    },
  },
  security_scenario_dialogue_1: {
    type: "dialogue",
    props: {
      dialogueData: [
        "You decided to mandate facial recognition and fingerprint scanning to verify identities and access resources.",
        "You drew in some new clients who found your security measures robust and reliable!",
        "But your facial scanners kept flagging false alarms on your dark-skinned employees and you are receiving more and more internal complaints.",
        "A lot of your employees who were people of colour have left.",
        `Both current and ex-employees are speaking out against your security measures and the company's being painted as 
        a racist, nefarious organization that harvests it's employees' personal data.`,
        "You lose your new clients and also some of your existing ones.",
        "Perhaps you jumped the gun on this one.",
        "As a result, your public perception and diversity has decreased, and employee satisfaction and profitability has significantly decreased.",
      ],
      background: "/backgrounds/office_background.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState",
    },
  },
  security_scenario_dialogue_2: {
    type: "dialogue",
    props: {
      dialogueData: [
        "You decided to implement MFA for access to company resources.",
        "Your employees were slightly annoyed at having to authenticate everytime they accessed things but they agreed that it made things more secure.",
        "You successfully avoided experiencing a data breach!",
        "Your relationship with your current clients improved and you also gained a lot more new clients!",
        "As a result, your profitability and public perception has significantly increased, and employee satisfaction has slightly decreased.",
      ],
      background: "/backgrounds/office_background.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState",
    },
  },
  security_scenario_dialogue_3: {
    type: "dialogue",
    props: {
      dialogueData: [
        "Well if it ain't broke, don't fix it.",
        "You decided to not implement additional security measures and required your employees to complete the security training videos again.",
        "Your workers were slightly annoyed but everyone recompleted their training.                                                                                ",
        "Unfortunately, it doesn't seem like that was enough, your company still had a data breach happen.",
        "One of your employees fell for a phishing scam in their email.",
        "Your company is seen as insecure and unreliable, you lose a lot of your clientele.",
        "As a result, your profitability and public perception has significantly decreased, and employee satisfaction has slightly decreased. ",
      ],
      background: "/backgrounds/office_background.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState",
    },
  },

  efficiency_scenario: {
    type: "scenario",
    props: {
      title: "Work Efficiency Dilemma",
      text: `As the demands of your business grows, you decide that it's time to change the way you work and use 
        more technology to accelerate your processes. `,
      background: "/backgrounds/office_background.jpg",
      research: "efficiency_scenario_research",
      sprite: "/sprites/ceo.png",
      position: "left",
      choices: [
        {
          label: "Mandatory biometrics",
          text: "Install facial recognition and fingerprint scanners and require verification to access any data.",
          effect: [-20, -20, -10, -10],
          nextState: "efficiency_scenario_dialogue_1",
        },
        {
          label: "Implement MFA",
          text: "Require MFA to access any company related data.",
          effect: [-5, 20, 20, 0],
          nextState: "efficiency_scenario_dialogue_2",
        },
        {
          label: "Increase current security training",
          text: "Increase completion frequency of your current security training videos.",
          effect: [-5, -20, -20, 0],
          nextState: "efficiency_scenario_dialogue_3",
        },
      ],
    },
  },
  efficiency_scenario_research: {
    type: "research",
    props: {
      sources: [
        {
          title:
            "ICO Orders Serco Leisure to Stop Using Facial Recognition Technology",
          body: `The Information Commissioner's Office (ICO) in the UK issued an official order to the event management company Serco Leisure
            to stop using facial recognition technology and fingerprint scanning to monitor employee attendance. The company failed to show 
            why it is necessary or proportionate to use facial recognition and fingerprint scanning for attendance checks and subsequently 
            receive pay. There was no clear way for staff to opt out of giving their biometric data and it was deemed neither fair nor 
            proportionate.
          `,
          url: "https://hbr.org/2022/11/does-facial-recognition-tech-enhance-security",
          img: "/sprites/biometric.png",
        },
        {
          title: "Case Study: Does Facial Recognition Tech Enhance Security?",
          body: `A day-care center installed a facial recognition security system to verify and allow authorized individuals to enter and for 
          parents to pick up their children. It photographs every visitor's face and flags an alarm if the visitor cannot be recognized or if 
          their face is covered. Multiple false alarms occurred with the system, all five alarms were triggered by dark-skinned women. 
          `,
          url: "https://hbr.org/2022/11/does-facial-recognition-tech-enhance-security",
          img: "/sprites/facescanner.png",
        },
        // {
        //   title:
        //     "",
        //   body: ``,
        //   url: "",
        //   img: "/sprites/mfa.png",
        // },
        {
          title: "Are We Ready to Give Up on Security",
          body: `Microsoft's 2023 Digital Defense Report found that a popular form of video-based traning reduced phish-clicking behaviour
            only by 3%. IBM Security found that there is a different in 1.5 million USD or 33.9% in data breach costs between companies with 
            high and low adoption of security awareness training in the workplace.`,
          url: "https://thehackernews.com/2023/12/are-we-ready-to-give-up-on-security.html",
          img: "/sprites/training.png",
        },
      ],
      background: "/backgrounds/library.jpg",
      sprite: "/sprites/back_to_work.png",
      nextState: "efficiency_scenario",
    },
  },
  efficiency_scenario_dialogue_1: {
    type: "dialogue",
    props: {
      dialogueData: [
        "You decided to mandate facial recognition and fingerprint scanning to verify identities and access resources.",
        "You drew in some new clients who found your security measures robust and reliable!",
        "But your facial scanners kept flagging false alarms on your dark-skinned employees and you are receiving more and more internal complaints.",
        "A lot of your employees who were people of colour have left.",
        `Both current and ex-employees are speaking out against your security measures and the company's being painted as 
        a racist, nefarious organization that harvests it's employees' personal data.`,
        "You lose your new clients and also some of your existing ones.",
        "Perhaps you jumped the gun on this one.",
        "As a result, your public perception and diversity has decreased, and employee satisfaction and profitability has significantly decreased.",
      ],
      background: "/backgrounds/office_background.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState",
    },
  },
  efficiency_scenario_dialogue_2: {
    type: "dialogue",
    props: {
      dialogueData: [
        "You decided to implement MFA for access to company resources.",
        "Your employees were slightly annoyed at having to authenticate everytime they accessed things but they agreed that it made things more secure.",
        "You successfully avoided experiencing a data breach!",
        "Your relationship with your current clients improved and you also gained a lot more new clients!",
        "As a result, your profitability and public perception has significantly increased, and employee satisfaction has slightly decreased.",
      ],
      background: "/backgrounds/office_background.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState",
    },
  },
  efficiency_scenario_dialogue_3: {
    type: "dialogue",
    props: {
      dialogueData: [
        "Well if it ain't broke, don't fix it.",
        "You decided to not implement additional security measures and required your employees to complete the security training videos again.",
        "Your workers were slightly annoyed but everyone recompleted their training.                                                                                ",
        "Unfortunately, it doesn't seem like that was enough, your company still had a data breach happen.",
        "One of your employees fell for a phishing scam in their email.",
        "Your company is seen as insecure and unreliable, you lose a lot of your clientele.",
        "As a result, your profitability and public perception has significantly decreased, and employee satisfaction has slightly decreased. ",
      ],
      background: "/backgrounds/office_background.jpg",
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
