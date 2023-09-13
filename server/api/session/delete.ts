export default defineEventHandler(async (event) => {
    return await $fetch(useRuntimeConfig().baseURL + '/api/v2/session', {
        method: 'DELETE',
        body: await readBody(event)
    })
});
