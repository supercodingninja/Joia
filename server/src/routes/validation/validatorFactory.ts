import Validator from "fastest-validator";
import { ObjectID } from "mongodb";

const v = new Validator({
    defaults: {
        objectID: {
            ObjectID
        }
    }
});

export default function validatorFactory (schema:any) {
    return v.compile({
        $$strict: "remove",
        ...schema });
}