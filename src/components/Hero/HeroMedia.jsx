import ProductCounter from "./ProductCounter.jsx";

function HeroMedia({ image, statLabel, statValue }) {
  return (
    <div className="relative">
      <img src={image} alt="Мастер сервисного центра"
      className="h-[380px] w-full rounded-2xl object-cover" />

      <ProductCounter label={statLabel} value={statValue} />
    </div>
  );
}

export default HeroMedia;
