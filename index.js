function main() {
    const currentUrl = window.location.href;
    const bannedUrls = [
        'youtube',
        'facebook',
        'twitter',
        'instagram'
    ];
    const redirectUrl = 'https://c.tenor.com/657Vy3stnf8AAAAd/away-para-com-essa-porra.gif';

    bannedUrls.forEach(url => {
        if (currentUrl.search(url) !== -1) {
            window.location.replace(redirectUrl);
        }
    });
}

main();