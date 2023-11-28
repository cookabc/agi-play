import Image from "next/image";

interface Item {
    url: string;
    imgUrl: string;
    title: string;
    description: string;
}

interface Section {
    name: string;
    children: Item[];
}

const sections: Section[] = [
    {
        name: '实验',
        children: [
            {
                title: '图像分类模型训练',
                url: '/train/image',
                imgUrl: '/static/images/train_image_fv.png',
                description: '上传图片文件或摄像头拍摄照片，进行图像分类模型训练。'
            },
            {
                title: '声音分类模型训练',
                url: '/train/image',
                imgUrl: '/static/images/train_audio_fv.png',
                description: '上传音频文件或麦克风录制音频，进行音频分类模型训练。'
            },
            {
                title: '姿势分类模型训练',
                url: '/train/pose',
                imgUrl: '/static/images/train_pose_fv.png',
                description: '上传图片文件或摄像头拍摄照片，进行姿势模型训练。'
            }
        ]
    },
    {
        name: '游戏',
        children: [
            {
                title: '图像分类游戏-吃豆人',
                url: '/pacman',
                imgUrl: '/static/images/game_pacman.png',
                description: '爸爸小时候用键盘和手柄玩吃豆人（Pacman）游戏，我现在用手势指挥我的吃豆人。'
            },
            {
                title: '声音分类游戏-贪食蛇',
                url: '/snake',
                imgUrl: '/static/images/game_snake.png',
                description: '用手势指挥已经不酷了，让我用声音来控制贪食蛇吧，好Cool!'
            },
            {
                title: '声音分类游戏-寻找布谷鸟',
                url: '/cuckoo',
                imgUrl: '/static/images/game_cuckoo.jpg',
                description: '亚马逊森林中，一种布谷鸟就要灭绝了，我们来帮助科学家找到布谷鸟，保护好它们吧。'
            },
        ]
    },
    {
        name: '工具',
        children: [
            {
                title: '人体检测工具',
                url: '/pose',
                imgUrl: '/static/images/tool_pose.png',
                description: 'AI是如何识别出我的动作的？看一下就明白了。'
            },
            {
                title: '人脸检测工具',
                url: '/face',
                imgUrl: '/static/images/tool_face.png',
                description: '一起来了解下人脸打卡机是如何实现的吧！'
            },
            {
                title: '波形采样',
                url: '/wave',
                imgUrl: '/static/images/tool_wave.png',
                description: '一起来了解下人脸打卡机是如何实现的吧！'
            },
            {
                title: "NLP分析工具",
                url: "/nlp",
                imgUrl: "/static/images/tool_nlp.png",
                description: "AI是如何理解意图、识别情绪、回答问题的？这里可以找到答案。"
            },
        ]
    },
    {
        name: '外部链接',
        children: [
            {
                title: "OpenAI工具",
                url: "/openai",
                imgUrl: "/static/images/ai_openai.png",
                description: "AI是如何理解意图、识别情绪、回答问题的？这里可以找到答案。"
            },
            {
                title: '聊天助手',
                url: 'https://chat-agischool.vercel.app',
                imgUrl: '/static/images/ai_chat.png',
                description: 'GPT模型是如何帮助大家提高效率的？这里有好多场景等你来探索，快来试试吧！'
            },
            {
                title: 'AI训练场',
                url: 'https://train-agischool.vercel.app',
                imgUrl: '/static/images/ai_train.png',
                description: '上传图片文件或摄像头拍摄照片，进行图像分类模型训练。'
            },
        ]
    },
];

export default function Home() {
    return (
        <div className="mt-[64px]">
            {sections.map((section, index) => (
                <div key={index} className="py-4">
                    <div className="bg-white sticky top-[64px] py-2 z-10 px-[10%] text-2xl">
                        <h2 className="text-[var(--ant-primary-color)] relative flex items-center before:content-empty before:block before:w-1 before:h-6 before:bg-[#7260af] before:mr-2">
                            {section.name}
                        </h2>
                    </div>
                    <div className="px-[10%] py-4">
                        <div className="flex flex-wrap mx-[-1rem] gap-y-8">
                            {section.children.map((item, itemIdx) => (
                                <div key={itemIdx}
                                     className="2xl:w-1/4 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-full w-full px-4">
                                    <a href={item.url}
                                       className="block h-full border-[1px] rounded-xl hover:shadow-xl"
                                       target="_blank">
                                        <div className="rounded-xl">
                                            <div className="w-full h-[200px] relative">
                                                <Image
                                                    src={item.imgUrl}
                                                    alt={item.title}
                                                    className="object-cover rounded-ss-xl rounded-se-xl"
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                            </div>
                                            <div className="p-[24px] rounded-xl">
                                                <div
                                                    className="mb-2 text-ellipsis text-[var(--ant-primary-color)] font-bold"
                                                    title={item.title}>
                                                    {item.title}
                                                </div>
                                                <div className="line-clamp-4 text-sm text-slate-500"
                                                     title={item.description}>
                                                    {item.description}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
