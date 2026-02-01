import { HistoryData } from '../types';

export const historyData: HistoryData = {
  segments: [
    {
      id: 1,
      startYear: 2016,
      endYear: 2022,
      category: 'sport',
      events: [
        {
          date: '2016',
          description: 'Летние Олимпийские игры в Рио-де-Жанейро',
        },
        {
          date: '2018',
          description: 'Чемпионат мира по футболу в России',
        },
        {
          date: '2020',
          description: 'Летние Олимпийские игры в Токио (перенесены на 2021)',
        },
        {
          date: '2021',
          description: 'Чемпионат Европы по футболу',
        },
        {
          date: '2022',
          description: 'Зимние Олимпийские игры в Пекине',
        },
      ],
    },
    {
      id: 2,
      startYear: 2011,
      endYear: 2015,
      category: 'cinema',
      events: [
        {
          date: '2011',
          description: 'Выход фильма "Хранители времени" Мартина Скорсезе',
        },
        {
          date: '2012',
          description: 'Премьера "Мстителей" - начало киновселенной Marvel',
        },
        {
          date: '2013',
          description: 'Выход "Гравитации" Альфонсо Куарона',
        },
        {
          date: '2014',
          description: 'Премьера "Интерстеллара" Кристофера Нолана',
        },
        {
          date: '2015',
          description: 'Выход "Безумного Макса: Дороги ярости"',
        },
      ],
    },
    {
      id: 3,
      startYear: 2005,
      endYear: 2010,
      category: 'culture',
      events: [
        {
          date: '2005',
          description: 'Открытие музея современного искусства в Нью-Йорке',
        },
        {
          date: '2006',
          description: 'Запуск Twitter - новая платформа для микроблогов',
        },
        {
          date: '2007',
          description: 'Первый iPhone - начало эры смартфонов',
        },
        {
          date: '2008',
          description: 'Запуск Spotify - революция в музыкальном стриминге',
        },
        {
          date: '2010',
          description: 'Запуск Instagram - новая эра социальных сетей',
        },
      ],
    },
  ],
};
