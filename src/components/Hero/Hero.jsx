import HeroContent from "./HeroContent";
import HeroMedia from "./HeroMedia";

function Hero() {
  return (
    <section>
      <HeroContent
        label="Новая коллекция - 2026"
        title="Вещи, которые служат долго "
        description="Электроника, одежда, товары для дома и спорта - отобранные вручную
            позиции с честными характеристиками и быстрой доставкой."
      />

      <HeroMedia image="./public/hero1.jpg" productCount={9} />
    </section>
  );
}

export default Hero;
