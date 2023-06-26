export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: "Custom Web Application Development",
      icon: "fa-globe",
      summary: `Transform your ideas into reality with tailored web application development. I'll leverage my software engineering expertise to create scalable, secure, and user-friendly web applications that precisely meet your unique needs.`,
    },
    {
      id: 2,
      title: "Code Review and Best Practices Consultation",
      icon: "fa-people-arrows",
      summary: `Ensure your codebase is of the highest quality with code review and best practices consultation. I'll analyze your code, identify potential issues, and provide suggestions for improvement. Let me help you optimize your software for reliability, maintainability, and efficiency.`,
    },
    {
      id: 3,
      title: "Technical Consulting and Architecture Design",
      icon: "fa-sitemap",
      summary: `Make informed decisions about your software architecture with expert technical consulting. I'll guide you in choosing the right technologies, frameworks, and approaches to build robust and scalable web solutions. Benefit from my knowledge and experience to create a solid foundation for your digital projects.`,
    },
    {
      id: 4,
      title: "Performance Optimization and Debugging",
      icon: "fa-bolt",
      summary: `Boost the performance and responsiveness of your web applications with performance optimization and debugging services. I'll identify bottlenecks, optimize your code and database queries, and implement strategies to enhance user experience. Let's ensure your web applications are lightning-fast and highly efficient.`,
    },
  ]);
}
