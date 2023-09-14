import promptDefault from '~/database/prompt.default.json';
import {Response} from "~/types/response";

export default defineEventHandler(async (event) => {
    return {code: 0, data: promptDefault, message: 'OK'} as Response;
});
