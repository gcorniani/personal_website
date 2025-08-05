export const siteConfig = {
  name: "Giulia Corniani, PhD",
  title: "Postdoctoral Research Fellow at Harvard Medical School",
  description: "Portfolio website of Giulia Corniani",
  accentColor: "#A51C30",
  social: {
    email: "giulia.corniani@gmail.com",
    linkedin: "https://www.linkedin.com/in/giulia-corniani/",
    cv: "/ResumeCornianiGiulia.pdf",

  },
  aboutMe: `I am a <strong class="text-[#A51C30]">Postdoctoral Research Fellow</strong> at <strong class="text-[#A51C30]">Harvard Medical School</strong>, conducting clinical research at the Motion Analysis Lab within Spaulding Rehabilitation Hospital. My work lies at the intersection of biomedical engineering, human motor behavior analysis, and digital health innovation. With a background in computational neuroscience and a strong focus on <strong class="text-[#A51C30]">translational applications</strong>, I develop machine learning and deep learning methods to analyze human behaviors in both healthy and clinical populations.`,
  skills: [
    "Neuroengineering"
    "Neurorehabilitation",
    "Translational Neuroscience",
    "Digital Health",
    "Wearable Sensing"
    "Machine Learning",
    "Generative AI",
    "Musculoskeletal and Neural Modeling",
  ],
  projects: [
  {
    name: "Non-Invasive Stimulation for Enhancing Sensorimotor Integration in Neurological Conditions",
    description:
      "To what extent can non-invasive stimulation enhance somatosensory processing and improve sensorimotor integration in individuals with neurological conditions, and under what conditions does this lead to improved motor control and functional manipulation skills?",
    link: "",
    skills: ["Neuroscience", "Human Motor Control", "Non-Invasive Stimulation", "Sensorimotor Integration"],
  },
  {
    name: "Deep Learning and Generative AI for Video-Based Analysis of Human Motor Behavior",
    description:
      "How can deep learning and generative AI enhance the analysis of video footage to support scalable and context-aware clinical assessment and intervention?",
    link: "",
    skills: ["Computer Vision", "Deep Learning", "Generative Models", "Human Behavior Analysis", "Video Processing"],
  },
  {
    name: "Quantitative assessment of human motor behavior using Machine Learning and Wearable Sensing Technology",
    description:
      "How can wearable sensors and machine learning tools assess human motion in healthy individuals and patients with complex motor disorders?",
    link: "",
    skills: ["Wearable Sensors", "Time-Series Analysis", "Machine Learning", "Biomechanics", "Digital Health"],
  },
  {
    name: "Neural and Musculoskeletal Modeling of Human-Robot Interaction with Lower-Limb Exoskeletons",
    description:
      "Under what conditions can lower-limb exoskeletons effectively unload and assist users during balance and gait tasks in various populations, including healthy individuals, the elderly, and those with musculoskeletal injuries?",
    link: "",
    skills: ["Biomechanical Modeling", "Human-Robot Interaction", "Gait Analysis", "Exoskeletons", "Rehabilitation Engineering"],
  },
],

publications: [
  {
    title: "Remote monitoring of Tai Chi balance training interventions in older adults using wearable sensors and machine learning",
    authors: "Corniani, G., Sapienza, S., Vergara-Diaz, G., Valerio, A., Vaziri, A., Bonato, P., Wayne, P.",
    journal: "Scientific Reports, 15:10444",
    year: "2025",
    link: "https://www.nature.com/articles/s41598-025-93979-2",
    tags: ["Tai Chi", "Wearable Sensors", "Balance"],
  },
  {
    title: "Development of a wearable sleeve-based system combining polymer optical fiber sensors and an LSTM network for estimating knee kinematics",
    authors: "Pugliese, B. L., Angelucci, A., Parisi, F., Sapienza, S., Fabara, E., Corniani, G., Tenforde, A. S., Aliverti, A., Demarchi, D., Bonato, P.",
    journal: "IEEE Transactions on Neural Systems and Rehabilitation Engineering",
    year: "2025",
    link: "https://ieeexplore.ieee.org/document/10879287",
    tags: ["Wearables", "LSTM", "Rehabilitation"],
  },
  
  {
    title: "Motor assessment of X-linked dystonia parkinsonism via machine-learning-based analysis of wearable sensor data",
    authors: "Parisi, F., Corniani, G., Bonato, P., Balkwill, D., Acuna, P., Go, C., Sharma, N., Stephen, C. D.",
    journal: "Scientific Reports, 14(1):13229",
    year: "2024",
    link: "https://www.nature.com/articles/s41598-024-63946-4",
    tags: ["XDP", "ML", "Wearables"],
  },
  {
    title: "Sub-surface deformation of individual fingerprint ridges during tactile interactions",
    authors: "Corniani, G., Lee, Z. S., Carré, M. J., Lewis, R., Delhaye, B. P., Saal, H. P.",
    journal: "eLife",
    year: "2024",
    link: "https://elifesciences.org/reviewed-preprints/93554",
    tags: ["Tactile", "Skin Mechanics", "DeepLabCut"],
  },
  {
    title: "Position paper on how technology for human motion analysis and relevant clinical applications have evolved over the past decades",
    authors: "Bonato, P., Feipel, V., Corniani, G., Arin-Bal, G., Leardini, A.",
    journal: "Gait and Posture",
    year: "2024",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0966636224001929?via%3Dihub",
    tags: ["Gait", "Technology", "Clinical"],
  },
  {
    title: "Population coding strategies in human tactile afferents",
    authors: "Corniani, G., Casal, M. A., Panzeri, S., Saal, H. P.",
    journal: "PLoS Computational Biology, 18(12):e1010763",
    year: "2022",
    link: "https://doi.org/10.1371/journal.pcbi.1010763",
    tags: ["Population Coding", "Tactile", "Computational Neuroscience"],
  },
  {
    title: "Tactile innervation densities across the whole body",
    authors: "Corniani, G., Saal, H.",
    journal: "Journal of Neurophysiology, 124(4):1229–1240",
    year: "2020",
    link: "https://doi.org/10.1152/jn.00313.2020",
    tags: ["Tactile System", "Neuroscience"],
  },
],
  education: [
    {
      school: "University of Sheffield",
      degree: "Ph.D. in Computational Neuroscience",
      dateRange: "2019 – 2023",
      achievements: [
        "Marie Skłodowska-Curie fellow",
        "Thesis title: Mechanotransduction and information coding in the human peripheral tactile system",
      ],
    },
    {
      school: "Università degli Studi di Padova",
      degree: "M.Sc. in Bioengineering",
      dateRange: "2016 – 2018",
      achievements: [
        "Thesis title: Classification of EEG and fNIRS signals from Completely Locked-in State Patients for a Brain-Computer Interface communication system",
        "Internship at the Institute of Medical Psychology and Behavioural Neurobiology,Eberhard Karls Universität Tübingen (Germany)",
      ],
    },
    {
      school: "Università degli Studi di Padova",
      degree: "B.Sc. in Information Engineering",
      dateRange: "2013 – 2016",
      achievements: [],
    },
  ],
};
