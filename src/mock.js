// Mock data for Pranit Manda's Portfolio

export const personalInfo = {
  name: "Pranit Manda",
  title: "AI & Machine Learning Engineer building real-world, production-grade intelligence systems",
  bio: "I design and deploy machine learning systems that work beyond notebooks — from data pipelines to scalable, monitored production deployments. My focus is on building reliable, end-to-end AI systems that balance model performance, system constraints, and real-world impact. I care deeply about how intelligence scales in practice.",
  email: "pranitmanda2000@gmail.com",
  github: "https://www.github.com/hawkeyed-panda",
  linkedin: "https://www.linkedin.com/in/pranitmanda",
  resume: "Pranit_Manda_Resume.pdf"
};

export const projects = [
  {
    id: 1,
    name: "Smart Traffic Optimization using Deep Reinforcement Learning",
    description: "Built a real-time traffic optimization system using Deep Reinforcement Learning integrated with live Google Maps data to reduce congestion and improve signal timing decisions.",
    techStack: ["Python", "Deep RL (Q-Learning, DQN)", "Google Maps API", "AWS", "Time-Series Forecasting"],
    impact: "Enabled adaptive traffic signal strategies using real-world spatiotemporal traffic patterns.",
    link: "Available on request"
  },
  {
    id: 2,
    name: "GenAI Chatbot with Retrieval-Augmented Generation (RAG)",
    description: "Developed a production-ready RAG system that combines document retrieval with large language models to deliver accurate, context-aware responses.",
    techStack: ["Python", "LangChain", "LLMs (GPT-4 class)", "Pinecone", "Streamlit"],
    impact: "Improved domain-specific response accuracy through custom fine-tuning and retrieval pipelines.",
    link: "Available on request"
  },
  {
    id: 3,
    name: "Plant Disease Detection using Computer Vision",
    description: "Built a CNN-based image classification system to detect and classify over 15 crop diseases using real-world agricultural images.",
    techStack: ["TensorFlow", "OpenCV", "CNNs", "TensorFlow Lite"],
    impact: "Achieved high classification accuracy and enabled edge/mobile inference for real-time field usage.",
    link: "Available on request"
  },
  {
    id: 4,
    name: "Automatic License Plate Recognition (ALPR) System",
    description: "Designed a real-time license plate detection and recognition pipeline using object detection and OCR.",
    techStack: ["YOLO", "OpenCV", "OCR", "Python"],
    impact: "Achieved ~96% detection accuracy and reduced manual processing through automated inference.",
    link: "Available on request"
  }
];

export const experience = [
  {
    id: 1,
    company: "University of Texas at Arlington",
    role: "Research Assistant",
    duration: "2025 – Present",
    achievements: [
      "Designed and deployed ML and GenAI models with integrated preprocessing, feature engineering, and evaluation pipelines.",
      "Automated Python + Spark workflows, reducing experiment and training time by ~30%.",
      "Published and presented research benchmarks in simulation and NLP-focused AI projects."
    ]
  },
  {
    id: 2,
    company: "University of Texas at Arlington",
    role: "Parking Enforcement Data Analyst",
    duration: "2024 – 2025",
    achievements: [
      "Analyzed large-scale parking and compliance datasets to identify demand patterns and policy gaps.",
      "Built SQL + Power BI dashboards for occupancy, violations, and revenue trends.",
      "Delivered actionable insights that informed operational and compliance strategy."
    ]
  },
  {
    id: 3,
    company: "Cognizant Technology Solutions",
    role: "Data Engineer",
    duration: "2022 – 2023",
    achievements: [
      "Built and optimized large-scale ETL and data ingestion pipelines using Spark, SQL, and Informatica.",
      "Improved processing performance by ~20% for enterprise analytics workloads.",
      "Deployed ML models with MLOps pipelines enabling monitoring, drift detection, and anomaly detection."
    ]
  },
  {
    id: 4,
    company: "TechVedika Software Pvt. Ltd.",
    role: "Software Engineering Intern",
    duration: "2020",
    achievements: [
      "Developed TensorFlow + OpenCV CNN models achieving ~96% accuracy for medical imaging diagnostics.",
      "Designed robust preprocessing and augmentation pipelines for real-time inference use cases."
    ]
  }
];

export const skills = {
  "Languages": [
    "Python",
    "R",
    "SQL",
    "Java",
    "C++"
  ],
  "ML/GenAI Frameworks": [
    "TensorFlow",
    "PyTorch",
    "Hugging Face Transformers",
    "Scikit-learn",
    "OpenCV"
  ],
  "Tools & DevOps": [
    "Anaconda",
    "Jupyter",
    "Git",
    "Visual Studio",
    "Docker",
    "CI/CD",
    "Airflow",
    "Kafka",
    "dbt",
    "Kubernetes"
  ],
  "Cloud": [
    "AWS (SageMaker, EC2, S3)",
    "GCP (Vertex AI, BigQuery)",
    "Microsoft Azure"
  ],
  "Data Engineering": [
    "SQL Server",
    "Hadoop",
    "Hive",
    "Apache Spark",
    "ETL Pipelines",
    "DataStage",
    "Informatica"
  ],
  "Data Analytics": [
    "Tableau",
    "Power BI",
    "Excel (Pivot, PowerQuery)",
    "Google Data Studio",
    "Matplotlib",
    "Seaborn"
  ],
  "Specialties": [
    "Prompt Engineering",
    "LLM Fine-tuning",
    "Transfer Learning",
    "Computer Vision",
    "MLOps",
    "Statistics",
    "Data Preprocessing"
  ]
};

export const writingPosts = [
  {
    title: "Another Revolution",
    slug: "another-revolution",
    filePath: "/content/writing/02-another-revolution.md"
  },
  {
    title: "The 'Real' Flagship by OnePlus",
    slug: "real-flagship-oneplus",
    filePath: "/content/writing/09-real-flagship-oneplus.md"
  },
  {
    title: "Internet for Everybody",
    slug: "internet-for-everybody",
    filePath: "/content/writing/04-internet-for-everybody.md"
  },
  {
    title: "The Big Question",
    slug: "the-big-question-ipad",
    filePath: "/content/writing/07-the-big-question.md"
  },
  {
    title: "Necessity or Being Ruled?",
    slug: "necessity-or-being-ruled",
    filePath: "/content/writing/05-necessity-or-being-ruled.md"
  },
  {
    title: "Tech for the Pandemic",
    slug: "tech-for-the-pandemic",
    filePath: "/content/writing/06-tech-for-the-pandemic.md"
  },
  {
    title: "Essential Software for Your Systems",
    slug: "essential-software-for-systems",
    filePath: "/content/writing/03-essential-software.md"
  },
  {
    title: "The 'G' Progress",
    slug: "g-progress",
    filePath: "/content/writing/08-the-g-progress.md"
  },
  {
    title: "5 Reasons to Keep Your Landline Phone",
    slug: "keep-your-landline-phone",
    filePath: "/content/writing/01-landline-phone.md"
  }
];

export const education = [
  {
    id: 1,
    institution: "University of Texas at Arlington",
    degree: "Master of Science in Computer Science",
    duration: "2023 - 2025",
    details: [
      "Specialization in Machine Learning and Artificial Intelligence",
      "Relevant Coursework: Deep Learning, Natural Language Processing, Computer Vision, MLOps",
      "Research focus on production ML systems and scalable AI architectures"
    ]
  },
  {
    id: 2,
    institution: "Vellore Institute of Technology",
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    duration: "2018 - 2022",
    details: [
      "Subjects: Machine Learning, Artificial Intelligence, Deep Learning, Analog and Digital Communications, Digital Signal Processing",
      "Projects in Computer Vision, IoT, Analytics and ML/DL",
      "Foundation in signal processing and communication systems"
    ]
  }
];
