import { Schema, model } from 'mongoose';

const shortenerSchema = new Schema({
    shortId: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 8,
        unique: true,
    },
    redirectUrl: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 255,
        unique: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    }
});

export const shortenerModel = model('shortener', shortenerSchema);