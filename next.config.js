module.exports = {
  publicRuntimeConfig: {
    GRAPHQL_SERVER_URL: process.env.GRAPHQL_SERVER_URL,
  },
  // async redirects() {
  //   return [
  //     { source: "/en", destination: "/", permanent: true },
  //     { source: "/en/:path*", destination: "/:path*", permanent: true },
  //   ];
  // },
  // async rewrites() {
  //   return [
  //     { source: "/ca/:path*", destination: "/ca/:path*" },
  //     { source: "/de/:path*", destination: "/de/:path*" },
  //     { source: "/ee/:path*", destination: "/ee/:path*" },
  //     { source: "/es/:path*", destination: "/es/:path*" },
  //     { source: "/ja/:path*", destination: "/ja/:path*" },
  //     { source: "/ko/:path*", destination: "/ko/:path*" },
  //     { source: "/fi/:path*", destination: "/fi/:path*" },
  //     { source: "/pt/:path*", destination: "/pt/:path*" },
  //     { source: "/ru/:path*", destination: "/ru/:path*" },
  //     { source: "/th/:path*", destination: "/th/:path*" },
  //     { source: "/tr/:path*", destination: "/tr/:path*" },
  //     { source: "/zh/:path*", destination: "/zh/:path*" },
  //     { source: "/:path*", destination: "/en/:path*" },
  //     { source: "/", destination: "/en" },
  //   ];
  // },
};