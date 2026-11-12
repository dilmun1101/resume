export interface Project {
  id: string;
  name: string;
  imagePath: string;
  githubURL: { url: string };
  deployURL: {
    ru?: string;
    en: string;
  };
  tags: string[];
}

export const projects: Project[] = [
  {
    id: '01',
    name: 'Swagger editor app',
    imagePath: './images/swagger-editor-app/01.png',
    githubURL: {
      url: 'https://github.com/dilmun1101/swagger-editor-app',
    },
    deployURL: {
      ru: 'https://swagger-editor-app-gmt.vercel.app/ru/home',
      en: 'https://swagger-editor-app-gmt.vercel.app/en/home',
    },
    tags: ['next', 'typescript', 'scss', 'eslint', 'prettier', 'husky'],
  },
  {
    id: '02',
    name: 'Rss tandem app',
    imagePath: './images/rss-tandem-app/01.png',
    githubURL: {
      url: 'https://github.com/dilmun1101/rss-tandem-app',
    },
    deployURL: {
      en: 'https://fiercesloth.github.io/rss-tandem-app/',
    },
    tags: ['typescript', 'scss', 'eslint', 'prettier', 'husky'],
  },
];
