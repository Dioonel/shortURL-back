import { shortenerModel } from "./model.js";
import { ShortUrl } from "./dto.js";

export class ShortenerStore {
    async create(obj: ShortUrl) {
        const shortUrl = new shortenerModel(obj);
        return await shortUrl.save();
    }

    async get(shortId: string) {
        return await shortenerModel.findOne({ shortId });
    }
}