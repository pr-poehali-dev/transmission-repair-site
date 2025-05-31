import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const advantages = [
    {
      icon: "Clock",
      title: "10+ лет опыта",
      description: "Работаем с трансмиссиями с 2013 года",
    },
    {
      icon: "Wrench",
      title: "Современное оборудование",
      description: "Диагностические стенды и специнструмент",
    },
    {
      icon: "Award",
      title: "Гарантия качества",
      description: "6 месяцев гарантии на все виды работ",
    },
    {
      icon: "Users",
      title: "1000+ довольных клиентов",
      description: "Высокий рейтинг и положительные отзывы",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600">
            Профессионализм и надежность в каждой детали
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="text-center border-gray-200 hover:shadow-md transition-shadow"
            >
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={advantage.icon}
                    size={28}
                    className="text-gray-700"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Современная диагностика</h3>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            Используем профессиональные диагностические комплексы для точного
            определения неисправностей. Компьютерная диагностика позволяет
            выявить проблемы на ранней стадии и сэкономить на ремонте.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-gray-700 px-4 py-2 rounded-lg">
              Launch X431
            </span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg">
              Autel MaxiSys
            </span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg">
              Стенд проверки АКПП
            </span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg">
              Осциллограф
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
