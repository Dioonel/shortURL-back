import { ObjectSchema } from "joi";

export function joiValidator(schema: ObjectSchema, property: string) {
    return (req, res, next) => {
        const { error } = schema.validate(req[property], { abortEarly: false });
        
        if (error) {
            res.status(400).json({ error: error.message });
        } else {
            next();
        }
    }
}