export default defineEventHandler(async (event) => {
    return await $fetch(useRuntimeConfig().baseURL + '/api/v2/session/chats',
        {
            query: getQuery(event)
        }
    )
});
