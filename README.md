# Sber Online Prototype

Статический прототип личного кабинета в стиле СберБанк Онлайн.

## Что внутри

- `index.html` — главная страница по референсу
- `accounts.html` — счета и карты
- `payments.html` — платежи и переводы
- `history.html` — история операций
- `savings.html` — вклады и накопления
- `loans.html` — кредиты и ипотека
- `investments.html` — инвестиции
- `insurance.html` — страхование
- `offers.html` — предложения
- `profile.html` — профиль и настройки
- `support.html` — поддержка

## Локальный запуск

Откройте `index.html` в браузере.

## Публикация на GitHub Pages

1. Создайте публичный репозиторий на GitHub.
2. Добавьте удалённый репозиторий:

```bash
git remote add origin <REPOSITORY_URL>
```

3. Отправьте код:

```bash
git push -u origin main
```

4. В GitHub откройте `Settings -> Pages`.
5. В разделе `Build and deployment` выберите:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`

После этого сайт будет доступен на GitHub Pages.
