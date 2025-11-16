import {
    // mobile,
    // backend,
    // creator,
    // web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    //redux,
    tailwind,
    nodejs,
    //mongodb,
    git,
    figma,
    //docker,
    
    threejs,
    swift,
    java,
    cpp,
    c,
    python,
    r,
    creatML,
    pytorch,
    tensorflow,
    numpy,
    rivian,
    tutor,
    artvision,
    hervision,
    bugtracker,
    knn,
    maze,
    imageproc,
    apple,
    logo,
    ubcLogo,
    wics,
  } from "../assets";
  
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "research",
      title: "Research",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  // const services = [
  //   {
  //     title: "Web Developer",
  //     icon: web,
  //   },
  //   {
  //     title: "React Native Developer",
  //     icon: mobile,
  //   },
  //   {
  //     title: "Backend Developer",
  //     icon: backend,
  //   },
  //   {
  //     title: "Content Creator",
  //     icon: creator,
  //   },
  // ];
  
  const technologies = [
    {
      name: "SwiftUI",
      icon: swift,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "R",
      icon: r,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
    {
      name: "TensorFlow",
      icon: tensorflow,
    },
    {
      name: "NumPy",
      icon: numpy,
    },
    {
      name: "CreateML",
      icon: creatML,
    },
  ];
  
  const research = [
    {
      title: "SONIC (CVPR 2026 Submission)",
      company_name: "Undergraduate Research Assistant — Computer Vision Lab, Department of Computer Science, UBC",
      icon: ubcLogo,
      iconBg: "#FFFFFF",
      date: "Sept. 2025 - Present",
      points: [
        "Co-authored SONIC: Spectral Optimization of Noise for Inpainting with Consistency (CVPR 2026 submission)",
        "Assisted in developing a training-free inpainting method using Stable Diffusion 3.5 by exploring optimization of the initial seed noise",
        "Helped implement spectral-domain noise optimization and linearized denoising trajectories under guidance from senior researchers",
        "Supported large-scale experiments and evaluations on FFHQ, DIV2K, and BrushBench using PyTorch, CUDA, and UBC compute clusters"
      ],
    },
    {
      title: "Training-free Video Diffusion Inpainting (Honours Thesis)",
      company_name: "Undergraduate Research Assistant — Computer Vision Lab, Department of Computer Science, UBC",
      icon: ubcLogo,
      iconBg: "#FFFFFF",
      date: "Sept 2025 - Present",
      points: [
        "Extending training-free image-based seed noise optimization to video diffusion models (Wan2.1, LTX-lite), enabling temporally consistent video inpainting",
        "Exploring per-frame masked optimization and temporal noise initialization strategies to reduce flickering and maintain object/scene coherence across video sequences",
        "Implementing pipeline for video editing and generation tasks using deterministic schedulers with optimized seed initialization"
      ],
    },
  ];

  const experiences = [
    {
      title: "Undergraduate Teaching Assistant — CPSC 310 Software Engineering",
      company_name: "University of British Columbia",
      icon: ubcLogo,
      iconBg: "#FFFFFF",
      date: "Sept 2025 - Present",
      points: [
        "Led four lab sections and mentored 15+ project teams developing full-stack web applications; guided students as scrum master through live code walkthroughs and problem-solving sessions",
        "Conducted office hours and lectures supporting students in test-driven development, RESTful API design, and advanced object-oriented/software design patterns"
      ],
    },
    {
      title: "Software Engineer Intern — Video Apps Team",
      company_name: "Apple",
      icon: apple,
      iconBg: "#FFFFFF",
      date: "May 2025 - August 2025",
      points: [
        "Developed and delivered three new video and audio features enhancing user experience for Final Cut Pro, scheduled to ship in upcoming product releases",
        "Integrated a reusable framework in collaboration with cross-functional teams, establishing a foundation for adoption across multiple teams within Apple",
        "Presented feature demos to senior leadership across the Video Apps organization"
      ],
    },
    {
      title: "Undergraduate Teaching Assistant — CPSC 221 Algorithms and Data Structures",
      company_name: "University of British Columbia",
      icon: ubcLogo,
      iconBg: "#FFFFFF",
      date: "Jan 2025 - Apr 2025",
      points: [
        "Led two lab sections of 20 students each, delivering live code walkthroughs and hands-on problem-solving in C++",
        "Guided students in understanding data structures, algorithms, and C++ programming",
        "Held office hours, supporting students with course concepts, programming assignments, and problem sets"
      ],
    },
    {
      title: "Mentor",
      company_name: "UBC Women in Computer Science (WiCS)",
      icon: wics,
      iconBg: "#FFFFFF",
      date: "Sept 2024 - Apr 2025",
      points: [
        "Mentored eight junior undergraduates in CS on academic pathways, technical skills, and career development"
      ],
    },
    {
      title: "Software Engineer Intern — Video Apps Team",
      company_name: "Apple",
      icon: apple,
      iconBg: "#FFFFFF",
      date: "May 2024 - August 2024",
      points: [
        "Built and introduced a new video content creation tool leveraging AVFoundation, Vision and Apple internal frameworks",
        "Designed and developed a new video editing feature for Final Cut Pro on iPad using Swift/SwiftUI and Objective-C",
        "Presented the feature demo to leadership and the broader organization, and delivered comprehensive technical documentation to support the implementation"
      ],
    },
    {
      title: "Software Engineer Intern, iOS Developer — Mobile Apps Team",
      company_name: "Rivian Automotive",
      icon: rivian,
      iconBg: "#383E56",
      date: "Sept 2023 - April 2024",
      points: [
        "Developed and shipped new features for Rivian's mobile app, using Swift/SwiftUI and the Combine framework and enabled seamless vehicle integration",
        "Worked with the QA team to implement automation testing with Appium, and made improvements to the production code through code reviews and unit testing"
      ],
    },
    {
      title: "Computer Science and Mathematics Tutor",
      company_name: "UBC My Sky Tutoring",
      icon: tutor,
      iconBg: "#E6DEDD",
      date: "Sept 2022 - Aug 2023",
      points: [
        "Tutored Mathematics and Computer Science courses; created individualized learning plans to support diverse student needs and skill levels"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    
  ];
  
  const projects = [
    {
      name: "ArtVision AI",
      description:
        "ArtVision AI is an iOS app that merges technology and art. It empowers users to create AI-generated artworks through an intuitive interface. With machine learning and user-friendly design, ArtVision AI transforms creativity.",
      tags: [
        {
          name: "swiftUI",
          color: "blue-text-gradient",
        },
        {
          name: "coreML",
          color: "green-text-gradient",
        },
        {
          name: "openAI api",
          color: "pink-text-gradient",
        },
        {
          name: "mapKit",
          color: "blue-text-gradient",
        },
      ],
      image: artvision,
      source_code_link: "https://github.com/Shadannamazi/ArtVision-AI",
    },
    {
      name: "HerVision",
      description:
        "An iOS e-commerce app offering browsing, cart management, profile customization, and checkout. Empowers users to explore styles, mix wardrobe pieces, and globally share outfits. Search Aritzia's database with added security.",
      tags: [
        {
          name: "swiftUI",
          color: "blue-text-gradient",
        },
        {
          name: "xCode",
          color: "green-text-gradient",
        },
        
      ],
      image: hervision,
      source_code_link: "https://github.com/Shadannamazi/HerVision",
    },
    {
      name: "Bug Tracker Application",
      description:
        "This desktop bug tracking app logs and manages encountered bugs. Developers can add issue details, severity, assignees, and progress. It tracks repetitive issues and maintains bug history in one place.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "swing",
          color: "green-text-gradient",
        },
        {
          name: "json",
          color: "pink-text-gradient",
        },
      ],
      image: bugtracker,
      source_code_link: "https://github.com/Shadannamazi/BugTrackerApp",
    },
    {
      name: "Heart Disease Predictor",
      description:
        "This project revolves around leveraging KNN classification to predict the presence of heart disease in new patients. By analyzing critical clinical factors like age, serum cholesterol levels, and maximum heart rate achieved, a predictive model was developed. ",
      tags: [
        {
          name: "R",
          color: "blue-text-gradient",
        },
        {
          name: "Jupyter Notebook",
          color: "green-text-gradient",
        },
        {
          name: "KNN classification",
          color: "pink-text-gradient",
        },
      ],
      image: knn,
      source_code_link: "https://github.com/Shadannamazi/Heart-Disease-Predictor",
    },
    {
      name: "HexMaze Solver",
      description:
        "A C++ program that introduces a unique approach to maze-solving by tackling hexagonal mazes using DFS algorithm. With a visual representation of HexBoard comprising hexagons with axial coordinates, it efficiently navigates complex pathways.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "DFS",
          color: "green-text-gradient",
        },
        {
          name: "data structures",
          color: "pink-text-gradient",
        },
      ],
      image: maze,
      source_code_link: "https://github.com/Shadannamazi/HexMaze-Solver",
    },
    {
      name: "Image Processor App",
      description:
        "Powered by Python, Tkinter, Pygame, and Numpy, this tool offers an intuitive GUI to apply dynamic filters and effects to images. Elevate your visuals effortlessly, exploring a world of creative possibilities in just a few clicks.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "Tkinter",
          color: "green-text-gradient",
        },
        {
          name: "Pygame",
          color: "pink-text-gradient",
        },
      ],
      image: imageproc,
      source_code_link: "https://github.com/Shadannamazi/Image-Processor-App",
    },
  ];
  
  export { technologies, experiences, research, testimonials, projects };