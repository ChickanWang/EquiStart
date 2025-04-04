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
  ethical_hiring_scenario: {
    type: "scenario",
    props: {
      title: "Hiring Dilemma",
      text: `You are looking to hire some more employees to help manage the increasing workload and put up some job postings.
      However, after just a few days there are already hundreds of applicants! You're feeling overwhelmed and are unsure if
      you and your hiring team have the time to look through all these resumes and interview so many candidates. One of your
      colleagues mentioned how AI resume screening tools accelerated their hiring processes. You have also been seeing
      advertisements from a company called HireVue that uses AI-powered video interviewing and assessments that claims to
      make hiring faster and fairer with facial and voice recognition scanning. If it's claims are true it could save you a
      lot of time and money in the long run. What will you do?`,
      background: "/backgrounds/office_background.jpg",
      research: "ethical_hiring_scenario_research",
      sprite: "/sprites/ceo.png",
      position: "left",
      choices: [
        {
          label: "Use an AI Resume Screening Tool",
          text: "Use the tool to save on screening time and costs.",
          effect: [-50, 10, -5, -15],
          nextState: "ethical_hiring_scenario_dialogue_1",
        },
        {
          label: "Buy a HireVue Plan",
          text: "Use HireVue to save on recruiting time and costs.",
          effect: [-5, 15, -20, -5],
          nextState: "ethical_hiring_scenario_dialogue_2",
        },
        {
          label: "Continue with Human Recruiters",
          text: "Don't buy additional AI recruitment tools and stick with human recruiting.",
          effect: [-10, -20, 10, 5],
          nextState: "ethical_hiring_scenario_dialogue_3",
        },
      ],
    },
  },
  ethical_hiring_scenario_research: {
    type: "research",
    props: {
      sources: [
        {
          title:
            "Gender, Race, and Intersectional Bias in Resume Screening via Language Model Retrival",
          body: `In this study a resume audit study was performed to determine if LLMs and massive text embedding (MTE) models are biased.
          Their findings were that the models were biased and significantly favoured White-associated names in 85.1% of cases and female
          associated names only 11.1%. Their study also found that Black males were disadvantaged in 100% of the cases, with Black women
          being preferred over men.
        `,
          url: "https://ojs.aaai.org/index.php/AIES/article/view/31748/33915",
          img: "/sprites/resume.png",
        },
        {
          title:
            "Rights Group Files Federal Complain Against AI-Hiring Firm HireVue, Citing 'Unfair and Deceptive' Practices",
          body: `The Electronic Privacy Information Center (EPIC)  filed a federal complaint against HireVue's business practices, claiming
          that the company's unproven uses of AI systems to assess candidate employability by scanning their faces and voices is unfair.
          The system estimates a candidate's skills and behaviours such as "willingness to learn" and "personal stability" from analyzing
          word selection, speaking voice, and facial movements. HireVue maintains a blackbox stance and keeps its algorithms secret from
          the public.`,
          url: "https://www.washingtonpost.com/technology/2019/11/06/prominent-rights-group-files-federal-complaint-against-ai-hiring-firm-hirevue-citing-unfair-deceptive-practices/",
          img: "/sprites/hirevue.png",
        },
        {
          title: "AI Job Hiring Outperforms Humans in Hiring",
          body: `Researchers have found that AI hiring improves efficiency, increases fill-rate of open positions, and the candidates that
          are recommended are more likely to be hired after an interview. However, analyzing candidate and recruiter opinions about AI
          hiring reveals that responses are overwhelmingly negative. People trust AI hiring less than human hiring due to privacy concerns,
          finding AI less personable, and that companies that use AI hiring are seen as less attractive.`,
          url: "https://www.lse.ac.uk/News/Latest-news-from-LSE/2022/e-May-22/Artificial-Intelligence-job-hiring-outperforms-human-hiring",
          img: "/sprites/human.png",
        },
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
        "You decided to purchase an AI resume screening tool to accelerate the recruiting process.",
        "In exchange for saving time and money, your employees and the public are having some concerns over fairness and biases in AI tooling.",
        "You also can't help but notice that almost all the applicants making it to the interview stage and your new hires are White males.",
        "As a result, your profitability has increased, employee satisfaction and public perception has slightly decreased, and workforce diversity has decreased.",
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
        "You decided to use HireVue to help with selecting and interviewing clients.",
        "It has helped you save a lot of time and money, but a recent article criticizing HireVue's blackbox use of biometric data as unfair and discriminatory released.",
        "Your employees are feeling uncomfortable and candidates are leaving scathing public reviews of your hiring process.",
        "As a result, your profitability has increased, diversity and employee satisfaction has slightly decreased, and public perception has significantly decreased.",
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
        "Well if it ain't broke, don't fix it.",
        "You decided to not use additional AI tools in your recruiting process and stuck with good ol' fashioned human labour.",
        "The recruiting process has been lengthy and time consuming, and your company is feeling the strain of this.",
        "Your HR department and managers are spending more time than expected interviewing candidates and work output is decreasing.",
        "However, seeing recent studies and articles criticizing AI tools in recruitment have you feeling a little thankful you avoided the public backlash.",
        "As a result, your diversity has slightly increased, public perception has increased, employee satisfaction has decreased, and profitability has significantly decreased.",
      ],
      background: "/backgrounds/office_background.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState",
    },
  },

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

  // Scenario 4: Right to be Forgotten
  right_to_be_forgotten_scenario: {
    type: "scenario",
    props: {
      title: "Right to Be Forgotten",
      text: `As a background check screening company, your systems store personal data on millions of individuals—ranging from employment history to criminal records and financial status.
    Recently, you're receiving more requests from individuals asking you to delete their personal data under privacy laws such as the GDPR and CCPA.
    Some of these requests are legitimate, but others come from individuals whose records are relevant to client decisions.
    Fully honoring these requests would build trust but could also jeopardize the accuracy of your reports.
    Meanwhile, your legal team suggests alternative tactics to retain valuable data. What path will you take?`,
      background: "/backgrounds/server_room.jpg",
      research: "right_to_be_forgotten_scenario_research",
      sprite: "/sprites/ceo.png",
      position: "left",
      choices: [
        {
          label: "Fully Honor Deletion Requests",
          text: "Delete data promptly to uphold privacy rights.",
          effect: [-10, -5, 15, 10], // Profit, Efficiency, Public Trust, Regulatory Risk
          nextState: "right_to_be_forgotten_dialogue_1",
        },
        {
          label: "Deny All Requests",
          text: "Retain data for full report integrity.",
          effect: [15, 10, -15, -10],
          nextState: "right_to_be_forgotten_dialogue_2",
        },
        {
          label: "Allow but Complicate Deletion",
          text: "Slow down the deletion process to retain most data.",
          effect: [5, 5, -5, -15],
          nextState: "right_to_be_forgotten_dialogue_3",
        },
      ],
    },
  },

  right_to_be_forgotten_scenario_research: {
    type: "research",
    props: {
      sources: [
        {
          title: "Right to Be Forgotten: Privacy vs. Public Interest",
          body: `Under regulations like the GDPR, individuals have the right to request deletion of their personal data. However, exceptions exist for data held in the public interest, legal obligations, or for exercising freedom of expression.
        For background check companies, striking a balance between privacy and accuracy can be legally complex.`,
          url: "https://gdpr.eu/right-to-be-forgotten/",
          img: "/sprites/privacy.png",
        },
        {
          title: "Ethics of Data Retention in Background Screening",
          body: `Privacy advocates argue that retaining outdated or irrelevant data can unfairly impact individuals' job prospects and social standing. Ethical screening should avoid perpetuating bias or punishing individuals for past behaviors indefinitely.`,
          url: "https://iapp.org/news/a/ethics-in-background-screening/",
          img: "/sprites/ethics.png",
        },
        {
          title: "Company Fined $20M for Misusing Criminal Data in Reports",
          body: `In 2023, a major screening company was fined for failing to honor deletion requests and for reporting expunged criminal records. The incident raised questions about compliance, fairness, and the limits of background screening.`,
          url: "https://www.ftc.gov/news-events",
          img: "/sprites/fine.png",
        },
      ],
      background: "/backgrounds/library.jpg",
      sprite: "/sprites/back_to_work.png",
      nextState: "right_to_be_forgotten_scenario",
    },
  },

  right_to_be_forgotten_dialogue_1: {
    type: "dialogue",
    props: {
      dialogueData: [
        "You decide to fully honor all deletion requests in accordance with data protection laws.",
        "Your compliance team sets up automated workflows to ensure timely deletion of sensitive records.",
        "Some clients complain about gaps in reports, especially when previous infractions or job terminations are missing.",
        "But the public appreciates your transparency and legal teams praise your risk mitigation approach.",
        "As a result, your data accuracy and short-term profit drop slightly, but your public trust and regulatory standing increase.",
      ],
      background: "/backgrounds/server_room.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState",
    },
  },

  right_to_be_forgotten_dialogue_2: {
    type: "dialogue",
    props: {
      dialogueData: [
        "You decide not to honor data deletion requests, citing the importance of maintaining historical accuracy for clients.",
        "While your reports remain thorough, a privacy rights organization launches a campaign calling you out for non-compliance.",
        "This draws media attention and prompts a government audit, leading to potential legal consequences.",
        "Your client trust remains high, but the public image of your company starts to decline.",
        "As a result, you maintain profits in the short term, but face growing legal risks and declining public trust.",
      ],
      background: "/backgrounds/server_room.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState",
    },
  },

  right_to_be_forgotten_dialogue_3: {
    type: "dialogue",
    props: {
      dialogueData: [
        "You allow data deletion in principle—but implement slow, confusing steps to reduce actual deletions.",
        "Users get frustrated with the process, and complaints begin appearing on review sites and social media.",
        "Your clients remain satisfied, but a watchdog group accuses you of using 'dark patterns' to suppress user rights.",
        "A class-action lawsuit looms in the distance, and your legal team starts preparing.",
        "As a result, you retain most of your data and profits, but face significant ethical criticism and potential legal exposure.",
      ],
      background: "/backgrounds/server_room.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState",
    },
  },
  // Scenario 6: Workplace Culture
  workplace_culture_scenario: {
    type: "scenario",
    props: {
      title: "Workplace Culture Dilemma",
      text: `As a fast-growing startup, you've built a reputation for innovation, speed, and accuracy.
      Your team is lean, ambitious, and driven, but recently, internal discussions have surfaced concerns: female employees feel underrepresented in leadership and unsupported in their career growth.
      Some executives believe leadership roles have been filled fairly, based on merit and availability.
      Others point to subtle biases, informal networks, and a lack of structured development opportunities for women in the company.
      Taking action could foster a more inclusive and equitable culture, but might also challenge current leadership norms and hiring processes.
      Your team is exploring mentorship programs and other diversity intiatives.
      What decision will you support?`,
      background: "/backgrounds/office_background_2.jpg",
      research: "workplace_culture_scenario_research",
      sprite: "/sprites/ceo.png",
      position: "left",

      choices: [
        {
          label: "Invest in Gender Equity",
          text: "Immediately invest in initiatives supporting women's career advancement and leadership training.",
          effect: [15, 5, 20, 25],
          nextState: "gender_equity_dialogue_1",
        },
        {
          label: "Maintain Status Quo",
          text: "Continue current hiring and promotion practices without addressing gender disparities.",
          effect: [-10, 5, -15, -20],
          nextState: "gender_equity_dialogue_2",
        },
        {
          label: "Token Initiatives",
          text: "Implement surface-level diversity efforts without addressing root issues.",
          effect: [-5, 0, -10, -5],
          nextState: "gender_equity_dialogue_3",
        },
      ],
    },
  },

  workplace_culture_scenario_research: {
    type: "research",
    props: {
      sources: [
        {
          title: "Why Gender Equity Matters",
          body: `Research from McKinsey shows companies with more women in leadership see up to 47% higher returns on equity. Firms in the top 25% for gender diversity are also 27% more likely to outperform peers in profitability. Diverse leadership can improve problem-solving, communication, and innovation, fuelling stronger financial performance.`,
          url: "https://www.mckinsey.com/featured-insights/diversity-and-inclusion",
          img: "/sprites/human.png"
        },
        
        
        {
          title: "Men Still Outnumber Women at Every Level",
          body: "Despite efforts toward gender parity, men continue to outnumber women across all corporate levels. This disparity is most pronounced in senior leadership, where only about 1 in 5 C-suite executives is a woman, and just 1 in 25 is a woman of color. The primary cause is inequities in hiring and promotions, particularly at the first step up to manager.",
          url: "https://leanin.org/women-in-the-workplace/2018/men-still-outnumber-women-at-every-level",
          img: "/sprites/crack.png"
        },         
        {
          title: "Walmart Settles Sex Discrimination Lawsuit",
          body: "In 2023, Walmart agreed to pay $60,000 to settle a lawsuit alleging that the company refused to promote a female employee based on sex stereotypes about women with young children. The EEOC claimed this violated federal law by denying her equal opportunity for advancement.",
          url: "https://www.eeoc.gov/newsroom/walmart-pay-60000-settle-eeoc-sex-discrimination-lawsuit",
          img: "/sprites/ladder.png"
        },
        
      ],
      background: "/backgrounds/library.jpg",
      sprite: "/sprites/back_to_work.png",
      nextState: "workplace_culture_scenario",
    },
  },

  gender_equity_dialogue_1: {
    type: "dialogue",
    props: {
      dialogueData: [
        "You launch a company-wide initiative to support women’s advancement into leadership roles.",
        "New mentorship programs, transparent promotion criteria, and leadership training are introduced.",
        "Some existing managers resist the changes, claiming it's unnecessary—but many employees feel heard and empowered.",
        "Your efforts are praised on social media, and you're recognized by a diversity-focused publication.",
        "As a result, employee satisfaction and public perception rise, even as short-term productivity dips during the transition.",
      ],
      background: "/backgrounds/office_day.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState",
    },
  },
  
  gender_equity_dialogue_2: {
    type: "dialogue",
    props: {
      dialogueData: [
        "You decide not to make any changes to your leadership development or hiring processes.",
        "Some employees grow frustrated, feeling their concerns are being ignored.",
        "Internal discussions intensify, and a few high-performing women begin to leave the company.",
        "Glassdoor reviews reflect a growing sense of dissatisfaction, especially around equity and growth opportunities.",
        "While operations continue smoothly, morale dips and your company’s reputation for inclusivity begins to erode.",
      ],
      background: "/backgrounds/office_day.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState",
    },
  },
  
  gender_equity_dialogue_3: {
    type: "dialogue",
    props: {
      dialogueData: [
        "You roll out minimal diversity programs—like a single workshop or a token leadership talk—but don’t change core systems.",
        "Internally, many see it as a PR move rather than real change, and trust in leadership weakens.",
        "A few women speak out anonymously online, drawing attention to the gap between company image and internal reality.",
        "Public backlash is moderate, but steady, and your company is no longer seen as progressive or inclusive.",
        "You avoid major short-term costs, but diversity growth stalls and internal dissatisfaction grows quietly.",
      ],
      background: "/backgrounds/office_day.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState",
    },
  },  
};
