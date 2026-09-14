import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  personal: {
    name: 'Purnima Baroi',
    title: 'Full Stack Developer & Software Engineer | MERN Stack Specialist',
    email: 'purniiiima@gmail.com',
    location: 'Rudrapur, Uttarakhand, India',
    social: [
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/purnima-baroi/',
        label: 'linkedin.com/in/purnima-baroi',
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/purniiiima',
        label: 'github.com/purniiiima',
      },
      {
        platform: 'LeetCode',
        url: 'https://leetcode.com/u/_purnima/',
        label: 'leetcode.com/u/_purnima',
      },
    ],
    summary:
      'Full Stack Software Engineer specializing in the MERN Stack (MongoDB, Express.js, React.js, Node.js) with proven commercial experience architecting role-based web systems, high-throughput REST APIs, and responsive front-end applications. Background spanning 4 industry internships across web development, mobile applications (Flutter), database optimization, and application testing.',
  },
  experiences: [
    {
      id: 'avsoftec',
      company: 'AVSOFTEC',
      role: 'Web Development & QA Intern',
      period: 'Jun 2026 – Aug 2026',
      type: 'Internship',
      location: 'Hybrid / Remote',
      points: [
        'Contributed across both software/web development and application testing, building responsive React interfaces and contributing to application feature development using Flutter.',
        'Executed structured functional testing, regression testing, and edge-case validation across core user workflows to verify expected system behavior.',
        'Identified, documented, and reported UI and functional defects, collaborating directly on fixes to elevate cross-platform quality and user experience.',
        'Utilized AI-assisted development tools to improve development efficiency, code debugging, and iterative engineering workflows.',
      ],
      technologies: ['React.js', 'Flutter', 'Application Testing', 'Regression Testing', 'AI-Assisted Dev Tools', 'JavaScript'],
      keyImpact: 'Delivered validated, responsive React & Flutter application interfaces while reducing defect escape rate through rigorous functional and regression test coverage.',
    },
    {
      id: 'qapla',
      company: 'Qapla IT Services LLP',
      role: 'Software Engineer Intern',
      period: 'Dec 2025 – Mar 2026',
      type: 'Internship',
      location: 'Gurugram / Remote',
      points: [
        'Architected optimized databases, secure authentication, and multi-role dashboards.',
        'Implemented frontend Role-Based Access Control (RBAC) with protected routing and conditional navigation logic.',
        'Developed end-to-end lifecycles for service requests, quotations, and work orders while optimizing UI performance.',
      ],
      technologies: ['React.js', 'RBAC', 'Authentication', 'Database Optimization', 'Workflow Systems', 'REST APIs'],
      keyImpact: 'Streamlined enterprise service request lifecycles from submission to work order dispatch while enforcing strict role boundaries.',
    },
    {
      id: 'to-let-globe',
      company: 'To-Let Globe',
      role: 'Backend Developer Intern',
      period: 'Aug 2024 – Oct 2024',
      type: 'Internship',
      location: 'Remote',
      points: [
        'Built property and location database systems, optimizing data retrieval for platform users.',
        'Enhanced scalable backend APIs and platform features following industry security protocols.',
        'Implemented structured query indexing to accelerate spatial and property lookup latency.',
      ],
      technologies: ['Node.js', 'Backend APIs', 'Database Indexing', 'API Security', 'Data Retrieval'],
      keyImpact: 'Accelerated property query retrieval times and fortified platform APIs against unauthorized access vulnerabilities.',
    },
    {
      id: 'f-salon',
      company: 'F Salon Academy LLP',
      role: 'Web Development Intern',
      period: 'Jul 2024 – Sept 2024',
      type: 'Internship',
      location: 'Remote',
      points: [
        'Improved responsive website features and custom UI components.',
        'Optimized mobile and desktop layouts to improve user experience across diverse devices.',
        'Refined layout performance, touch targets, and visual fidelity across client-facing touchpoints.',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UI Component Architecture'],
      keyImpact: 'Elevated cross-platform responsiveness and engagement through refined component styling and layout adaptations.',
    },
  ],
  projects: [
    {
      id: 'civicpulse',
      name: 'CivicPulse',
      tagline: 'Full-Stack Civic Platform for Reporting Community Issues with Role-Based Access',
      period: 'Aug 2026',
      technologies: ['React.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'JWT'],
      isMern: false,
      overview:
        'A full-stack municipal civic engagement platform empowering citizens to report community issues and enabling municipal authorities to track, assign, and resolve them transparently.',
      problem:
        'Citizens face friction and lack of visibility when reporting civic issues like broken infrastructure, sanitation, and safety hazards, while administrators lack structured triage tools.',
      solution:
        'Engineered a high-performance civic portal featuring JWT-authenticated role-based access, interactive issue assignment pipelines, upvoting mechanisms, comments, and status audit trails.',
      keyFeatures: [
        'Python/FastAPI REST APIs with asynchronous request handling and high throughput',
        'PostgreSQL relational schema modeling issues, departments, status transitions, and audit logs',
        'JWT-based role-based access control (Citizens vs Municipal Admin roles)',
        'Community engagement mechanisms: Upvoting, threaded comments, and real-time status updates',
        'Dynamic issue assignment workflows with priority classification',
      ],
      architecture: [
        'Client: TypeScript + React SPA with optimistic UI updates for votes and comments',
        'API Gateway: FastAPI routing layer with automated OpenAPI documentation and validation',
        'Database: PostgreSQL relational persistence with relational constraints and indexing',
        'Security: Stateless JWT authorization headers with bcrypt password hashing',
      ],
      contribution:
        'Sole architect and developer. Implemented complete FastAPI backend services, relational PostgreSQL schema, JWT authentication protocol, and React frontend with role-based view routing.',
      githubUrl: 'https://github.com/purniiiima/CivicPulse',
      imageFallbackLabel: 'CivicPulse System Interface & API Architecture',
      image: '/assets/projects/CivicPulse.png',
      imageCandidatePaths: ['/assets/CivicPulse.png', '/assets/projects/CivicPulse.png', '/assets/projects/civicpulse.png'],
      accentColor: '#405548',
    },
    {
      id: 'next-hire',
      name: 'Next Hire',
      tagline: 'Secure MERN Job Portal with Multi-Role Dashboards & Real-Time Tracking',
      period: 'Jun 2026',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Bcrypt', 'Cloudinary'],
      isMern: true,
      overview:
        'An enterprise-grade job recruitment platform built on the MERN stack facilitating end-to-end recruitment lifecycles with segregated dashboards for recruiters and applicants.',
      problem:
        'Standard hiring portals suffer from clunky media uploads, opaque application tracking, and inadequate separation between candidate submission and recruiter review workflows.',
      solution:
        'Developed a unified portal with authenticated applicant tracking, Cloudinary CDN asset processing for resume attachments, and multi-role dashboards with granular access control.',
      keyFeatures: [
        'Multi-role authentication engine utilizing JWT tokens and Bcrypt cryptographic hashing',
        'Dedicated recruiter dashboard for posting vacancies, screening candidates, and changing applicant status',
        'Applicant workspace providing real-time status tracking across application stages',
        'Seamless media asset pipelines integrated with Cloudinary for fast resume/portfolio ingestion',
        'MongoDB schema modeling jobs, candidates, applications, and recruiter profiles',
      ],
      architecture: [
        'Frontend: Modular React component hierarchy with responsive filtering and search',
        'Backend: Express.js REST API with middleware validation and token verification',
        'Storage: MongoDB Atlas with indexing on job tags, locations, and applicant IDs',
        'Media Pipeline: Cloudinary API handling secure multi-format document uploads',
      ],
      contribution:
        'Architected end-to-end MERN application, designed MongoDB schemas, built authentication and authorization middleware, and integrated Cloudinary media delivery.',
      githubUrl: 'https://github.com/purniiiima/job_portal',
      imageFallbackLabel: 'Next Hire Multi-Role Recruitment Portal',
      image: '/assets/projects/NextHire.png',
      imageCandidatePaths: ['/assets/NextHire.png', '/assets/projects/NextHire.png', '/assets/projects/nexthire.png'],
      accentColor: '#B56E4A',
    },
    {
      id: 'hospital-management',
      name: 'Hospital Management System',
      tagline: 'Location-Based Patient Booking & Medical Doctor Schedule Management',
      period: 'Dec 2024',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST API'],
      isMern: true,
      overview:
        'A full-stack healthcare coordination system streamlining patient consultations, geographic clinic discovery, and physician appointment scheduling.',
      problem:
        'Patients experience prolonged waiting times and booking confusion due to disconnected physician rosters and lack of localized clinic matching.',
      solution:
        'Built a centralized scheduling engine where patients locate nearby medical facilities, browse physician specialties and real-time availability slots, and book appointments seamlessly.',
      keyFeatures: [
        'Location-based clinic discovery and healthcare center directory',
        'Doctor schedule management with time-slot reservation and conflict avoidance logic',
        'Patient consultation booking with automated confirmation and status history',
        'Streamlined doctor-patient interaction interface designed for clarity and rapid adoption',
        'Optimized MongoDB records storing patient profiles, appointments, and doctor rosters',
      ],
      architecture: [
        'Frontend: Clean, high-contrast healthcare booking interface built in React',
        'Backend: Node.js / Express.js appointment scheduling service with slot validation',
        'Data Layer: MongoDB document structure preventing double-booking through atomic updates',
      ],
      contribution:
        'Engineered scheduling logic, integrated location-based lookup features, constructed REST APIs for appointments, and designed responsive React scheduling views.',
      githubUrl: 'https://github.com/purniiiima/Hospital-Appointment-Management-System',
      imageFallbackLabel: 'Hospital Scheduling & Provider Dashboard',
      image: '/assets/projects/Hospital_Management_System.jpg',
      imageCandidatePaths: ['/assets/Hospital_Management_System.jpg', '/assets/projects/Hospital_Management_System.jpg', '/assets/projects/hospital_management.jpg'],
      accentColor: '#1D1D1B',
    },
  ],
  additionalProjects: [
    {
      id: 'skillmint',
      title: 'SkillMint',
      name: 'SkillMint',
      category: 'Full Stack',
      date: 'May 2026',
      period: 'May 2026',
      tagline: 'Developer Skill Verification & Project Owner Collaboration Platform',
      description:
        'Full-stack collaboration and skill-verification platform connecting developers with project owners. Implemented JWT authentication, protected client routes, developer profile management, and applicant evaluation pipelines.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Bcrypt', 'Tailwind CSS'],
      isMern: true,
      features: [
        'Skill-based user and project compatibility matching algorithm',
        'JWT-secured authentication with bcrypt password hashing and protected routing',
        'Dynamic profile management allowing developers to showcase validated skills and active repositories',
        'Project lifecycle management with applicant tracking, submission reviews, and discussion threads',
      ],
      problemSolved:
        'Enables seamless developer collaboration by pairing contributors based on verifiable technical skills and open project requisites.',
      githubUrl: 'https://github.com/purniiiima/skillmint',
    },
    {
      id: 'techispot',
      title: 'Techispot',
      name: 'Techispot',
      category: 'Full Stack',
      date: 'Mar 2025',
      period: 'Mar 2025',
      tagline: 'Collaborative Tech Blogging & Developer Community Platform with Mentorship',
      description:
        'Collaborative tech blogging and developer community platform. Features interactive posts with real-time likes and comments, curated project showcases, and a dedicated mentor-connect module linking students with experienced engineers.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'REST APIs'],
      isMern: true,
      features: [
        'Mentor Connect module to link students with experienced industry engineers',
        'Interactive technical blogging with rich Markdown post creation, likes, and nested comments',
        'Curated project discovery feed categorized by engineering domains',
        'Secure user authentication and personalized user dashboard',
      ],
      problemSolved:
        'Fosters peer-to-peer technical mentorship and open knowledge exchange among student developers.',
      githubUrl: 'https://github.com/purniiiima/TechiSpot',
    },
    {
      id: 'astrologer-flow',
      title: 'Astrologer Flow Distribution',
      name: 'Astrologer Flow Distribution',
      category: 'Backend & System Design',
      date: 'Jan 2025',
      period: 'Jan 2025',
      tagline: 'Fair Distribution Queue & Request Balancer Algorithm System',
      description:
        'Backend system implementing equitable request allocation algorithms. Balances incoming user consultation sessions among available consultants while supporting dynamic top-tier priority toggling.',
      technologies: ['Node.js', 'Express.js', 'JavaScript', 'RESTful APIs', 'System Design'],
      isMern: false,
      features: [
        'Fair distribution algorithm for equitable real-time user request balancing',
        'Dynamic allocation weights supporting top-tier consultant priority toggles',
        'RESTful API endpoints for user request queuing and consultant lifecycle management',
        'Real-time assignment query and load distribution inspection endpoints',
      ],
      problemSolved:
        'Solves traffic bottlenecks and allocation skew in on-demand consultation queuing systems.',
      githubUrl: 'https://github.com/purniiiima/Astrologer-Flow-Distribution',
    },
    {
      id: 'student-report-api',
      title: 'Student Report API',
      name: 'Student Report API',
      category: 'Backend & API',
      date: 'Dec 2024',
      period: 'Dec 2024',
      tagline: 'Flask REST API for Batches, Students & Academic Performance Reports',
      description:
        'A Flask application providing structured RESTful endpoints for managing batches, students, subjects, and generating comprehensive reports based on student performance.',
      technologies: ['Python', 'Flask', 'MongoDB', 'REST APIs', 'Postman'],
      isMern: false,
      features: [
        'Create and manage batches with program details',
        'Add and retrieve student information',
        'Record subject details, including marks achieved and total marks',
        'Generate batch reports indicating the pass/fail status of each student',
        'Retrieve individual student scores for each subject',
      ],
      problemSolved:
        'Automates academic evaluation and batch performance report generation with dedicated endpoints (/batches, /students, /subjects, /reports).',
      githubUrl: 'https://github.com/purniiiima/StudentReport',
    },
    {
      id: 'task-tracker',
      title: 'Task Tracker App',
      name: 'Task Tracker App',
      category: 'Full Stack',
      date: 'Oct 2024',
      period: 'Oct 2024',
      tagline: 'Python Flask REST Backend & React Engineering Workspace',
      description:
        'Interactive task management web application powered by a Python Flask REST backend, a responsive React.js interface, and MongoDB database storage for managing engineering tasks with full CRUD operations.',
      technologies: ['React.js', 'Python', 'Flask', 'MongoDB', 'REST APIs', 'Postman'],
      isMern: false,
      features: [
        'Python Flask RESTful API endpoints for complete task CRUD lifecycles',
        'MongoDB document persistence for task statuses, deadlines, and priorities',
        'Responsive React frontend with instant task creation, editing, and state toggles',
        'CORS-enabled API architecture thoroughly tested and documented with Postman',
      ],
      problemSolved:
        'Provides a clean, lightweight personal productivity tracker with instantaneous state feedback.',
      githubUrl: 'https://github.com/purniiiima/Task-Tracker-App',
    },
    {
      id: 'expense-tracker',
      title: 'Personal Expense Tracker',
      name: 'Personal Expense Tracker',
      category: 'Frontend',
      date: 'Jul 2024',
      period: 'Jul 2024',
      tagline: 'Dynamic Daily Expense & Category Budget Tracker',
      description:
        'Responsive web application allowing users to track, categorize, and calculate daily expenses. Features custom category filtering, real-time dynamic total calculations, and clean visual records.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM Manipulation'],
      isMern: false,
      features: [
        'Form-based expense entry with amount, date, and category classification',
        'Formatted table display updating dynamically with real-time budget calculations',
        'Category breakdown for utilities, food, entertainment, and personal spending',
        'Clean, responsive layout with zero external dependencies',
      ],
      problemSolved:
        'Simplifies daily budget tracking with a fast, zero-dependency browser tool.',
      githubUrl: 'https://github.com/purniiiima/ExpenseTracker',
    },
  ],
  education: [
    {
      id: 'polaris',
      institution: 'Polaris School Of Technology (Starex University)',
      degree: 'B.Tech in Computer Science & Engineering',
      score: '9.27 SGPA',
      period: 'Aug 2023 – Present',
      location: 'Gurugram, Haryana',
      highlights: [
        'Consistent academic excellence with an outstanding 9.27 SGPA cumulative record.',
        'Deep focus on Algorithms, Data Structures, Software Engineering, Database Systems, and Distributed Computing.',
        'Active contributor in full-stack engineering labs and practical systems development.',
      ],
    },
    {
      id: 'guru-nanak-intermediate',
      institution: 'Shri Guru Nanak H/S Public School',
      degree: 'Senior Secondary / Intermediate (Class XII)',
      score: '76%',
      period: 'Completed Mar 2023',
      location: 'Rudrapur, Uttarakhand',
      highlights: [
        'Physics, Chemistry, and Mathematics curriculum foundation.',
        'Developed foundational analytical problem solving and computer science fundamentals.',
      ],
    },
    {
      id: 'guru-nanak-highschool',
      institution: 'Shri Guru Nanak H/S Public School',
      degree: 'High School (Class X)',
      score: '91%',
      period: 'Completed Mar 2021',
      location: 'Rudrapur, Uttarakhand',
      highlights: [
        'Graduated with high distinction (91% overall score).',
        'Excellence in Mathematics and Science disciplines.',
      ],
    },
  ],
  skills: [
    {
      title: 'MERN Stack (Core Specialization)',
      description: 'Primary full-stack architectural focus across production projects and applications.',
      skills: [
        { name: 'MongoDB', level: 'Advanced', context: 'Document modeling, Aggregation pipelines, Mongoose, Atlas' },
        { name: 'Express.js', level: 'Advanced', context: 'REST routing, Middleware, JWT auth verification, Error handlers' },
        { name: 'React.js', level: 'Advanced', context: 'Component hierarchies, Hooks, RBAC guards, State architecture' },
        { name: 'Node.js', level: 'Advanced', context: 'Asynchronous event loops, Server-side logic, API services' },
      ],
    },
    {
      title: 'Frontend Development',
      description: 'Web interfaces, accessibility, component systems, and responsive design.',
      skills: [
        { name: 'JavaScript (ES6+)', level: 'Advanced', context: 'Async/Await, Closures, DOM manipulation, Functional patterns' },
        { name: 'HTML5 & CSS3', level: 'Advanced', context: 'Semantic markup, Flexbox, CSS Grid, Responsive design' },
        { name: 'Tailwind CSS', level: 'Advanced', context: 'Utility architecture, Design tokens, Responsive layouts' },
      ],
    },
    {
      title: 'Backend & APIs',
      description: 'Microservices, RESTful interfaces, and token-based authentication.',
      skills: [
        { name: 'REST APIs', level: 'Advanced', context: 'Resource design, Status code standards, Request validation' },
        { name: 'FastAPI', level: 'Advanced', context: 'Asynchronous Python APIs, Pydantic schemas, OpenAPI' },
        { name: 'Flask', level: 'Proficient', context: 'Python web routing, Microservices, API endpoints' },
        { name: 'JWT & Bcrypt', level: 'Advanced', context: 'Role-based access tokens, Password cryptographic hashing' },
      ],
    },
    {
      title: 'Databases & Persistence',
      description: 'Relational and document storage solutions optimized for query performance and data integrity.',
      skills: [
        { name: 'PostgreSQL', level: 'Advanced', context: 'Relational schemas, Foreign keys, Complex joins, Indexing' },
        { name: 'MySQL', level: 'Proficient', context: 'Structured storage, Transactional integrity, Schema design' },
      ],
    },
    {
      title: 'Application Testing & Quality',
      description: 'Quality assurance workflows verified during commercial software engineering internship.',
      skills: [
        { name: 'Functional Testing', level: 'Advanced', context: 'Workflow verification, User story test case execution' },
        { name: 'Regression Testing', level: 'Advanced', context: 'Defect re-verification, Release build stability validation' },
        { name: 'Defect Analysis & Tracking', level: 'Advanced', context: 'Issue documentation, Root cause triage, Fix collaboration' },
        { name: 'Cross-Browser Validation', level: 'Advanced', context: 'Responsive viewport audits, Edge-case handling' },
      ],
    },
    {
      title: 'Additional Development & Mobile',
      description: 'Secondary development technologies and programming fundamentals.',
      skills: [
        { name: 'Flutter', level: 'Proficient', context: 'Mobile UI development, Cross-platform app features' },
        { name: 'Python', level: 'Advanced', context: 'Backend APIs, Scripting, Data structures & algorithms' },
        { name: 'Java', level: 'Proficient', context: 'Object-Oriented Programming (OOP), Data structures' },
      ],
    },
    {
      title: 'Tools & Utilities',
      description: 'Engineering toolchains, IDEs, API testers, and administrative consoles.',
      skills: [
        { name: 'Git & GitHub', level: 'Advanced', context: 'Version control, Branching workflows, Code reviews' },
        { name: 'Postman', level: 'Advanced', context: 'API contract testing, Mocking, Environment suites' },
        { name: 'MongoDB Compass', level: 'Advanced', context: 'Document queries, Index profiling, Collection audits' },
        { name: 'VS Code', level: 'Advanced', context: 'Primary development environment, Extensions, Debugging' },
        { name: 'AI-Assisted Dev Tools', level: 'Advanced', context: 'Workflow enhancement, Code debugging efficiency, Productivity' },
        { name: 'IntelliJ IDEA & PyCharm', level: 'Proficient', context: 'Java & Python IDE environments' },
        { name: 'AppSmith', level: 'Proficient', context: 'Rapid internal admin tooling & operational dashboards' },
      ],
    },
  ],
};
