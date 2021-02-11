const POLLS = [
  {
    id: 123,
    title: "Which Programmming language You will choice",
    description:
      "There are lot of programming languages are available. You Chooose your One. And choose mine one",

    options: [
      { id: "2546", value: "C-Programming", vote: 0 },
      { id: "2458", value: "Java-Programming", vote: 0 },
      { id: "1258", value: "JavaScript-Programming", vote: 0 },
      { id: "6542", value: "Python-Programming", vote: 0 },
    ],
    created: new Date(),
    totalVote: 0,
    opinions: [],
  },
  {
    id: 456,
    title: "which frameworks u will choice..?",
    description:
      "There are lot of frameworks are available. You Chooose your One. And choose mine one",

    options: [
      { id: "2546", value: "React", vote: 0 },
      { id: "2458", value: "Vue", vote: 0 },
      { id: "1258", value: "Angular", vote: 0 },
    ],
    created: new Date(),
    totalVote: 0,
    opinions: [],
  },
  {
    id: 185,
    title: "Which backend framework you will choose",
    description:
      "There are lot of Backend languages are available. You Chooose your One. And choose mine one",

    options: [
      { id: "2546", value: "Node", vote: 0 },
      { id: "2458", value: "Django", vote: 0 },
      { id: "1258", value: "Laravel", vote: 0 },
    ],
    created: new Date(),
    totalVote: 0,
    opinions: [],
  },
];

export default POLLS;
