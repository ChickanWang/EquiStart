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
      choices: [
        {
          label: "Fully Honor Deletion Requests",
          text: "Delete data promptly to uphold privacy rights.",
          effect: [-10, -5, 15, 10], // Profit, Efficiency, Public Trust, Regulatory Risk
          nextState: "right_to_be_forgotten_dialogue_1",
        },
        {
          label: "Deny All Requests",
          text: "Reject deletion requests, prioritizing data retention for business analytics and client accuracy.",
          effect: [15, 10, -15, -10],
          nextState: "right_to_be_forgotten_dialogue_2",
        },
        {
          label: "Allow but Complicate Deletion",
          text: "Allow data deletion in principle but intentionally complicate the process to reduce the volume of successful requests.",
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
          body: `Under regulations like the GDPR, individuals have the right to request the deletion of their data, but this right is subject to certain restrictions. Article 17 outlines specific conditions under which data must be erased, such as when it’s no longer necessary, consent is withdrawn, or processing was unlawful. However, there are key exemptions, especially relevant to background check companies, where data may be retained for reasons of public interest and legal compliance. Balancing these rights with the need for accurate reporting is complex, so each request must be assessed individually to ensure both regulatory compliance and data integrity.`,
          url: "https://gdpr.eu/right-to-be-forgotten/",
          img: "/sprites/privacy.png",
        },
        {
          title: "Impact of Improper Data Retention on Individuals",
          body: `In 2023, a major screening company was fined for failing to honor deletion requests and for reporting expunged criminal records. The incident raised questions about compliance, fairness, and the limits of background screening. The Federal Trade Commission has fined HireRight Solutions, an employment background screening company, $2.6 million for multiple violations of the Fair Credit Reporting Act (FCRA). The FTC alleges the company failed to ensure the accuracy of background reports, did not properly handle consumer disputes, and shared incorrect or outdated criminal records with employers. These actions resulted in consumers being unfairly denied jobs or employment benefits.`,
          url: "https://www.ftc.gov/news-events/news/press-releases/2012/08/employment-background-screening-company-pay-26-million-penalty-multiple-violations-fair-credit",
          img: "/sprites/ethics.png",
        },
        {
          title: "Non-Compliance with Privacy Laws",
          body: `Denying the right to be forgotten or failing to comply with data retention regulations can result in significant fines. For example, Google was fined $684,000 by the Belgian data protection authority for refusing to remove links to news articles about a high-profile Belgian citizen, which contained unproven harassment claims and political labels. The authority deemed Google's refusal a serious breach, emphasizing that the outdated and unverified nature of the information outweighed public interest concerns. Google, disputing the decision, argued the case did not meet the European Court of Justice's delisting criteria and has appealed the ruling.`,
          url: "https://www.cnet.com/tech/tech-industry/google-fined-684000-over-right-to-be-forgotten-failure/",
          img: "/sprites/law.png",
        },
        {
          title: "FTC: Tech Giants Failing to Protect User Data",
          body: `The Federal Trade Commission (FTC) reported that major social media and video streaming companies, including Amazon, Meta, YouTube, Twitter, Snap, TikTok, Discord, Reddit, and WhatsApp, collect and sell consumer data without adequate privacy protections, particularly affecting children and teens. The report, based on a years-long investigation, found that many companies engage in broad data sharing, retain user data indefinitely, and provide limited opt-out options. The FTC criticized companies for treating teen users like adults and called for federal privacy legislation to address gaps in protection.`,
          url: "https://spectrumnews1.com/ca/southern-california/technology/2024/09/19/federal-trade-commission-says-tech-companies-collect-and-sell-consumer-data-without-adequate-protections",
          img: "/sprites/law.png",
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
  environmental_scenario: {
    type: "scenario",
    props: {
      title: "Data Center Sustainability Decision",
      text:  `Your company is expanding operations to handle more facial recognition and identity-tracking data. 
        This means scaling server infrastructure—raising concerns about environmental impact. Your legal and PR advisor,
        points out that many peers in the surveillance and AI sector are moving toward renewable energy. She asks: 
        <br/>
        <br/>
        <b>
          “As we grow, should we make a public commitment to transition to green energy to align with industry trends and reduce our environmental footprint?"
        </b>`,
      background: "/backgrounds/data_center.png",
      research: "environmental_scenario_research",
      sprite: "/sprites/lawyer.png",
      choices: [
        {
          label: "Adopt Renewable Energy Solutions",
          text: `Migrate data centers to renewable energy-powered, eco-friendly hosting solutions, 
            even if the initial investment is steep.`,
          effect: [30, -20, 30, 0],
          nextState: "environmental_scenario_dialogue_1"
        },
        {
          label: "Maintain Current Operations",
          text: `Continue powering our extensive data-scraping and storage operations with existing 
            energy sources, despite the long-term environmental toll.`,
          effect: [5, 10, -15, 0],
          nextState: "environmental_scenario_dialogue_2"
        },
        {
          label: "Engage in Greenwashing",
          text: `Launch a public relations campaign promoting minor eco-friendly tweaks while keeping 
            our core, energy-intensive data infrastructure unchanged.`,
          effect: [-10, 20, -30, -10],
          nextState: "environmental_scenario_dialogue_3"
        }
      ]
    }
  },
  environmental_scenario_research: {
    type: "research",
    props: {
      sources: [
        {
          title: "Benefits of Renewable Energy towards Local Economies",
          body:  `U.S. data centers consume around 2% of the nation's electricity, historically relying on fossil fuels that drive carbon emissions.
            Renewable projects boost local economies through tax revenue and job creation, 
            while federal incentives like Renewable Energy Certificates further encourage clean energy adoption.`,
          url: "https://www.landgate.com/news/the-synergy-between-data-centers-and-renewable-energy",
          img: "/sprites/renewable_energy.png"
        },
        {
          title: "Environmental Threats Posed by Data Centers",
          body: `Data centers account for 1–1.5% of global electricity use (220–320 TWh in 2021) and nearly 1% of energy-related GHG emissions, 
          despite a 160% increase in workloads since 2015. Google reports its data centers consume about 450,000 gallons of water daily, while 
          some hyperscale centers may use over 1 million gallons per day—often in drought-prone areas. In 2019, 53.6 Mt of e-waste was generated
          globally, releasing 98 Mt of CO₂ equivalents from discarded cooling equipment—equal to 0.3% of global energy-related emissions.`,
          url: "https://www.techtarget.com/searchdatacenter/feature/Assess-the-environmental-impact-of-data-centers",
          img: "/sprites/environmental_impact.png"
        },
        {
          title: "Greenwashing of Tech Giants",
          body: `In 2018, Amazon emitted 44.4 million tonnes of CO₂e—equivalent to 55.5 million return flights from London to New York—yet its climate pledge excludes 75% of its emissions from its supply chain.
          Microsoft reported 16 million tonnes CO₂e in 2020 (20 million NY flights) and aims for 100% renewable energy by 2025 and carbon negativity by 2030, backed by $1 billion in carbon removal investment.
          Both companies undermine their pledges by continuing partnerships with oil companies, casting doubt on the credibility and scope (e.g., lack of Scope 3 coverage) of their climate commitments.`,
          url: "https://www.ethicalconsumer.org/technology/amazon-microsoft-greenwashing-technology-industry",
          img: "/sprites/greenwashing.png"
        }
      ],
      background: "/backgrounds/library.jpg",
      sprite: "/sprites/back_to_work.png",
      nextState: "environmental_scenario"
    }
  },
  environmental_scenario_dialogue_1: {
    type: "dialogue",
    props: {
      dialogueData: [
        "You decided to invest in renewable energy and eco-friendly hosting solutions.",
        "The initial costs were substantial, but over time, operational expenses decreased due to energy savings.",
        "Your company's commitment to sustainability has enhanced its reputation, attracting environmentally conscious clients.",
        "As a result, your profitability has improved, public perception has significantly increased, and your carbon footprint has been reduced."
      ],
      background: "/backgrounds/office_background.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState"
    }
  },
  environmental_scenario_dialogue_2: {
    type: "dialogue",
    props: {
      dialogueData: [
        "You chose to maintain current energy-intensive operations to avoid immediate financial costs.",
        "While short-term expenses remained stable, increasing energy prices led to higher operational costs over time.",
        "Your company's environmental impact has drawn criticism from stakeholders and clients concerned about sustainability.",
        "As a result, your profitability has declined, public perception has worsened, and your carbon footprint remains high."
      ],
      background: "/backgrounds/office_background.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState"
    }
  },
  environmental_scenario_dialogue_3: {
    type: "dialogue",
    props: {
      dialogueData: [
        "You opted to publicly promote minimal environmental efforts without substantial operational changes.",
        "Initially, this improved public perception, but investigative reports exposed the lack of genuine sustainability initiatives.",
        "The revelation of greenwashing damaged your company's reputation and led to a loss of client trust.",
        "As a result, your public perception has significantly decreased, profitability has suffered, and your carbon footprint remains unchanged."
      ],
      background: "/backgrounds/office_background.jpg",
      sprite: "/sprites/ceo.png",
      nextState: "nextState"
    }
  }
};
