import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      title: "АКПП",
      description:
        "Диагностика и ремонт классических автоматических коробок передач всех марок автомобилей",
      icon: "Settings",
      features: [
        "Замена масла и фильтров",
        "Ремонт гидроблока",
        "Замена соленоидов",
        "Капитальный ремонт",
      ],
    },
    {
      title: "Вариаторы CVT",
      description:
        "Специализированный ремонт бесступенчатых трансмиссий с использованием оригинальных запчастей",
      icon: "Zap",
      features: [
        "Замена ремня/цепи",
        "Ремонт конусов",
        "Замена насоса",
        "Программирование",
      ],
    },
    {
      title: "DSG",
      description:
        "Профессиональный ремонт роботизированных коробок Volkswagen Group и других производителей",
      icon: "Cpu",
      features: [
        "Замена сцеплений",
        "Ремонт мехатроника",
        "Адаптация",
        "Обновление ПО",
      ],
    },
    {
      title: "Роботы",
      description:
        "Диагностика и восстановление роботизированных трансмиссий различных типов и производителей",
      icon: "Cog",
      features: [
        "Замена актуаторов",
        "Ремонт сцепления",
        "Калибровка",
        "Диагностика блоков",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600">
            Комплексный ремонт трансмиссий любой сложности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow border-gray-200"
            >
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon
                      name={service.icon}
                      size={24}
                      className="text-orange-600"
                    />
                  </div>
                  <CardTitle className="text-2xl text-gray-800">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-600 mr-3 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
