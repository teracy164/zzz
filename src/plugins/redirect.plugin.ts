// plugins/redirect.js
export default defineNuxtPlugin((app) => {
  const router = useRouter();
  router.beforeEach((to, from, next) => {
    if (to.path !== '/' && to.path.endsWith('/')) {
      const newPath = to.path.slice(0, -1);
      next({ path: newPath, query: to.query, hash: to.hash });
    } else {
      next();
    }
  });
});
