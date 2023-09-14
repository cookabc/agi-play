import {Response} from "~/types/response";

export async function getPromptList(name: string) {
    return await $fetch('/prompt/list', {
        query: {name: name}
    }) as Response
}

export async function getDefaultPrompts() {
    return await $fetch('/prompt/default') as Response
}
