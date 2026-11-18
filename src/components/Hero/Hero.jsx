import HeroContent from "./HeroContent";
import HeroMedia from "./HeroMedia";

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1
      items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-20">
      <HeroContent
        label="Сервисный центр · с 2015 года"
        title="Ремонт техники быстро и с гарантией"
        description="Ремонтируем смартфоны, ноутбуки, телевизоры и бытовую технику.
            Бесплатная диагностика, оригинальные запчасти и гарантия на работы."
      />

      <HeroMedia image="/electronics.jpg" statLabel="Отремонтировано устройств" statValue="5 000+" />
      </div>
    </section>
  );
}

export default Hero;
