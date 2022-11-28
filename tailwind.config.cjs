/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        loginBtn: '#e50914',
        loginBtnHover: '#f40612',
        signUpBtn: '#f40612',
        signUpBtnHover: '#e50914',
      },
      backgroundColor: {
        form: 'rgba(0,0,0,0.65)',
      },
      backgroundImage: {
        banner: "url('/src/assets/img/who1.jpg)",
      },
      transitionTimingFunction: {
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      screens: {
        xxsm: '300px',
        xsm: '360px',
        xsmC: '375px',
        smC: '400px',
        smC2: '425px',
        smC3: '450px',
      },
    },
  },
  plugins: [],
};
