import {Response} from "~/types/response";

export default defineEventHandler(async (event) => {
    return {code: 0, data: [], message: 'OK'} as Response;
});
