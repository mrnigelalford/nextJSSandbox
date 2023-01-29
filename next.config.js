/** @type {import('next').NextConfig} */

const introPage = () => {
  const pages = [
    '/intro/page1',
    '/intro/page2',
    '/intro/page3',
  ];
  const randomPage = pages[Math.floor(Math.random() * pages.length)];

  return randomPage
}

const nextConfig = {
  swcMinify: true,
  // rewrites: () => {
  //   return [
  //     {
  //       source: '/intro',
  //       destination: introPage()
  //     }
  //   ]
  // }
};

module.exports = nextConfig;
