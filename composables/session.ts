import {Response} from "~/types/response";

// 获取会话列表
export async function getSessionList() {
    return await $fetch('/api/session/list') as Response
}

export async function editSessionName(body: any) {
    return await $fetch('/api/session/name', {
        method: 'PUT',
        body: body,
    }) as Response
}

// 删除一个会话
export async function deleteSession(body: any) {
    return await $fetch('/api/session/delete', {
        method: 'DELETE',
        body: body,
    }) as Response
}
