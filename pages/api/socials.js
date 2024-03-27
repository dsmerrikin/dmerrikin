export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: "Facebook",
      icon: `fa-facebook`,
      url: "https://www.facebook.com/cascadingsweetandsavory/",
    },
    {
      id: 2,
      title: "Instagram",
      icon: `fa-square-instagram`,
      url: `https://www.instagram.com/cascading_sweet_and_savory/`,
    },
    {
      id: 4,
      title: "LinkedIn",
      icon: `fa-linkedin`,
      url: `https://www.linkedin.com/in/dmerrikin/`,
    },
  ]);
}
