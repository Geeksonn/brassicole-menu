/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            backgroundImage: {
                header: "url('/banner.svg')",
            },
            colors: {
                'dark-green': '#004335',
                pink: '#EEA4C8',
                orange: '#F6A000',
                beige: '#FAF9FA',
                'light-grey': '#909090',
                'very-light-grey': '#F8F8F8',
                'dark-white': '#EEEEEE',
                red: '#E65E44',
            },
        },
        fontFamily: {
            body: ['Inter', 'sans-serif'],
            title: ['new-spirit', 'serif'],
        },
        boxShadow: {
            default: '5px 5px 30px rgba(0, 0, 0, 0.1)',
        },
    },
    plugins: [],
};
