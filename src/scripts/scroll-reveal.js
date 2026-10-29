import ScrollReveal from 'scrollreveal';

export default function initScrollReveal(defaultProps = null) {
  const targetElements = [
    {
      element: ".banner-text",
      animation: {
        delay: 400,
        origin: window.innerWidth > 768 ? "left" : "bottom",
        distance: "30px",
      },
    },
    {
      element: ".banner-cta",
      animation: {
        delay: 700,
        origin: window.innerWidth > 768 ? "left" : "bottom",
        distance: "30px",
      },
    },
    {
      element: ".section-title",
      animation: {
        delay: 200,
        distance: "20px",
        origin: "bottom",
      },
    },
    {
      element: ".section-content",
      animation: {
        delay: 400,
        distance: "20px",
        origin: "bottom",
      },
    },
  ];

  ScrollReveal({ reset: false });
  targetElements.forEach(({ element, animation }) => {
    ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
  });
}
