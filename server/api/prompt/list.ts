export default defineEventHandler(async (event) => {
    return await $fetch(useRuntimeConfig().baseURL + '/api/v2/prompt/list',
        {
            params: {name: getQuery(event).name}
        }
    )
});
