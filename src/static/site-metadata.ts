interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: "LaoMai's Workouts Map",
  siteUrl: 'https://workouts.laomai.org',
  logo: 'https://cravatar.com/avatar/8b7f3b316357d4b0439470c51ae7af05?d=mp&s=240',
  description: "Laomai's personal site and blog",
  keywords: 'laomai, 老麦, workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://laomai.org',
    },
  ],
};

export default data;
