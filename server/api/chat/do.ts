export default defineEventHandler(async (event) => {
    return await $fetch(useRuntimeConfig().baseURL + '/api/v2/session/chat',
        {
            method: 'POST',
            body: await readBody(event)
        }
    )
});
