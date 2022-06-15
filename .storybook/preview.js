export const parameters = {
  layout: "centered",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Introduction",
        "README",
        "UI Components",
        "Design Concepts",
        ["UX & UI", "Styling", "Responsiveness", "Accessibility"],
        "Web Fundamental",
        [
          "HTML",
          ["Basics", "Syntax", "Clean Code", "Quiz"],
          "CSS",
          "JavaScript",
          "React",
        ],
        "Demo",
      ],
    },
  },
};
