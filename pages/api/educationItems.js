export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      company: "Built Technologies",
      title: "Senior Software Engineer",
      date: "January 2023 - Present",
      summary: `As a React developer within a microservice architecture, I focus on creating efficient and streamlined components. 
            I play a crucial role in elevating the code quality standards of my team through thorough code reviews and constructive feedback. Collaborating within Agile Scrum teams, I work towards delivering high-quality software. 
            My expertise extends to a complex PHP environment, where I provide guidance to the team. Additionally, I improve code coverage by implementing comprehensive unit tests using Jest across the microservice architecture. 
            I ensure compliance with WCAG AA accessibility standards and contribute to continuous deployment and AC changes through a Go CI/CD pipeline.`,
    },
    {
      id: 2,
      company: "DEPT",
      title: "Software Engineer",
      date: "March 2021 - October 2022",
      summary: `In my role, I created reusable React components with customizable props to enhance flexibility. I streamlined financial planning software using Angular, improving usability and addressing performance issues. 
            Additionally, I architected and developed a web application for a major crypto organization, enabling customization of branding. 
            I actively contributed to Agile Scrum teams, delivering high-quality software, implementing end-to-end tests with Cypress and unit tests with Jest. 
            I ensured compliance with WCAG AA accessibility standards and contributed to continuous deployment and iterative design changes through a CI/CD pipeline.`,
    },
    {
      id: 3,
      company: "Fresenius Medical Care",
      title: "Senior UI/UX Developer",
      date: "December 2015 - March 2021",
      summary: `I successfully migrated an outdated site from Oracle's UCM to WordPress by utilizing a custom Node.js spider and the WordPress RESTful API for data injection. I integrated Bootstrap 4 to enhance the design. 
        Within Fresenius, I developed self-publishing solutions in WordPress for all divisions and seamlessly integrated WordPress login with Microsoft Active Directory for user authentication. I implemented a hybrid full-stack solution, using WordPress as the back-end and Angular as the front-end. 
        Additionally, I resolved security vulnerabilities identified through penetration testing, ensuring compliance with WCAG AA accessibility standards. My collaborative skills were put to use in Agile Scrum teams, contributing to efficient teamwork.`,
    },
    {
      id: 4,
      company: "Fidelity Investments",
      title: "Senior UI/UX Developer",
      date: "July 2014 - November 2015",
      summary: `In my role, I created a white-label wizard that enabled Fidelity's clients to have branded sales demos with customized experiences. I successfully managed workloads from multiple Agile project teams simultaneously, coordinating daily scrums. 
        Compliance with WCAG AA accessibility standards was a priority, and I fostered camaraderie and collaboration within teams to enhance productivity. Additionally, I developed a full-stack MEAN solution for an Executive Vice President, streamlining the management of business data.`,
    },
    {
      id: 5,
      company: "Medullan, Inc.",
      title: "Lead UI/UX Developer",
      date: "June 2013 - May 2014",
      summary: `As part of my responsibilities, I contributed to the development of scalable healthcare portals for major healthcare insurance agencies. 
        Active participation in daily scrums and adherence to Agile methodologies ensured efficient project execution. With a strong focus on compliance, I ensured that the portals met WCAG AA accessibility standards. 
        Additionally, I specialized in creating custom WordPress solutions that were meticulously tailored to cater to the specific requirements of clients.`,
    },
    {
      id: 6,
      company: "Southern New Hampshire University",
      title: "Bachelors of Computer Science",
      date: "2020",
      summary: "",
    },
  ]);
}
