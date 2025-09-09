import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-primary">ntomasheva.ru</a>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="/about" className="text-primary font-medium">О себе</a>
            <a href="/services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="/cases" className="text-foreground hover:text-primary transition-colors">Кейсы</a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>Получить консультацию</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-white to-secondary">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-8 animate-fade-in">
            О себе
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{animationDelay: '0.2s'}}>
            Более 5 лет помогаю бизнесу внедрять ИИ и выстраивать системные процессы роста. 
            Работала с 280+ командами, общий годовой оборот клиентов составляет 21 млрд рублей.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Biography */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Биография</h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Эксперт по системному росту бизнеса и внедрению искусственного интеллекта. 
                  Специализируюсь на помощи компаниям в цифровой трансформации и создании 
                  устойчивых процессов развития.
                </p>
                <p>
                  За 5 лет работы в области системного роста бизнеса помогла более чем 280 командам 
                  оптимизировать процессы и внедрить ИИ-решения. Общий годовой оборот компаний-клиентов 
                  составляет 21 миллиард рублей.
                </p>
                <p>
                  Мой подход основан на глубоком анализе бизнес-процессов, выявлении точек роста 
                  и поэтапном внедрении технологических решений с измеримыми результатами.
                </p>
              </div>
            </div>

            {/* Expertise */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Экспертиза</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <CardContent className="pt-0">
                    <div className="flex items-start space-x-4">
                      <Icon name="TrendingUp" className="text-primary mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold mb-2">Системный рост бизнеса</h3>
                        <p className="text-sm text-muted-foreground">
                          Помогаю компаниям выстроить устойчивые процессы развития, 
                          оптимизировать операционную деятельность и масштабировать бизнес.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="pt-0">
                    <div className="flex items-start space-x-4">
                      <Icon name="Bot" className="text-primary mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold mb-2">Внедрение ИИ</h3>
                        <p className="text-sm text-muted-foreground">
                          Специализируюсь на интеграции AI-решений в бизнес-процессы, 
                          от стратегии до полномасштабного внедрения.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="pt-0">
                    <div className="flex items-start space-x-4">
                      <Icon name="Users" className="text-primary mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold mb-2">Работа с командами</h3>
                        <p className="text-sm text-muted-foreground">
                          Провожу стратегические сессии, обучаю команды и помогаю 
                          выстроить эффективные процессы взаимодействия.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-20 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Философия работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <Icon name="Target" className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="font-semibold mb-2">Результативность</h3>
                <p className="text-sm text-muted-foreground">
                  Фокусируюсь на измеримых результатах и конкретных улучшениях в бизнесе
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <Icon name="Cog" className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="font-semibold mb-2">Системность</h3>
                <p className="text-sm text-muted-foreground">
                  Создаю комплексные решения, которые работают долгосрочно
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <Icon name="Lightbulb" className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="font-semibold mb-2">Инновации</h3>
                <p className="text-sm text-muted-foreground">
                  Внедряю передовые технологии с учетом специфики бизнеса
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Готовы обсудить ваш проект?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Расскажите о ваших задачах, и мы найдем оптимальное решение
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать в Telegram
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Mail" className="mr-2" size={20} />
              Отправить email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;