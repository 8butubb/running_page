interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
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
  siteTitle: 'Running Page',
  siteUrl: 'https://run.butubb.cn',
  logo: 'https://cdn.jsdelivr.net/gh/8butubb/image/img/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_2026-03-07_095359_687.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://blog.butubb.cn',
    },
    {
      name: 'About',
      url: 'https://blog.butubb.cn/about',
    },
  ],
};

export default data;
