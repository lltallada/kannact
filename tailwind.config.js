module.exports = {
  content: ['./**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    fontSize: {
      '2xl': ['36px', '44px'],
      xl: ['24px', '32px'],
      lg: ['21px', '28px'],
      md: ['16px', '24px'],
      sm: ['14px', '20px'],
    },
    extend: {
      colors: {
        primary: '#3B778B',
        primary500: '#729DA9',
        primary250: '#bfd3d9',
      },
      maxWidth: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1152px',
        '2xl': '1280px',
        '3xl': '1600px',
      },
    },
  },
};
