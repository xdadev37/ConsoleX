export default ({ env }: { env: any }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "d8d6608f818317e77dc6d1f472b5e949"),
  },
});
