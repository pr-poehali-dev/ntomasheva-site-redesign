import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Cases = () => {
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
            <a href="/cases" className="text-primary font-medium">Кейсы</a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>Получить консультацию</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-white to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-8 animate-fade-in">
            Кейсы
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{animationDelay: '0.2s'}}>
            Примеры успешных проектов и измеримые результаты работы с клиентами
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">280+</div>
                <div className="text-sm text-muted-foreground">команд за 5 лет</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">21 млрд ₽</div>
                <div className="text-sm text-muted-foreground">общий оборот клиентов</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">35%</div>
                <div className="text-sm text-muted-foreground">средний рост эффективности</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">довольных клиентов</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="px-6 py-20 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-16">
            Успешные проекты
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Case 1 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">Внедрение ИИ</Badge>
                  <Icon name="TrendingUp" className="text-primary" size={24} />
                </div>
                
                <h3 className="text-xl font-bold mb-4">
                  Автоматизация обработки клиентских запросов
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Задача:</h4>
                    <p className="text-sm text-muted-foreground">
                      Крупная IT-компания тратила 60% времени менеджеров на обработку 
                      повторяющихся запросов от клиентов
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Решение:</h4>
                    <p className="text-sm text-muted-foreground">
                      Внедрили ИИ-систему для автоматической категоризации и первичной 
                      обработки запросов с интеграцией в CRM
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">70%</div>
                    <div className="text-xs text-muted-foreground">экономия времени</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">+15%</div>
                    <div className="text-xs text-muted-foreground">эффективность команды</div>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  Подробнее о проекте
                </Button>
              </CardContent>
            </Card>

            {/* Case 2 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">Системный рост</Badge>
                  <Icon name="Target" className="text-primary" size={24} />
                </div>
                
                <h3 className="text-xl font-bold mb-4">
                  Масштабирование производственной компании
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Задача:</h4>
                    <p className="text-sm text-muted-foreground">
                      Производственная компания достигла предела роста из-за неэффективных 
                      процессов и отсутствия системы контроля
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Решение:</h4>
                    <p className="text-sm text-muted-foreground">
                      Выстроили систему управления процессами, внедрили KPI и 
                      автоматизировали контроль качества
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">+40%</div>
                    <div className="text-xs text-muted-foreground">рост выручки</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">-25%</div>
                    <div className="text-xs text-muted-foreground">снижение брака</div>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  Подробнее о проекте
                </Button>
              </CardContent>
            </Card>

            {/* Case 3 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">ИИ-аналитика</Badge>
                  <Icon name="BarChart" className="text-primary" size={24} />
                </div>
                
                <h3 className="text-xl font-bold mb-4">
                  Прогнозирование спроса в ритейле
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Задача:</h4>
                    <p className="text-sm text-muted-foreground">
                      Сеть магазинов сталкивалась с проблемами планирования закупок 
                      и большими остатками товаров
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Решение:</h4>
                    <p className="text-sm text-muted-foreground">
                      Создали систему прогнозирования на основе ИИ, учитывающую 
                      сезонность, акции и внешние факторы
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">92%</div>
                    <div className="text-xs text-muted-foreground">точность прогнозов</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">-30%</div>
                    <div className="text-xs text-muted-foreground">снижение остатков</div>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  Подробнее о проекте
                </Button>
              </CardContent>
            </Card>

            {/* Case 4 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">Стратегические сессии</Badge>
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                
                <h3 className="text-xl font-bold mb-4">
                  Трансформация команды разработки
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Задача:</h4>
                    <p className="text-sm text-muted-foreground">
                      Команда разработки не справлялась с растущей нагрузкой, 
                      срывались дедлайны, падало качество
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Решение:</h4>
                    <p className="text-sm text-muted-foreground">
                      Провели серию стратегических сессий, выстроили новые процессы 
                      и внедрили Agile-методологию
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">+50%</div>
                    <div className="text-xs text-muted-foreground">скорость разработки</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">-80%</div>
                    <div className="text-xs text-muted-foreground">количество багов</div>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  Подробнее о проекте
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-16">
            Отзывы клиентов
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">АИ</span>
                  </div>
                  <div>
                    <div className="font-semibold">Алексей Иванов</div>
                    <div className="text-sm text-muted-foreground">CEO, TechCorp</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Наталья помогла нам внедрить ИИ для обработки клиентских запросов. 
                  Результат превзошел ожидания — экономия времени 70%."
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">МП</span>
                  </div>
                  <div>
                    <div className="font-semibold">Мария Петрова</div>
                    <div className="text-sm text-muted-foreground">Директор, ProduceCo</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Системный подход к росту бизнеса дал нам +40% к выручке за год. 
                  Рекомендую всем, кто хочет масштабироваться."
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">ДС</span>
                  </div>
                  <div>
                    <div className="font-semibold">Дмитрий Сидоров</div>
                    <div className="text-sm text-muted-foreground">CTO, DevTeam</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Стратегические сессии полностью трансформировали нашу команду. 
                  Качество работы выросло в разы."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Хотите такие же результаты?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Обсудим ваши задачи и составим план достижения целей
          </p>
          <Button size="lg">
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Получить консультацию
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Cases;