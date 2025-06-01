import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          <span className="text-orange-500">Gearbox Shop</span>
          <br />
          Профессиональный ремонт автоматических трансмиссий
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Специализируемся на ремонте АКПП, вариаторов CVT, коробок DSG и
          роботизированных трансмиссий. Более 10 лет опыта и современное
          диагностическое оборудование.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Позвонить сейчас
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-white border-gray-300 hover:bg-gray-700 px-8 py-4 text-lg"
          >
            <Icon name="MapPin" size={20} className="mr-2" />
            Как добраться
          </Button>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Доверяют нам более 1000 клиентов
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-gray-500">⭐⭐⭐⭐⭐</div>
            <div className="text-sm text-gray-500">4.9/5 рейтинг</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
