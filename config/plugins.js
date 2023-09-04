module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: process.env.DEPLOY_HOOK,
      apiToken: process.env.VERCEL_API,
      appFilter: "strapi-portfolio-hk",
      teamFilter: "strapi-portfolio-hk",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
