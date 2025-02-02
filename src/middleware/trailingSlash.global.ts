export default defineNuxtRouteMiddleware((to, from) => {
  if (!to.path.endsWith('/') && to.path !== '/') {
    const { pathname, search, hash } = new URL(to.fullPath, 'http://localhost');
    return navigateTo(`${pathname}/${search}${hash}`, { redirectCode: 301 });
  }
});
