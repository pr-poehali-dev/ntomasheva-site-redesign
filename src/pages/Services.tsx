import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-primary">ntomasheva.ru</a>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">О себе</a>
            <a href="/services" className="text-primary font-medium">Услуги</a>
            <a href="/cases" className="text-foreground hover:text-primary transition-colors">Кейсы</a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>Получить консультацию</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-white to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-8 animate-fade-in">
            Услуги
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{animationDelay: '0.2s'}}>
            Комплексные решения для системного роста вашего бизнеса и внедрения ИИ-технологий
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service 1 */}
            <Card className="p-8 hover:shadow-xl transition-all">
              <CardContent className="pt-0">
                <Icon name="TrendingUp" className="mb-6 text-primary" size={48} />
                <h2 className="text-2xl font-bold mb-4">Системный рост бизнеса</h2>
                <p className="text-muted-foreground mb-6">
                  Помогаю выстроить устойчивые процессы развития, оптимизировать операции 
                  и создать систему управления ростом компании.
                </p>
                
                <h3 className="font-semibold mb-3">Что включает:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Диагностика текущих процессов
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Разработка стратегии роста
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Оптимизация бизнес-процессов
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Внедрение системы контроля
                  </li>
                </ul>
                
                <div className="bg-secondary p-4 rounded-lg mb-6">
                  <h4 className="font-semibold mb-2">Результат:</h4>
                  <p className="text-sm text-muted-foreground">
                    Прозрачная система управления ростом с измеримыми KPI и устойчивыми процессами
                  </p>
                </div>
                
                <Button className="w-full">Узнать подробнее</Button>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="p-8 hover:shadow-xl transition-all">
              <CardContent className="pt-0">
                <Icon name="Bot" className="mb-6 text-primary" size={48} />
                <h2 className="text-2xl font-bold mb-4">Внедрение ИИ</h2>
                <p className="text-muted-foreground mb-6">
                  От анализа возможностей до полномасштабного внедрения ИИ-решений 
                  в ваши бизнес-процессы.
                </p>
                
                <h3 className="font-semibold mb-3">Этапы работы:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Аудит и выявление возможностей
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Создание MVP решения
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Пилотное внедрение
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Масштабирование по компании
                  </li>
                </ul>
                
                <div className="bg-secondary p-4 rounded-lg mb-6">
                  <h4 className="font-semibold mb-2">Результат:</h4>
                  <p className="text-sm text-muted-foreground">
                    Автоматизированные процессы, повышение эффективности на 20-40%
                  </p>
                </div>
                
                <Button className="w-full">Узнать подробнее</Button>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="p-8 hover:shadow-xl transition-all">
              <CardContent className="pt-0">
                <Icon name="Users" className="mb-6 text-primary" size={48} />
                <h2 className="text-2xl font-bold mb-4">Стратегические сессии</h2>
                <p className="text-muted-foreground mb-6">
                  Интенсивная работа с командой по ключевым вопросам развития 
                  и выработке стратегических решений.
                </p>
                
                <h3 className="font-semibold mb-3">Форматы сессий:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Стратегическое планирование
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Решение проблем и кризисов
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Командообразование
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Выработка решений
                  </li>
                </ul>
                
                <div className="bg-secondary p-4 rounded-lg mb-6">
                  <h4 className="font-semibold mb-2">Результат:</h4>
                  <p className="text-sm text-muted-foreground">
                    Четкий план действий, согласованность команды, конкретные решения
                  </p>
                </div>
                
                <Button className="w-full">Узнать подробнее</Button>
              </CardContent>
            </Card>

            {/* Service 4 */}
            <Card className="p-8 hover:shadow-xl transition-all">
              <CardContent className="pt-0">
                <Icon name="Zap" className="mb-6 text-primary" size={48} />
                <h2 className="text-2xl font-bold mb-4">Экспресс-консультации</h2>
                <p className="text-muted-foreground mb-6">
                  Быстрое решение конкретных задач и получение экспертного мнения 
                  по вопросам роста и внедрения технологий.
                </p>
                
                <h3 className="font-semibold mb-3">Что решаем:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Анализ конкретной ситуации
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Экспертная оценка решений
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Рекомендации по технологиям
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Второе мнение по стратегии
                  </li>
                </ul>
                
                <div className="bg-secondary p-4 rounded-lg mb-6">
                  <h4 className="font-semibold mb-2">Результат:</h4>
                  <p className="text-sm text-muted-foreground">
                    Конкретные рекомендации и план действий за 1-2 сессии
                  </p>
                </div>
                
                <Button className="w-full">Узнать подробнее</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-20 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-16">
            Как мы работаем
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Диагностика</h3>
              <p className="text-sm text-muted-foreground">
                Анализируем текущую ситуацию и выявляем точки роста
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Стратегия</h3>
              <p className="text-sm text-muted-foreground">
                Разрабатываем план достижения целей с конкретными этапами
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Внедрение</h3>
              <p className="text-sm text-muted-foreground">
                Поэтапно реализуем решения с контролем результатов
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold mb-2">Масштабирование</h3>
              <p className="text-sm text-muted-foreground">
                Распространяем успешные решения на всю компанию
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Готовы начать работу?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Обсудим ваши задачи и подберем оптимальный формат сотрудничества
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

export default Services;