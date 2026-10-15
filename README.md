# Coffee Shop · Мобильное приложение кофейни (Expo / React Native)

Учебное мобильное приложение на **React Native + Expo + TypeScript** по Figma-макету *Coffee Shop Mobile App Design (Community)*: приветствие, меню с поиском и категориями, страница напитка, заказ и экран доставки. Бэкенда нет — данные захардкожены в `src/data`, состояние живёт в памяти.

## Стек

- Expo + React Native
- TypeScript (`tsconfig.json`, точка входа `index.ts`)
- Собственный стек-навигатор (`src/navigation/useFlow.ts`), без сторонних библиотек навигации
- Иконки — текстовые символы, чашки собраны из `View`, поэтому лишних зависимостей нет

## Быстрый старт

> Нужны Node.js LTS и запущенный эмулятор Android (или телефон с USB-отладкой).

```bash
# 1. зависимости
npm install

# 2. запуск на Android (--clear чистит кэш Metro)
npx expo start --clear --android
```

Альтернатива эмулятору — отсканировать QR из консоли приложением **Expo Go** на телефоне.

## Экраны и флоу

```
Onboarding —«Get Started»→ Home —(карточка)→ Detail —«Buy Now»→ Order —«Order»→ Delivery
                             └──────────«+» на карточке─────────────┘
```

| Экран | Файл | Что делает |
|---|---|---|
| Приветствие | `screens/OnboardingScreen.tsx` | заголовок, кнопка «Get Started» |
| Меню | `screens/HomeScreen.tsx` | поиск, категории, карточки, кнопка «+» |
| Напиток | `screens/DetailScreen.tsx` | описание, рейтинг, размер S/M/L, избранное |
| Заказ | `screens/OrderScreen.tsx` | Deliver / Pick Up, количество, итоговая сумма |
| Доставка | `screens/DeliveryScreen.tsx` | карта, таймер, прогресс |

Кнопка «назад» на Android возвращает на предыдущий экран (`useFlow.back`).

## Структура проекта

```
├── assets/            # иконка и сплэш (из шаблона Expo)
├── src/
│   ├── components/Cup.tsx
│   ├── data/coffees.ts
│   ├── navigation/useFlow.ts
│   ├── screens/
│   └── theme.ts
├── App.tsx
├── app.json
├── index.ts
├── package.json
└── tsconfig.json
```

## Что можно доработать

- нижняя навигация и список избранного
- корзина с несколькими позициями
- реальные фото напитков (`assets/`) вместо нарисованных чашек
