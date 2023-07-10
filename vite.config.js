import reactRefresh from '@vitejs/plugin-react-refresh';


export default ({ command }) => ({
    base: command === 'serve' ? '' : '/build/',
    publicDir: 'fake_dir_so_nothing_gets_copied',
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: [
                'resources/scss/style.scss',
                'resources/css/app.css',
                'resources/js/app.js',
            ],

        },
    },
    plugins: [
        reactRefresh(),
    ],
});