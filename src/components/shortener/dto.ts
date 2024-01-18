import joi from 'joi';

export const UrlJoi = joi.object({
    url: joi.string().uri().required()
});

export interface ShortUrl{
    shortId: string;
    redirectUrl: string;
    createdAt: Date;
}