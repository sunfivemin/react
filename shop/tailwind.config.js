/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    // 테일윈드 설정의 값들을 닷 노테이션으로 사용하고 싶으면 theme()를 사용한다.
    theme: {
        screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
        },
        // colors: {
        //   'blue': '#1fb6ff',
        //   'pink': '#ff49db',
        //   'orange': '#ff7849',
        //   'green': '#13ce66',
        //   'gray-dark': '#273444',
        //   'gray': '#8492a6',
        //   'gray-light': '#d3dce6',
        // },
        fontFamily: {
          pre: ['Pretendard'],
          gmarket: ['GmarketSansMedium'],
          sans: ['Graphik', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
        extend: {
        //   spacing: {
        //     '128': '32rem',
        //     '144': '36rem',
        //   },
          backgroundImage: {
            'cloth1': "url('./assets/images/cloth1.png')",
            'cloth2': "url('./assets/images/cloth2.jpg')",
            'cloth3': "url('./assets/images/cloth3.png')",
          },
        //   borderRadius: {
        //     '4xl': '2rem',
        //   }
        }
      },
    plugins: [],
};
