export interface Link {
  title: string;
  url: string;
  fragment?: string;
}

export interface Section {
  id: number;
  name: string;
  date: string;
  links: Link[];
}

export const baseStructure: Section[] = [
  {
    id: 1,
    name: '"Майдан"',
    date: '2013-11-21',
    links: [
      {
        title: 'Понятие',
        url: '/maidan',
        fragment: 'concept',
      },
      {
        title: 'Причины',
        url: '/maidan',
        fragment: 'causes',
      },
      {
        title: 'Начало',
        url: '/maidan/start',
      },
      {
        title: 'Происходящее',
        url: '/maidan/happen',
      },
    ],
  },
  {
    id: 2,
    name: 'Окончание "Майдана"',
    date: '2014-02-22',
    links: [
      {
        title: 'Соглашения',
        url: '/end-of-maidan/agreement',
      },
      {
        title: 'Увольнение судей',
        url: '/end-of-maidan/dismissal-of-judges',
      },
      {
        title: '"Самоустранение"',
        url: '/end-of-maidan/self-removal',
      },
      {
        title: 'Побег',
        url: '/end-of-maidan/escape',
      },
      {
        title: 'Уголовные дела',
        url: '/end-of-maidan/criminal-cases',
      },
      {
        title: 'Врио Президента и внеочередные выборы Президента Украины',
        url: '/end-of-maidan/early-elections',
      },
    ],
  },
];
