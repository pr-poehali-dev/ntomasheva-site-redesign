import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-primary">ntomasheva.ru</a>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">О себе</a>
            <a href="/services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="/cases" className="text-foreground hover:text-primary transition-colors">Кейсы</a>
            <a href="/contact" className="text-primary font-medium">Контакты</a>
          </div>
          <Button>Получить консультацию</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-white to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-8 animate-fade-in">
            Контакты
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{animationDelay: '0.2s'}}>
            Свяжитесь со мной для обсуждения вашего проекта
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Как со мной связаться
              </h2>
              
              <div className="space-y-6 mb-12">
                <Card className="p-6">
                  <CardContent className="pt-0">
                    <div className="flex items-start space-x-4">
                      <Icon name="MessageCircle" className="text-primary mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold mb-2">Telegram</h3>
                        <p className="text-muted-foreground mb-3">
                          Самый быстрый способ связи — пишу обычно в течение часа
                        </p>
                        <a 
                          href="https://t.me/natalyatomasheva" 
                          className="text-primary hover:underline font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @natalyatomasheva
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="pt-0">
                    <div className="flex items-start space-x-4">
                      <Icon name="Mail" className="text-primary mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-muted-foreground mb-3">
                          Для официальной переписки и отправки документов
                        </p>
                        <a 
                          href="mailto:info@ntomasheva.ru" 
                          className="text-primary hover:underline font-medium"
                        >
                          info@ntomasheva.ru
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="pt-0">
                    <div className="flex items-start space-x-4">
                      <Icon name="Clock" className="text-primary mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold mb-2">Время ответа</h3>
                        <p className="text-muted-foreground">
                          Telegram: в течение 1-2 часов в рабочее время<br/>
                          Email: в течение 24 часов
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-4">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => window.open('https://t.me/natalyatomasheva', '_blank')}
                >
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Написать в Telegram
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full" 
                  size="lg"
                  onClick={() => window.location.href = 'mailto:info@ntomasheva.ru'}
                >
                  <Icon name="Mail" className="mr-2" size={20} />
                  Отправить email
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <CardContent className="pt-0">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Оставить заявку
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Расскажите о вашем проекте, и я свяжусь с вами в течение дня
                  </p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Имя *
                        </label>
                        <Input placeholder="Ваше имя" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Компания
                        </label>
                        <Input placeholder="Название компании" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email *
                      </label>
                      <Input type="email" placeholder="your@email.com" required />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Telegram
                      </label>
                      <Input placeholder="@username или номер телефона" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Тип проекта
                      </label>
                      <select className="w-full p-3 border border-input rounded-md bg-background">
                        <option value="">Выберите услугу</option>
                        <option value="ai">Внедрение ИИ</option>
                        <option value="growth">Системный рост бизнеса</option>
                        <option value="strategy">Стратегические сессии</option>
                        <option value="consulting">Экспресс-консультация</option>
                        <option value="other">Другое</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Описание задачи *
                      </label>
                      <Textarea 
                        placeholder="Расскажите подробнее о вашей задаче, текущей ситуации и желаемом результате" 
                        rows={5}
                        required 
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Бюджет проекта
                      </label>
                      <select className="w-full p-3 border border-input rounded-md bg-background">
                        <option value="">Выберите диапазон</option>
                        <option value="under-100k">До 100 000 ₽</option>
                        <option value="100k-500k">100 000 - 500 000 ₽</option>
                        <option value="500k-1m">500 000 - 1 000 000 ₽</option>
                        <option value="1m-3m">1 000 000 - 3 000 000 ₽</option>
                        <option value="over-3m">Свыше 3 000 000 ₽</option>
                        <option value="discuss">Обсудим индивидуально</option>
                      </select>
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      <Icon name="Send" className="mr-2" size={20} />
                      Отправить заявку
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-16">
            Часто задаваемые вопросы
          </h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="font-semibold mb-3">
                  Сколько времени занимает проект по внедрению ИИ?
                </h3>
                <p className="text-muted-foreground">
                  Зависит от сложности задачи. Экспресс-аудит — 1-2 недели, 
                  пилотный проект — 1-3 месяца, полноценное внедрение — 3-6 месяцев.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="font-semibold mb-3">
                  Какой минимальный бюджет для работы?
                </h3>
                <p className="text-muted-foreground">
                  Экспресс-консультации от 50 000 ₽, системные проекты от 300 000 ₽. 
                  Стоимость зависит от объема и сложности задач.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="font-semibold mb-3">
                  Работаете ли вы с небольшими компаниями?
                </h3>
                <p className="text-muted-foreground">
                  Да, работаю с компаниями любого размера. Главное — готовность 
                  к изменениям и желание расти системно.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="font-semibold mb-3">
                  Какие гарантии результата вы даете?
                </h3>
                <p className="text-muted-foreground">
                  Устанавливаем конкретные KPI в начале проекта. Если не достигаем 
                  согласованных показателей, дорабатываем до результата.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Начните с бесплатной консультации
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Обсудим ваши задачи и определим оптимальный план работы
          </p>
          <Button 
            size="lg"
            onClick={() => window.open('https://t.me/natalyatomasheva', '_blank')}
          >
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Получить консультацию
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;