import { useState, useEffect, useCallback } from 'react';
import Icon from '@/components/ui/icon';

const slides = [
  {
    img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/07/sp118vg-2447A8D93C-7069-050A-7BBA-040C5D71FEDA.jpg',
    eyebrow: 'Банкеты · Свадьбы · Корпоративы · Кейтеринг',
    title: 'Стильные площадки для событий, которые запоминаются',
    text: 'Современные банкетные залы, выездное обслуживание и профессиональная организация мероприятий в премиальном формате.',
    btn: 'Посмотреть залы', href: '#halls',
  },
  {
    img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2026/04/SHU_7236-1.jpg',
    eyebrow: 'Ресторан «Шале»',
    title: 'Уютный аутентичный интерьер',
    text: 'Уникальная локация с множеством природных деталей и тёплой атмосферой для вашего торжества.',
    btn: 'Подробнее о ресторане', href: '/Chalet/',
  },
  {
    img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/03/LOKO1963.jpg',
    eyebrow: 'Дом-ресторан «ПолзуновЪ»',
    title: 'Современное место в центре города',
    text: 'Идеальный формат для мероприятий любого масштаба в самом сердце Барнаула.',
    btn: 'Подробнее', href: '/rest-polzunov/',
  },
  {
    img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/10/2G5A2153.jpg',
    eyebrow: 'Зал «Бэль» Роял Парк',
    title: 'Стиль и комфорт для 150 гостей',
    text: 'Уютное пространство с современным дизайном для торжеств любого формата.',
    btn: 'Подробнее', href: '/3-zal-royal-park/',
  },
  {
    img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/12/2G5A0068.jpg',
    eyebrow: 'Кристал Спейс',
    title: 'Event-пространство для больших событий',
    text: 'Современный зал с комфортной вместимостью до 153 гостей.',
    btn: 'Подробнее', href: '/Crystal-Space',
  },
  {
    img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/12/2G5A9659.jpg',
    eyebrow: 'Банкет-холл «Олимп»',
    title: 'Шикарный холл в живописном месте',
    text: 'Идеальное место для свадьбы, юбилея или корпоратива на 120 гостей.',
    btn: 'Подробнее', href: '/banket-kholl-olimp/',
  },
];

const facts = [
  { icon: 'Building2', n: '13', t: 'уникальных локаций' },
  { icon: 'UtensilsCrossed', n: '22', t: 'банкетных зала' },
  { icon: 'Users', n: '20–1000', t: 'гостей на мероприятии' },
  { icon: 'Sparkles', n: 'Premium', t: 'сервис и подача' },
];

const services = [
  { href: '/kejtering-vyeznoe-obsluzhivanie/', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/07/sp118vg-2447A8D93C-7069-050A-7BBA-040C5D71FEDA.jpg', h: 'Выездное обслуживание', p: 'Кейтеринг, выездные банкеты, фуршеты и полевые кухни для мероприятий любого масштаба.' },
  { href: '/dostavka/', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/07/8kdlDoysJJc.jpg', h: 'Доставка еды', p: 'Удобное решение для мероприятий, встреч и офисных заказов с красивой подачей.' },
  { href: '/arenda/', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2022/07/img-9392CF5F26D5-68AB-F3DA-9B3F-4C74053BF493-original-original-1-150x150.jpg', h: 'Аренда оборудования', p: 'Посуда, мебель и оборудование для организации банкетов, фуршетов и кофе-брейков.' },
];

const checklist = ['Современный банкетный сервис', 'Большой выбор залов', 'Гибкие сценарии мероприятий', 'Кейтеринг и доставка', 'Оформление зала в подарок', 'Профессиональное оборудование'];

const halls = [
  { href: '/Crystal-Space', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/12/2G5A0068.jpg', alt: 'Кристал Спейс', badge: 'Event-пространство', h: '«Кристал Спейс»', addr: 'ул. Малахова, 153д', meta: ['До 153 гостей'] },
  { href: '/Chalet', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2026/04/SHU_7236-1.jpg', alt: 'Шале', badge: 'Ресторан', h: 'Ресторан «Шале»', addr: 'Змеиногорский тракт, 71В, 3 этаж', meta: ['До 130 гостей', 'Чек от 500 ₽'] },
  { href: '/rest-polzunov/', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/03/LOKO1963.jpg', alt: 'ПолзуновЪ', badge: 'Дом-ресторан', h: '«ПолзуновЪ»', addr: 'Красноармейский проспект, 112', meta: ['До 100 гостей', 'Чек от 500 ₽'] },
  { href: '/apriori/', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/03/LOKO2142.jpg', alt: 'Априори', badge: 'Банкетный зал', h: '«Априори»', addr: 'ул. Абаканская, 3г', meta: ['До 70 гостей', 'Чек от 500 ₽'] },
  { href: '/1-zal-royal-park/', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/10/2G5A2033.jpg', alt: 'Амели', badge: 'Роял Парк', h: 'Зал «Амели»', addr: 'пр. Ленина, 106/1', meta: ['До 70 гостей'] },
  { href: '/3-zal-royal-park/', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/10/2G5A2153.jpg', alt: 'Бэль', badge: 'Роял Парк', h: 'Зал «Бэль»', addr: 'пр. Ленина, 106/1', meta: ['До 150 гостей'] },
  { href: '/2-zal-royal-park/', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/07/14-5.jpg', alt: 'Рич', badge: 'Роял Парк', h: 'Зал «Рич»', addr: 'пр. Ленина, 106/1', meta: ['До 250 гостей'] },
  { href: '/volna/', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2026/02/2G5A4784.jpg', alt: 'Ривер-холл', badge: 'Ривер-холл', h: 'Ривер-холл «Волна»', addr: 'пл. Баварина, 2', meta: ['До 120 гостей'] },
  { href: '/versal/', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/12/1-43.jpg', alt: 'Версаль', badge: 'Банкетный зал', h: '«Версаль»', addr: 'ул. Интернациональная, 116', meta: ['До 90 гостей'] },
  { href: '/banket-kholl-olimp/', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/12/2G5A9659.jpg', alt: 'Олимп', badge: 'Банкет-холл', h: '«Олимп»', addr: 'Лесной тракт, 85', meta: ['До 120 гостей'] },
  { href: '/vremena-goda-malyj-zal/', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/10/2G5A1613.jpg', alt: 'Времена года Малый', badge: 'Времена года', h: '«Малый зал»', addr: 'ул. Солнечная Поляна, 15', meta: ['До 80 гостей'] },
  { href: '/vremena-goda-srednij-zal/', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/10/2G5A1453.jpg', alt: 'Времена года Средний', badge: 'Времена года', h: '«Средний зал»', addr: 'ул. Солнечная Поляна, 15', meta: ['До 150 гостей'] },
  { href: '/vremena-goda-bolshoj-zal/', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/02/LOKO1758.jpg', alt: 'Времена года Большой', badge: 'Времена года', h: '«Большой зал»', addr: 'ул. Солнечная Поляна, 15', meta: ['До 700 гостей'] },
  { href: '/da-vinci-1/', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/07/011-2.jpg', alt: 'Да Винчи Большой', badge: 'Да Винчи', h: 'Большой зал', addr: 'Социалистический пр-т, 34', meta: ['До 70 гостей'] },
  { href: '/da-vinci-2/', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/07/057-1.jpg', alt: 'Да Винчи ВИП', badge: 'Да Винчи', h: 'ВИП-зал', addr: 'Социалистический пр-т, 34', meta: ['До 25 гостей'] },
  { href: '/банкетный-зал-lexx/', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/10/2G5A2635.jpg', alt: 'Лекс', badge: 'Банкетный зал', h: '«Лекс»', addr: 'пр. Калинина 1А', meta: ['До 120 гостей'] },
  { href: '/rh-parus/', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2024/06/IMG_5870.jpg', alt: 'Парус', badge: 'Ривер-холл', h: '«Парус»', addr: 'пл. Баварина,2а', meta: ['Чек от 500 ₽'] },
  { href: '/банкетная-площадка-дом-на-горе', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2023/10/e3bf41dc-07c6-42ae-a25f-55afb0194405.jpg', alt: 'Дом на Горе', badge: 'Банкетная площадка', h: '«Дом на Горе»', addr: '', meta: ['До 35 гостей'] },
  { href: '/banketny-zal-bor/', img: 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2025/10/2G5A2325.jpg', alt: 'Бор', badge: 'Банкетный зал', h: '«Бор»', addr: 'ул. Тюменская, 1', meta: [] },
];

const bonuses = [
  'Самая большая сеть банкетных залов',
  'Декор зала в подарок (экономия до 70 000₽)',
  '1 час аренды лимузина от ROYAL PARK (*есть минимальный заказ)',
  'Конверт со скидками общим номиналом более 25 000₽',
  '2 часа в бане комплекса ПРАГА (*есть минимальный заказ)',
  'Возможность принести свои алкогольные и безалкогольные напитки',
];

const hallContacts = [
  { h: 'БАНКЕТ-ХОЛЛ «ПОЛЗУНОВЪ»', addr: 'Красноармейский проспект, 112', phones: [['+7(3852)25-25-17', '+73852252517'], ['8(964)087-55-77', '+89640875577']], email: '25-25-17@mail.ru' },
  { h: 'БАНКЕТ-ХОЛЛ «ОЛИМП»', addr: 'Лесной тракт, 85', phones: [['8(963)506-25-25', '+89635062525']], email: '89635062525@mail.ru' },
  { h: 'РОЯЛ ПАРК', addr: 'просп. Ленина, 106/1', phones: [['+7(3852)23-61-23', '+73852236123']], email: '23-61-23@mail.ru' },
  { h: 'ВОЛНА', addr: 'пл. Баварина, 2', phones: [['8(963)504-25-25', '+89635042525']], email: '89619857771@mail.ru' },
  { h: 'РИВЕР-ХОЛЛ «ПАРУС»', addr: 'пл. Баварина, 2а', phones: [['8(961)985-77-71', '+89619857771']], email: '23-54-23@mail.ru' },
  { h: 'АПРИОРИ', addr: 'Абаканская, 3г', phones: [['+7(3852)99-77-25', '+73852997725']], email: 'apriori997725@mail.ru' },
  { h: 'ВЕРСАЛЬ', addr: 'Интернациональная, 116', phones: [['+7(3852)53-37-79', '+73852533779']], email: 'versal-banket@mail.ru' },
  { h: 'ВРЕМЕНА ГОДА', addr: 'Солнечная Поляна, 15', phones: [['8(983)383-9333', '+89833839333']], email: '89833839333@mail.ru' },
  { h: 'ДА ВИНЧИ', addr: 'Социалистический пр-т, 34', phones: [['+7(3852)25-21-77', '+73852252177'], ['8(903)947-71-77', '+89039477177']], email: '25-21-77@mail.ru' },
  { h: 'ЛЕКС', addr: 'проспект Калинина 1А', phones: [['+7(3852)25-17-25', '+73852251725'], ['8(903)947-67-25', '+89039476725']], email: '25-17-25@bk.ru' },
];

const menu = [
  { label: 'Главная', href: '/' },
  { label: 'Банкетные залы', href: '/banketnyj-zal/' },
  { label: 'Услуги в залах', href: '#services' },
  { label: 'Выездное обслуживание', href: '/kejtering-vyeznoe-obsluzhivanie/' },
  { label: 'Истории любви', href: '/gallery/' },
  { label: 'Новости и акции', href: '/news/' },
  { label: 'Контакты', href: '#contacts' },
];

const LOGO = 'https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2022/07/logo-apr-1.png';

const Index = () => {
  const [cur, setCur] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const go = useCallback((i: number) => setCur((i + slides.length) % slides.length), []);

  useEffect(() => {
    const t = setInterval(() => setCur((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* TOPBAR */}
      <header className="sticky top-0 z-[1000] bg-background/85 backdrop-blur-xl border-b border-border">
        <div className="container flex items-center justify-between gap-5 py-4">
          <a href="/" className="flex items-center gap-4 min-w-0">
            <img src={LOGO} alt="Априори" className="h-12 md:h-14 w-auto" />
            <span className="hidden sm:flex flex-col">
              <span className="text-[11px] tracking-luxe uppercase text-muted-foreground">Банкетные залы · Кейтеринг · Мероприятия</span>
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col text-right">
              <span className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-1">Отдел бронирования</span>
              <div className="flex gap-3 text-sm font-semibold">
                <a href="tel:+73852235777" className="hover:text-primary transition-colors">+7 (3852) 23-57-77</a>
                <a href="tel:+79640875777" className="hover:text-primary transition-colors">+7 (964) 087-57-77</a>
              </div>
            </div>
            <a href="https://vk.com/banket22" target="_blank" rel="noopener" aria-label="VK"
               className="w-10 h-10 grid place-items-center rounded-full border border-border bg-card hover:border-gold hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={18} />
            </a>
            <a href="#contacts" className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-background text-xs tracking-luxe uppercase hover:bg-primary transition-colors">
              Оставить заявку
            </a>
          </div>
          <button onClick={() => setMenuOpen((o) => !o)} className="lg:hidden w-11 h-11 grid place-items-center border border-border" aria-label="Меню">
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
        {/* NAV */}
        <nav className="border-t border-border bg-background/60">
          <ul className={`container ${menuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row lg:items-center lg:justify-center gap-1 lg:gap-2 py-2 lg:py-3`}>
            {menu.map((m) => (
              <li key={m.label}>
                <a href={m.href} onClick={() => setMenuOpen(false)}
                   className="block lg:inline-flex px-4 py-2.5 text-[12px] tracking-[0.12em] uppercase text-foreground/80 hover:text-primary transition-colors text-center">
                  {m.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section className="container pt-8 md:pt-12">
        <div className="relative overflow-hidden min-h-[560px] md:min-h-[640px]">
          {slides.map((s, i) => (
            <div key={i}
                 className={`absolute inset-0 transition-opacity duration-1000 ${i === cur ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${s.img}')` }} />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/30" />
              <div className="relative z-10 h-full flex items-center min-h-[560px] md:min-h-[640px]">
                <div className="max-w-[720px] px-7 md:px-16 text-background">
                  {i === cur && (
                    <div className="animate-fade-up">
                      <span className="inline-block text-[11px] tracking-luxe uppercase text-gold border-b border-gold/50 pb-1 mb-6">{s.eyebrow}</span>
                      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] font-medium mb-6">{s.title}</h1>
                      <p className="text-base md:text-lg text-background/80 max-w-xl mb-8 leading-relaxed">{s.text}</p>
                      <a href={s.href} className="inline-flex items-center gap-3 px-8 py-4 bg-background text-ink text-xs tracking-luxe uppercase hover:bg-gold hover:text-background transition-colors">
                        {s.btn} <Icon name="ArrowRight" size={16} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          <button onClick={() => go(cur - 1)} aria-label="Назад"
                  className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 grid place-items-center border border-background/40 text-background hover:bg-background hover:text-ink transition-colors">
            <Icon name="ChevronLeft" size={22} />
          </button>
          <button onClick={() => go(cur + 1)} aria-label="Вперёд"
                  className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 grid place-items-center border border-background/40 text-background hover:bg-background hover:text-ink transition-colors">
            <Icon name="ChevronRight" size={22} />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {slides.map((_, i) => (
              <button key={i} onClick={() => go(i)} aria-label={`Слайд ${i + 1}`}
                      className={`h-[2px] transition-all duration-500 ${i === cur ? 'w-10 bg-gold' : 'w-5 bg-background/40'}`} />
            ))}
          </div>
        </div>

        {/* FACTS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-border bg-card -mt-px">
          {facts.map((f, i) => (
            <div key={f.t} className={`text-center px-6 py-8 ${i < 3 ? 'border-b lg:border-b-0 lg:border-r border-border' : ''} ${i === 1 ? 'border-l lg:border-l-0' : ''} ${i === 3 ? 'border-l lg:border-l-0' : ''}`}>
              <Icon name={f.icon} size={24} className="mx-auto mb-3 text-gold" />
              <div className="font-display text-3xl md:text-4xl text-primary font-medium mb-1">{f.n}</div>
              <div className="text-xs tracking-[0.1em] uppercase text-muted-foreground">{f.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container py-20 md:py-28">
        <div className="text-center mb-14">
          <span className="text-[11px] tracking-luxe uppercase text-gold">Сервис</span>
          <h2 className="font-display text-4xl md:text-5xl font-medium mt-3 hairline">Дополнительные услуги</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <a key={s.h} href={s.href} className="group bg-card block">
              <div className="aspect-[16/11] overflow-hidden">
                <div className="w-full h-full bg-cover bg-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" style={{ backgroundImage: `url('${s.img}')` }} />
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl mb-3 group-hover:text-primary transition-colors">{s.h}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.p}</p>
                <span className="inline-flex items-center gap-2 mt-5 text-[11px] tracking-luxe uppercase text-primary">Подробнее <Icon name="ArrowRight" size={14} /></span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-accent/40 border-y border-border">
        <div className="container py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-[11px] tracking-luxe uppercase text-gold">О компании</span>
            <h2 className="font-display text-4xl md:text-5xl font-medium mt-3 mb-6 hairline hairline-left">О компании</h2>
            <p className="text-muted-foreground mb-5 leading-relaxed">Мы создаём пространства для событий любого масштаба — от камерных ужинов до больших торжеств.</p>
            <p className="text-foreground/90 mb-8 leading-relaxed">
              АПРИОРИ — это 13 локаций и 22 красивых, современных банкетных зала вместимостью от 20 до 1000 персон.
              В основе подхода: аккуратный сервис, современная сервировка, внимание к деталям и удобная организация.
            </p>
            <a href="#contacts" className="inline-flex items-center gap-3 px-8 py-4 bg-ink text-background text-xs tracking-luxe uppercase hover:bg-primary transition-colors">
              Получить консультацию <Icon name="ArrowRight" size={16} />
            </a>
          </div>
          <ul className="grid sm:grid-cols-2 gap-px bg-border border border-border">
            {checklist.map((c) => (
              <li key={c} className="bg-card flex items-start gap-3 px-6 py-6">
                <Icon name="Check" size={18} className="text-gold shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HALLS */}
      <section id="halls" className="container py-20 md:py-28">
        <div className="text-center mb-14">
          <span className="text-[11px] tracking-luxe uppercase text-gold">Локации</span>
          <h2 className="font-display text-4xl md:text-5xl font-medium mt-3 mb-4 hairline">Наши банкетные залы</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Выберите идеальное место для вашего торжества – все залы с фото, вместимостью и адресом.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {halls.map((h) => (
            <a key={h.h + h.alt} href={h.href} className="group bg-card block">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={h.img} alt={h.alt} className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="p-7">
                <span className="text-[10px] tracking-luxe uppercase text-gold">{h.badge}</span>
                <h3 className="font-display text-2xl mt-2 mb-1 group-hover:text-primary transition-colors">{h.h}</h3>
                {h.addr && <p className="text-sm text-muted-foreground">{h.addr}</p>}
                {h.meta.length > 0 && (
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3 text-xs tracking-wide uppercase text-foreground/70">
                    {h.meta.map((m, i) => (
                      <span key={m} className="flex items-center gap-3">{i > 0 && <span className="text-gold">·</span>}{m}</span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* BANNER */}
      <div className="container pb-4">
        <a href="/rooms-for-brides/" className="block overflow-hidden">
          <img src="https://web.archive.org/web/20260410192147im_/https://apriori-barnaul.ru/wp-content/uploads/2023/06/vn-1.jpg" alt="Комнаты для невест" className="w-full hover:scale-[1.02] transition-transform duration-700" />
        </a>
      </div>

      {/* BONUS */}
      <section id="bonus" className="bg-ink text-background">
        <div className="container py-20 md:py-28">
          <div className="text-center mb-14">
            <span className="text-[11px] tracking-luxe uppercase text-gold">Привилегии</span>
            <h2 className="font-display text-4xl md:text-5xl font-medium mt-3 mb-6 hairline">Мы — лучшие</h2>
            <p className="text-background/75 max-w-3xl mx-auto leading-relaxed mb-3">Когда вы выбираете для своего торжества банкетный зал сети АПРИОРИ, вы получаете не просто шикарный интерьер, изысканную подачу вкусных блюд и безупречное обслуживание…</p>
            <p className="text-background/75 max-w-3xl mx-auto leading-relaxed">Ещё и БОНУСЫ для организации прочих не менее важных элементов вашего праздника!</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10 border border-background/10">
            {bonuses.map((b, i) => (
              <div key={b} className="bg-ink flex items-start gap-4 px-7 py-7">
                <span className="font-display text-3xl text-gold leading-none">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm font-medium leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 font-display text-2xl md:text-3xl text-gold italic">АПРИОРИ – это чуть больше, чем просто банкет. Мы хотим, чтобы весь ваш праздник был безупречным!</p>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="container py-20 md:py-28">
        <div className="text-center mb-14">
          <span className="text-[11px] tracking-luxe uppercase text-gold">Контакты</span>
          <h2 className="font-display text-4xl md:text-5xl font-medium mt-3 mb-4 hairline">Свяжитесь с нами</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Мы всегда готовы ответить на ваши вопросы и помочь с выбором зала.</p>
        </div>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-px bg-border border border-border">
          <div className="bg-card p-8 md:p-10">
            <h3 className="font-display text-3xl mb-6">Общие контакты</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-3"><Icon name="Phone" size={16} className="text-gold" /><a href="tel:+73852235777" className="font-semibold hover:text-primary">+7 (3852) 23-57-77</a></p>
              <p className="flex items-center gap-3"><Icon name="Phone" size={16} className="text-gold" /><a href="tel:+79640875777" className="font-semibold hover:text-primary">+7 (964) 087-57-77</a></p>
              <p className="flex items-center gap-3"><Icon name="Mail" size={16} className="text-gold" /><span className="font-semibold">info@apriori-barnaul.ru</span></p>
              <p className="flex items-center gap-3"><Icon name="Clock" size={16} className="text-gold" /><span className="font-semibold">09:00 – 20:00 (ежедневно)</span></p>
            </div>
            <a href="https://vk.com/banket22" target="_blank" rel="noopener" className="inline-flex items-center gap-2 mt-6 px-7 py-3.5 bg-ink text-background text-xs tracking-luxe uppercase hover:bg-primary transition-colors">Написать в VK</a>

            <h4 className="font-display text-2xl mt-10 mb-5 pt-8 border-t border-border">Контакты банкет-холлов</h4>
            <div className="space-y-5">
              {hallContacts.map((c) => (
                <div key={c.h} className="border-t border-border pt-4 first:border-t-0 first:pt-0">
                  <h5 className="text-[12px] tracking-[0.1em] uppercase text-primary font-semibold mb-1">{c.h}</h5>
                  <p className="text-xs text-muted-foreground">Адрес: {c.addr}</p>
                  <p className="text-xs text-muted-foreground">Телефон: {c.phones.map((p, i) => (
                    <span key={p[1]}>{i > 0 && ', '}<a href={`tel:${p[1]}`} className="text-foreground font-semibold hover:text-primary">{p[0]}</a></span>
                  ))}</p>
                  <p className="text-xs text-muted-foreground">Эл. почта: <a href={`mailto:${c.email}`} className="text-foreground font-semibold hover:text-primary">{c.email}</a></p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card min-h-[420px]">
            <iframe title="Карта" src="https://yandex.ru/map-widget/v1/?um=constructor%3A8a7481a25397232898b817ffb49faa70ff207aeed66e29cbd98ab690f1310b06&source=constructor" className="w-full h-full min-h-[420px] border-0" allowFullScreen />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-accent/40 border-t border-border">
        <div className="container py-16 grid md:grid-cols-[1.4fr_1fr_1fr] gap-12">
          <div>
            <a href="/" className="flex items-center gap-4 mb-4">
              <img src={LOGO} alt="Априори" className="h-12 w-auto" />
            </a>
            <p className="text-sm text-muted-foreground mb-2">События, которые выглядят безупречно.</p>
            <p className="text-sm text-muted-foreground mb-2">Банкетные залы, выездное обслуживание, фуршеты в Барнауле.</p>
            <p className="text-xs text-muted-foreground/70">Представленная на сайте информация для лиц старше 18 лет</p>
          </div>
          <div>
            <h4 className="font-display text-xl mb-5">Навигация</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Главная</a></li>
              <li><a href="/banketnyj-zal/" className="hover:text-primary transition-colors">Банкетные залы</a></li>
              <li><a href="/kejtering-vyeznoe-obsluzhivanie/" className="hover:text-primary transition-colors">Выездное обслуживание</a></li>
              <li><a href="/dostavka/" className="hover:text-primary transition-colors">Доставка еды</a></li>
              <li><a href="/arenda/" className="hover:text-primary transition-colors">Аренда оборудования</a></li>
              <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xl mb-5">Контакты</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Icon name="Phone" size={14} className="text-gold" /><a href="tel:+73852235777" className="hover:text-primary">+7 (3852) 23-57-77</a></li>
              <li className="flex items-center gap-2"><Icon name="Phone" size={14} className="text-gold" /><a href="tel:+79640875777" className="hover:text-primary">+7 (964) 087-57-77</a></li>
              <li className="flex items-center gap-2"><Icon name="Mail" size={14} className="text-gold" /><a href="mailto:info@apriori-barnaul.ru" className="hover:text-primary">info@apriori-barnaul.ru</a></li>
              <li className="flex items-center gap-2"><Icon name="Clock" size={14} className="text-gold" />Пн–Вс 09:00–20:00</li>
              <li><a href="https://vk.com/banket22" target="_blank" rel="noopener" className="hover:text-primary">VK</a></li>
            </ul>
          </div>
        </div>
        <div className="container border-t border-border py-6">
          <p className="text-xs text-muted-foreground/70 text-center leading-relaxed">
            Посещая сайт apriori-barnaul.ru, а также оставляя контактные данные через форму обратной связи вы предоставляете согласие на обработку данных о посещении вами сайта (данные cookies и иные пользовательские данные), сбор которых осуществляется apriori-barnaul.ru на условиях <a href="/privacy-policy/" className="text-primary hover:underline">Политики обработки персональных данных</a>.
          </p>
        </div>
      </footer>

      {/* MOBILE BAR */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-[1200] flex gap-2 w-[calc(100%-20px)] max-w-[520px]">
        <a href="tel:+73852235777" className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 bg-ink text-background text-xs tracking-luxe uppercase">Позвонить</a>
        <a href="#contacts" className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 bg-card border border-border text-foreground text-xs tracking-luxe uppercase">Контакты</a>
      </div>
    </div>
  );
};

export default Index;