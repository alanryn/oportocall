if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}




import barba from '@barba/core';
import barbaCss from '@barba/css';

barba.use(barbaCss);

const body = document.querySelector('body');

barba.hooks.before((data) => {

  const background = data.current.container.dataset.background;
  body.style.setProperty('--page-background', background);

});

barba.init({
  transitions: [
    {
      name: 'base',
      to: {
        namespace: ['base'],
      },
      sync: true,
      once() {},
      leave() {},
      enter() {},
    },
   
  ],
});
 
 




