export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      company: "Merit Circle",
      headshotUrl: "/images/testimonial/brandon.jpeg",
      title: "CTO",
      name: "Brandon Aaskov",
      summary: `I've learned over time that a large part of what separates a good project from a bad one is attitude and mentality, and one or more team members can drag down the whole team. 
        But the same is true in the other direction, and I've seen Derek single-handedly maintain a positive attitude in the face of a very difficult project, and it kept the whole team going.
        \n
        When we think of what it takes to be an engineer, it's a mix of hard skills and soft skills. Hard skills evolve as tech evolves, so that learning comes naturally. Soft skills come from empathy and understanding, and are much harder to "teach." 
        Spend 15 minutes talking to Derek and you'll realize you'll never have to worry about his soft skills: he's probably even better than you, dear reader ;)`,
    },
    {
      id: 2,
      company: "Fresenius Medical Care North America",
      headshotUrl: "/images/testimonial/dan.jpeg",
      title: "Sr. Director of User Experience Strategy",
      name: "Dan Sloat, PhD, BS RN",
      summary: `I have had the pleasure of working with Derek for several years at Fresenius. He was never afraid to learn and try new things, cared about his work and the people around him, always delivered, and was a great friend and collaborator. 
        He added to the productivity of our team and was a critical part of our team culture. Derek never said no to a challenge and was always willing to join me on any crazy branch I would climb out on. He has tremendous technical chops and is a great person. 
        Any team would be lucky to have him if they can get him!`,
    },
    {
      id: 3,
      company: "DEPT®",
      headshotUrl: "/images/testimonial/alex.jpeg",
      title: "Senior Software Engineer",
      name: "Alex Mohr",
      summary: `I had the pleasure of working with Derek on a Next.js project while at DEPT. Derek is a great engineer to work with. He excels at communication and quickly learning and adapting to technology he has not previously worked with. 
        Coming from an Angular background, Derek had no trouble picking up React and Next concepts to quickly provide tremendous value to the project. Given the opportunity, I would absolutely want Derek on my team again!`,
    },
    {
      id: 4,
      company: "",
      headshotUrl: "/images/testimonial/dave.jpeg",
      title: "Digital Agency Partner",
      name: "Brandon Aaskov",
      summary: `Derek has been a kind and caring member of the DEPT® team. Derek has a strong work ethic, solid command of engineering best practices, and a willingness to help out in any way that he can. Derek would be an excellent addition to any digital product team.`,
    },
  ]);
}
