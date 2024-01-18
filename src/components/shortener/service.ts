import { ShortenerStore } from "./store.ts";
import { nanoid } from "nanoid";

const shortenerStore = new ShortenerStore();

export class ShortenerService {
    async create(url?: string) {
        if(!url) throw new Error('URL is required');
        const shortId = nanoid(8);
        const shortUrl = {
            shortId,
            redirectUrl: url,
            createdAt: new Date(),
        };
        return await shortenerStore.create(shortUrl);
    }
}