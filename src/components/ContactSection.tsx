import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-gray-300">
            Свяжитесь с нами для консультации и записи
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <Card className="bg-gray-700 border-gray-600">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <Icon name="User" size={24} className="mr-3 text-orange-500" />
                Мастер Влад
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center">
                <Icon name="Phone" size={20} className="text-orange-500 mr-4" />
                <div>
                  <p className="text-white font-semibold">+7 (988) 888-18-50</p>
                  <p className="text-gray-400 text-sm">
                    Ежедневно с 9:00 до 19:00
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Icon
                  name="MapPin"
                  size={20}
                  className="text-orange-500 mr-4 mt-1"
                />
                <div>
                  <p className="text-white font-semibold">г. Симферополь</p>
                  <p className="text-gray-300">ул. Жени Дерюгиной, 13Б</p>
                  <p className="text-gray-400 text-sm">Удобная парковка</p>
                </div>
              </div>

              <div className="flex items-center">
                <Icon name="Clock" size={20} className="text-orange-500 mr-4" />
                <div>
                  <p className="text-white font-semibold">Режим работы</p>
                  <p className="text-gray-300">Пн-Сб: 9:00 - 19:00</p>
                  <p className="text-gray-300">Вс: 10:00 - 16:00</p>
                </div>
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-6">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center bg-gray-700 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Бесплатная консультация</h3>
          <p className="text-gray-300 mb-6">
            Позвоните прямо сейчас и получите профессиональную консультацию по
            ремонту вашей трансмиссии
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            +7 (988) 888-18-50
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
