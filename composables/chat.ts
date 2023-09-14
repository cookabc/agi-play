// 获取历史对话
import {Response} from "~/types/response";

export async function getChatList(session_id: string) {
    return await $fetch('/chat/list', {
        method: 'POST',
        query: {session_id},
    }) as Response
}

// 对话
export async function makeChat(body: any) {
    return await $fetch('/chat/do', {
        method: 'POST',
        body: body,
    }) as Response
}
