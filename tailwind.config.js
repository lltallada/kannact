//import containerQueries from '@tailwindcss/container-queries';
//import tailwindcssRadix from 'tailwindcss-radix';

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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-15deg': 'linear-gradient(-15deg, var(--tw-gradient-stops))',
        'gradient-30deg': 'linear-gradient(30deg, var(--tw-gradient-stops))',
        gradient: 'linear-gradient(var(--tw-gradient-stops))',
        'gradient-animated':
          'linear-gradient(-45deg, #e6d4f8 0%, #F9FFB6 8.333%, #BCC4E1 16.666%, #B9DDB6 25%, #F5FF86 33.333%, #FFC7C7 41.666%, #c39bee 50%, #A2ADD6 58.333%, #FED6B9 66.666%, #E87BCC 75%, #BAF9F9 83.333%, #F8CBCB 91.666% );',
      },
      maxWidth: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1152px',
        '2xl': '1280px',
        '3xl': '1600px',
      },
      boxShadow: {
        'centered-secondary': '0 0 10px 10px rgba(169,111,231,0.05)',
        'centered-black': '0 0 10px 10px rgba(0,0,0,0.05)',
        'centered-black-sm': '0 0 8px 5px rgba(0,0,0,0.05)',
        'centered-black-md': '0 0 20px 10px rgba(0,0,0,0.05)',
        'centered-black-lg': '0 0 50px 50px rgba(0,0,0,0.05)',
      },
      keyframes: {
        /* slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        }, */
        horizontalScroll: {
          from: { transform: 'translateX(0, 0, 0)' },
          to: { transform: 'translate3d(-50%, 0, 0)' },
        },
        animateBG: {
          '0%': {
            backgroundPosition: '0% 8.333%',
          },
          '4.166%': {
            backgroundPosition: '8.333% 16.664%',
          },
          '8.332%': {
            backgroundPosition: '16.666% 25%',
          },
          '12.498%': {
            backgroundPosition: '25% 33.333%',
          },
          '16.664%': {
            backgroundPosition: '33.333% 41.666%',
          },
          '20.83%': {
            backgroundPosition: '41.666% 50%',
          },
          '25%': {
            backgroundPosition: '50% 58.333%',
          },
          '29.166%': {
            backgroundPosition: '58.333% 66.666%',
          },
          '33.332%': {
            backgroundPosition: '66.666% 75%',
          },
          '37.498%': {
            backgroundPosition: '75% 83.333%',
          },
          '41.664%': {
            backgroundPosition: '83.333% 91.666%',
          },
          '45.83%': {
            backgroundPosition: '91.666% 100%',
          },
          '50%': {
            backgroundPosition: '91.333% 100%',
          },
          '54.166%': {
            backgroundPosition: '100% 91.333%',
          },
          '58.333%': {
            backgroundPosition: '91.333% 83.333%',
          },
          '62.5%': {
            backgroundPosition: '83.333% 75%',
          },
          '66.666%': {
            backgroundPosition: '75% 66.666%',
          },
          '70.833%': {
            backgroundPosition: '66.666% 58.333%',
          },
          '75%': {
            backgroundPosition: '58.333% 50%',
          },
          '79.166%': {
            backgroundPosition: '50% 41.666%',
          },
          '83.333%': {
            backgroundPosition: '41.666% 33.333%',
          },
          '87.5%': {
            backgroundPosition: '33.333% 25%',
          },
          '91.666%': {
            backgroundPosition: '25% 16.666%',
          },
          '95.833%': {
            backgroundPosition: '16.666% 8.333%',
          },
          '100%': {
            backgroundPosition: '8.333% 0%',
          },
        },
        shake: {
          '0%': { transform: 'translateX(0%)' },
          '5%': { transform: 'translateX(-2.5%)' },
          '10%': { transform: 'translateX(2%)' },
          '15%': { transform: 'translateX(-1.5%)' },
          '20%': { transform: 'translateX(1%)' },
          '25%': { transform: 'translateX(-0.5%)' },
          '30%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pains: {
          '0%': { transform: 'translateY(0%)', opacity: 1 },
          '22%': { transform: 'translateY(0%)', opacity: 1 },
          '23%': { transform: 'translateY(0%)', opacity: 0 },
          '25%': { transform: 'translateY(-25%)', opacity: 0 },
          '27%': { transform: 'translateY(-25%)', opacity: 1 },
          '47%': { transform: 'translateY(-25%)', opacity: 1 },
          '48%': { transform: 'translateY(-25%)', opacity: 0 },
          '50%': { transform: 'translateY(-50%)', opacity: 0 },
          '52%': { transform: 'translateY(-50%)', opacity: 1 },
          '72%': { transform: 'translateY(-50%)', opacity: 1 },
          '73%': { transform: 'translateY(-50%)', opacity: 0 },
          '75%': { transform: 'translateY(-75%)', opacity: 0 },
          '77%': { transform: 'translateY(-75%)', opacity: 1 },
          '97%': { transform: 'translateY(-75%)', opacity: 1 },
          '98%': { transform: 'translateY(-75%)', opacity: 0 },
          '100%': { transform: 'translateY(0%)', opacity: 0 },
        },
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        overlayHide: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        contentShow: {
          from: {
            opacity: '0',
            transform: 'translate(105%, 0%) scale(1)',
          },
          to: { opacity: '1', transform: 'translate(0%, 0%) scale(1)' },
        },
        contentHide: {
          from: {
            opacity: '1',
            transform: 'translate(0%, 0%) scale(1)',
          },
          to: { opacity: '0', transform: 'translate(105%, 0%) scale(1)' },
        },
        contentShowBottom: {
          from: {
            opacity: '0',
            transform: 'translate(0, 105%) scale(1)',
          },
          to: { opacity: '1', transform: 'translate(0%, 0%) scale(1)' },
        },
        contentHideBottom: {
          from: {
            opacity: '1',
            transform: 'translate(0, 0%) scale(1)',
          },
          to: { opacity: '0', transform: 'translate(0%, 105%) scale(1)' },
        },
        contentShowCenter: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, 105%)',
          },
          to: {
            opacity: '1',
            transform: 'translate(-50%, -50%) scale(1)',
          },
        },
        contentHideCenter: {
          from: {
            opacity: '1',
            transform: 'translate(-50%, -50%)',
          },
          to: {
            opacity: '0',
            transform: 'translate(-50%, 105%) scale(1)',
          },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        horizontalScroll: 'horizontalScroll 50s linear infinite',
        animateBG: 'animateBG 180s ease infinite',
        shake: 'shake 3s ease infinite',
        temporalShake: 'shake 3s ease',
        pains: 'pains 6s ease infinite',
        overlayShow: 'overlayShow 250ms cubic-bezier(0.16, 1, 0.3, 1)',
        overlayHide: 'overlayHide 250ms cubic-bezier(0.7, 0, 0.84, 0)',
        contentShow: 'contentShow 250ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentHide: 'contentHide 250ms cubic-bezier(0.7, 0, 0.84, 0)',
        contentShowBottom:
          'contentShowBottom 250ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentHideBottom:
          'contentHideBottom 250ms cubic-bezier(0.7, 0, 0.84, 0)',
        contentShowCenter:
          'contentShowCenter 250ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentHideCenter:
          'contentHideCenter 250ms cubic-bezier(0.7, 0, 0.84, 0)',
      },
    },
  },
  safelist: [
    'h-[72px]',
    'md:h-[72px]',
    'bg-hg-green',
    'text-hg-green',
    'bg-hg-green300',
    'bg-hg-green100',
    'text-hg-tertiary',
    'bg-hg-tertiary300',
    'bg-hg-magenta',
  ],
  //plugins: [tailwindcssRadix, containerQueries],
};
