export default (to, from, next) => {
  if (localStorage.getItem('userToken') != null) {
    next();
  } else {
    next('/app/sessions/signIn');
  }
};
