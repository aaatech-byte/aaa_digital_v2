import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


type Job = {
  id: string;
  title: string;
  category: string;
  type: string;
  description: string;
  responsibilities: string[];
  skills: string[];
};

const jobs: Job[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    category: 'Web Development',
    type: 'Full-time',
    description: 'Build responsive UIs using React.',
    responsibilities: ['Develop user interfaces', 'Collaborate with designers', 'Optimize applications', 'Write clean code', 'Code reviews', 'Maintain documentation', 'Industry updates'],
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Git']
  },
  {
    id: '2',
    title: 'UI/UX Designer',
    category: 'Digital Design',
    type: 'Contract',
    description: 'Design user experiences using Figma.',
    responsibilities: ['User research', 'Create wireframes', 'Design prototypes', 'Developer collaboration', 'User testing', 'Design iterations', 'Trend analysis'],
    skills: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Usability Testing']
  },
  {
    id: '3',
    title: "Software Development Intern",
    category: "Web Development",
    type: "Full-time Internship",
    description: "Gain hands-on experience in developing cutting-edge web applications while working with our senior development team.",
    responsibilities: [
      "Assist in development and maintenance of web applications",
      "Write clean, documented code using modern frameworks",
      "Collaborate with UX/UI designers and product managers",
      "Participate in code reviews and testing procedures",
      "Help troubleshoot and debug existing systems",
      "Contribute to technical documentation",
      "Attend daily standups and sprint planning meetings"
    ],
    skills: [
      "Basic understanding of JavaScript/TypeScript",
      "Familiarity with React or Angular frameworks",
      "Knowledge of REST API concepts",
      "Strong problem-solving abilities",
      "Excellent communication skills",
      "Ability to work in team environment",
      "Currently pursuing Computer Science degree"
    ]
  },
  {
    id: '4',
    title: "Technical Project Manager",
    category: "Management",
    type: "Full-time",
    description: "Optimize the performance of our company's Computer Information Systems and ensure project success.",
    responsibilities: [
      "Manage end-to-end project execution with cross-functional teams",
      "Develop comprehensive project plans aligning with business objectives",
      "Monitor and report on project milestones using JIRA/Asana",
      "Facilitate communication between technical and non-technical stakeholders",
      "Conduct risk analysis and implement mitigation strategies",
      "Manage project budgets up to $500k",
      "Oversee vendor negotiations and procurement processes"
    ],
    skills: [
      "Bachelor's in Computer Science or related field",
      "PMP or Scrum Master certification",
      "5+ years IT project management experience",
      "Expertise in SDLC methodologies",
      "Advanced JIRA/Confluence proficiency",
      "Strong financial analysis skills",
      "Excellent conflict resolution abilities"
    ]
  },
  {
    id: '5',
    title: "Sales Executive",
    category: "Sales",
    type: "Full-time",
    description: "Drive enterprise software sales through strategic relationship building.",
    responsibilities: [
      "Identify key accounts",
      "Quarterly sales planning",
      "Custom proposal development",
      "C-level negotiations",
      "Sales pipeline management",
      "Market analysis",
      "Cross-team collaboration"
    ],
    skills: [
      "5+ years tech sales experience",
      "CRM expertise (Salesforce)",
      "MEDDIC methodology",
      "Contract negotiation",
      "Public speaking",
      "MBA preferred",
      "Proven track record"
    ]
  },
  {
    id: '6',
    title: "IT Operations Manager",
    category: "Management",
    type: "Full-time",
    description: "Oversee global IT infrastructure and lead team of system administrators.",
    responsibilities: [
      "Budget planning ($2M+)",
      "Disaster recovery planning",
      "Vendor management",
      "Security compliance",
      "Team leadership (10+ staff)",
      "Technology roadmap",
      "Incident response"
    ],
    skills: [
      "CISSP certification",
      "Cloud migration experience",
      "ITIL framework",
      "Network architecture",
      "6+ years experience",
      "Cross-functional leadership",
      "Crisis management"
    ]
  }
]

const Careers: React.FC = () => {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [showAllButton, setShowAllButton] = useState<boolean>(false);
  const navigate = useNavigate();
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleFilter = (category: string) => {
    const filtered = jobs.filter(job => job.category === category);
    setFilteredJobs(filtered);
    setShowAllButton(true);
  };

  const toggleDetails = (id: string) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  const applyNow = (id: string) => {
    navigate(`/job-application?id=${id}`);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (expandedJobId && cardRefs.current[expandedJobId] && !cardRefs.current[expandedJobId]?.contains(event.target as Node)) {
      setExpandedJobId(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expandedJobId]);

  return (
    <div className="min-h-screen p-6 pt-36 bg-gradient-primary">
      <h2 className="mb-6 text-3xl font-bold text-center text-white font-orbitron">Current <span className='text-yellow'>
        Openings</span></h2>
      <div className="flex flex-wrap justify-center mb-6 space-x-4 ">
        {['Web Development', 'Digital Design', 'Sales', 'Management'].map((category) => (
          <button
            key={category}
            className="px-4 py-2 mb-2 font-semibold text-white transition-all duration-150 ease-linear scale-95 rounded-lg shadow-lg hover:scale-100 hover:text-yellow bg-primary hover:bg-secondary sm:mb-0"
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>



      <div id="jobs-list" className="max-w-4xl mx-auto space-y-4">
        {filteredJobs.map((job) => (
          <div key={job.id} className="p-4 shadow-xl bg-primary backdrop-blur-lg rounded-xl" ref={el => cardRefs.current[job.id] = el}>
            <div className="flex items-center justify-between p-3 transition-all duration-300 rounded-lg cursor-pointer hover:bg-white/5" onClick={() => toggleDetails(job.id)}>
              <span className="text-lg font-semibold text-white font-orbitron">{job.title}</span>
              <button
                className="px-3 py-1 font-semibold text-[#FFFFFF] border  transition-all duration-300 rounded-lg bg-primary hover:bg-gradient-primary"
              >
                {expandedJobId === job.id ? '-' : '+'}
              </button>
            </div>

            {expandedJobId === job.id && (
              <div className="mt-3 text-white">
                <table className="w-full mb-3">
                  <tbody>
                    <tr>
                      <td className="text-lg font-medium text-white font-orbitron">Position:</td>
                      <td>{job.title}</td>
                    </tr>
                    <tr>
                      <td className="text-lg font-medium text-white font-orbitron">Category:</td>
                      <td>{job.category}</td>
                    </tr>
                    <tr>
                      <td className="text-lg font-medium text-white font-orbitron" >Type:</td>
                      <td>{job.type}</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mb-4 text-lg font-bold text-yellow ">{job.description}</p>

                <div className="mb-4">
                  <h3 className="mb-2 text-xl font-semibold text-white font-orbitron">Responsibilities:</h3>
                  <ul className="space-y-2">
                    {job.responsibilities.map((res, index) => (
                      <li key={index} className="text-white"><span className="pr-1.5 font-bold text-yellow ">•</span> {res}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold text-white font-orbitron">Required Skills:</h3>
                  <ul className="space-y-2">
                    {job.skills.map((skill, index) => (
                      <li key={index} className="text-[#FFFFFF]"><span className="font-bold text-yellow pr-1.5">✓</span> {skill}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-end">
                  <button
                    className="border px-4 py-2 mt-4 font-semibold transition-all duration-300 rounded-lg text-[#FFFFFF] bg-primary hover:bg-secondary"
                    onClick={() => navigate('/job-application')}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {showAllButton && (
        <button
          className="block px-5 py-2 mx-auto my-6 font-semibold text-purple-900 transition-all duration-300 bg-white rounded-lg shadow-lg hover:bg-purple-50"
          onClick={() => {
            setFilteredJobs(jobs);
            setShowAllButton(false);
          }}
        >
          All Careers
        </button>
      )}
    </div>
  );
};

export default Careers;
