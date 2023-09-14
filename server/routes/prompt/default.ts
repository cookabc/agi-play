import {getRows} from "~/database";
import {Response} from "~/types/response";

export default defineEventHandler(async (event) => {
    let sql = `
        SELECT p.id,
               pc.name    as category,
               pc."order" as category_order,
               p.title,
               p.summary,
               p.prompt,
               p."order"  as prompt_order,
               p.hot,
               FALSE
        FROM prompt p
                 JOIN prompt_category pc ON p.category_id = pc.id
        WHERE p.hot = true
          AND p.deleted_at is null;
    `
    return {code: 0, data: await getRows(sql), message: 'OK'} as Response;
});
