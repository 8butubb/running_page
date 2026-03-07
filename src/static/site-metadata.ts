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
  logo: 'https://i1.hdslb.com/bfs/new_dyn/1b20cc7cee845a1594c441211e8e7eaa1353640159.jpg@1052w_!web-dynamic.avif',
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
