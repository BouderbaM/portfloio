// Configuration file for portfolio content
// Update this file to change portfolio content without touching component code

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Mohamed Bouderba",
    title: "Full-Stack Software Engineer",
    bio: "A dedicated Software Engineer with 5 years of experience in developing robust web applications for both government and private sectors. Proficient in the entire web development lifecycle, from concept to deployment and maintenance on Linux servers.",
    shortBio: "Passionate and results-driven Software Engineer specializing in building efficient and scalable full-stack web applications.",
  },

  // Contact Information
  contact: {
    email: "bouderbamohamed99@gmail.com",
    phone: "+213 796-497-579",
    linkedin: "https://linkedin.com/in/mohamed-bouderba-4ba74a351/",
    facebook: "https://facebook.com/bdm.mohame",
  },

  // Skills
  skills: [
    {
      category: "Back-end",
      icon: "Database",
      items: ["PHP", "Laravel", "Node.js"],
      color: "from-blue-500 to-blue-600",
    },
    {
      category: "Front-end",
      icon: "Code",
      items: ["JavaScript", "React", "Tailwind CSS"],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      category: "Systems & DevOps",
      icon: "Server",
      items: ["Linux (AlmaLinux)", "Web Server Hosting", "Server Management"],
      color: "from-purple-500 to-purple-600",
    },
    {
      category: "Other",
      icon: "Network",
      items: ["Computer Networks", "Telephony Networks", "Web Architecture"],
      color: "from-orange-500 to-orange-600",
    },
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "Citizen Complaints Portal for Mascara Province",
      description: "Developed a full-stack web portal to streamline the process for citizens to submit and track complaints and grievances to the local government. This platform improved transparency and response efficiency for public services.",
      technologies: ["Laravel", "React", "Tailwind CSS", "MySQL"],
      image: "https://via.placeholder.com/400x300?text=Citizen+Portal",
      // Replace image URL above with your screenshot
    },
    {
      id: 2,
      title: "Vehicle Gray Card Management System",
      description: "Engineered a secure and reliable management system for handling vehicle registration documents (\"Gray Cards\") at the state level. The system automates workflows, reduces manual paperwork, and enhances data accuracy for the Department of Motor Vehicles in Mascara.",
      technologies: ["Laravel", "JavaScript", "Tailwind CSS"],
      image: "https://via.placeholder.com/400x300?text=Gray+Card+System",
    },
    {
      id: 3,
      title: "Employee & Leave Management Application",
      description: "Built an internal web application for managing employee records, tracking annual leave requests, and streamlining HR approval processes. This led to a more organized and efficient administrative workflow.",
      technologies: ["Laravel", "React", "Node.js"],
      image: "https://via.placeholder.com/400x300?text=HR+Management",
    },
    {
      id: 4,
      title: "Annual Inventory Management System",
      description: "Created a comprehensive application for conducting and managing annual inventory audits. The system facilitates stock tracking, reporting, and data analysis for accurate asset management.",
      technologies: ["PHP", "Laravel", "JavaScript", "MySQL"],
      image: "https://via.placeholder.com/400x300?text=Inventory+System",
    },
  ],

  // CTA Message
  cta: {
    heading: "Interested in working together?",
    subheading: "Feel free to reach out! Whether you have a project in mind, need technical consultation, or just want to connect, I'd love to hear from you.",
  },
};

export default portfolioConfig;
