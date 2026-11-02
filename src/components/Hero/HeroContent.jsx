import HeroActions from "./HeroActions.jsx";

function HeroContent({ label, title, description }) {
  return (
    <div>
      <p>{label}</p>

      <h1>{title}</h1>

      <p>{description}</p>

      <HeroActions />
    </div>
  );
}

export default HeroContent;