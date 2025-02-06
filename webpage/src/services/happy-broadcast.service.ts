import Parser from 'rss-parser'

export class HappyBroadcastService {
    static async getFeed() {
        const parser = new Parser()
        const feed = await parser.parseURL('https://www.reddit.com/.rss');
        console.log(feed.title);

        return feed.items.map(item => item.title + ':' + item.link);
    }
}
