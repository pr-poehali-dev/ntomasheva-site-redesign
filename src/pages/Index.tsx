import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">ntomasheva.ru</div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#cases" className="text-foreground hover:text-primary transition-colors">Кейсы</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>Получить консультацию</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-white to-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Наталья Томашёва
          </h1>
          <p className="text-2xl text-primary mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Эксперт по системному росту и внедрению ИИ
          </p>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            Помогаю бизнесу внедрять ИИ и выстраивать системные процессы роста
          </p>
          <Button size="lg" className="animate-scale-in" style={{animationDelay: '0.4s'}}>
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Получить консультацию
          </Button>
        </div>
      </section>

      {/* Statistics */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">280+</div>
                <div className="text-muted-foreground">команд за 5 лет</div>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">21 млрд ₽</div>
                <div className="text-muted-foreground">общий годовой оборот клиентов</div>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">лет экспертизы в ИИ</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-20 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="pt-6">
                <Icon name="Target" className="mb-4 text-primary" size={40} />
                <h3 className="text-xl font-semibold mb-3">Бизнес-трекинг</h3>
                <p className="text-muted-foreground mb-4">Сопровождение и контроль реализации стратегии</p>
                <Button variant="outline" size="sm">Подробнее</Button>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="pt-6">
                <Icon name="Users" className="mb-4 text-primary" size={40} />
                <h3 className="text-xl font-semibold mb-3">Стратегические сессии</h3>
                <p className="text-muted-foreground mb-4">Проработка ключевых вопросов с командой</p>
                <Button variant="outline" size="sm">Подробнее</Button>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="pt-6">
                <Icon name="Bot" className="mb-4 text-primary" size={40} />
                <h3 className="text-xl font-semibold mb-3">Внедрение ИИ</h3>
                <p className="text-muted-foreground mb-4">От диагностики до масштабирования решений</p>
                <Button variant="outline" size="sm">Подробнее</Button>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="pt-6">
                <Icon name="Zap" className="mb-4 text-primary" size={40} />
                <h3 className="text-xl font-semibold mb-3">Экспресс-решения</h3>
                <p className="text-muted-foreground mb-4">Быстрые решения текущих задач</p>
                <Button variant="outline" size="sm">Подробнее</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases Preview */}
      <section id="cases" className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Кейсы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Автоматизация процессов</h3>
                <p className="text-muted-foreground mb-4">Сократили время обработки заявок на 70%</p>
                <div className="text-primary font-semibold">+15% эффективности</div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Внедрение ИИ-аналитики</h3>
                <p className="text-muted-foreground mb-4">Повысили точность прогнозов продаж</p>
                <div className="text-primary font-semibold">+25% точность</div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Оптимизация команды</h3>
                <p className="text-muted-foreground mb-4">Выстроили прозрачные процессы</p>
                <div className="text-primary font-semibold">+30% производительность</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section id="about" className="px-6 py-20 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">FOXMetoD</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы специализируемся на системном подходе к росту бизнеса. 
                Наша методология основана на принципах прозрачности, измеримости результатов 
                и внедрении передовых технологий.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Подход</h4>
                  <p className="text-sm text-muted-foreground">Системный анализ и внедрение</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Фокус</h4>
                  <p className="text-sm text-muted-foreground">Измеримые результаты</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <CardContent className="pt-4">
                  <Icon name="Award" className="mx-auto mb-2 text-primary" size={24} />
                  <div className="text-sm font-medium">Экспертность</div>
                </CardContent>
              </Card>
              <Card className="p-4 text-center">
                <CardContent className="pt-4">
                  <Icon name="Shield" className="mx-auto mb-2 text-primary" size={24} />
                  <div className="text-sm font-medium">Надежность</div>
                </CardContent>
              </Card>
              <Card className="p-4 text-center">
                <CardContent className="pt-4">
                  <Icon name="TrendingUp" className="mx-auto mb-2 text-primary" size={24} />
                  <div className="text-sm font-medium">Рост</div>
                </CardContent>
              </Card>
              <Card className="p-4 text-center">
                <CardContent className="pt-4">
                  <Icon name="Lightbulb" className="mx-auto mb-2 text-primary" size={24} />
                  <div className="text-sm font-medium">Инновации</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Контакты</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Icon name="Mail" className="mr-3 text-primary" size={20} />
                  <span>info@ntomasheva.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MessageCircle" className="mr-3 text-primary" size={20} />
                  <a href="https://t.me/natalyatomasheva" className="text-primary hover:underline">
                    @natalyatomasheva
                  </a>
                </div>
              </div>
              <Button className="w-full" size="lg">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Написать в Telegram
              </Button>
            </div>
            
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6">Запросить диагностику</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Имя" />
                    <Input placeholder="Компания" />
                  </div>
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Telegram" />
                  <Textarea placeholder="Сообщение" rows={4} />
                  <Button type="submit" className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">ntomasheva.ru</h4>
              <p className="text-sm opacity-80">
                Системный рост и внедрение ИИ для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Бизнес-трекинг</li>
                <li>Стратегические сессии</li>
                <li>Внедрение ИИ</li>
                <li>Экспресс-решения</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Методология</li>
                <li>Команда</li>
                <li>Кейсы</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>info@ntomasheva.ru</li>
                <li>@natalyatomasheva</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-60">
            © 2024 ntomasheva.ru. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;