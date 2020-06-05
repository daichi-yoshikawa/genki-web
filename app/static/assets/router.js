var router = new VueRouter({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      show_in_nav: true,
      component: Index,
    },
    {
      path: '/classes',
      name: 'Classes',
      show_in_nav: true,
      component: Classes
    },
    {
      path: '/classes/:category',
      name: 'ClassDetails',
      show_in_nav: false,
      component: ClassDetails,
      beforeEnter: (to, from, next) => {
        let categories = Object.keys(ClassDetails.data().categories)
        if(categories.indexOf(to.params.category) < 0)
        {
          next(to.params.category);
        } else {
          next();
        }
      }
    },
    {
      path: '/instructors',
      name: 'Instructors',
      show_in_nav: true,
      component: Instructors
    },
    {
      path: '/contacts',
      name: 'Contacts',
      show_in_nav: true,
      component: Contacts
    },
    {
      path: '/blog',
      name: 'Blog',
      show_in_nav: true,
      beforeEnter() {
        window.open('https://ameblo.jp/genkirtnallstars', '_blank');
      }
    },
    {
      path: '*',
      name: 'PageNotFound',
      show_in_nav: false,
      component: PageNotFound
    },
  ],
});
