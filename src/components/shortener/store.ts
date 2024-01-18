import { shortenerModel } from "./model.ts";
import { ShortUrl } from "./dto.ts";

export class ShortenerStore {
    async create(obj: ShortUrl) {
        const shortUrl = new shortenerModel(obj);
        return await shortUrl.save();
    }

    async get(shortId: string) {
        return await shortenerModel.findOne({ shortId });
    }
}