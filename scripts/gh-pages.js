const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/breadboard-js',
    {
        branch: 'master',
        repo: 'https://github.com/ConradMearns/breadboard-js.git',
        user: {
            name: 'ConradMearns',
            email: 'conradmearns@pm.me'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
