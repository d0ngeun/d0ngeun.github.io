import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/d0ngeun/d0ngeun.github.io.git', // Update to point to your repository
  user: {
   name: 'James Park', // update to use your name
   email: 'jamesdpark1@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);