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
                imgUrl: '/static/images/image_train_fv.png',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            },
            {
                title: '声音分类模型训练',
                url: '/train/image',
                imgUrl: '/static/images/audio_train_fv.png',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            },
            {
                title: '姿势分类模型训练',
                url: '/train/pose',
                imgUrl: '/static/images/pose_train_fv.png',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            }
        ]
    },
    {
        name: '游戏',
        children: [
            {
                title: '图像分类游戏-吃豆人',
                url: '/pacman',
                imgUrl: '/static/images/pacman_game.png',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            },
            {
                title: '声音分类游戏-贪食蛇',
                url: '/snake',
                imgUrl: '/static/images/snake_game.png',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            },
            {
                title: '声音分类游戏-寻找布谷鸟',
                url: '/cuckoo',
                imgUrl: '/static/images/cuckoo.jpg',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            },
        ]
    },
    {
        name: '工具',
        children: [
            {
                title: '人体检测工具',
                url: '/pose',
                imgUrl: '/static/images/pose_man.png',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            },
            {
                title: '人脸检测工具',
                url: '/face',
                imgUrl: '/static/images/face_man.png',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            },
        ]
    },
    {
        name: '外部链接',
        children: [
            {
                title: '绘画小程序',
                url: '',
                imgUrl: '/static/images/ai_draw.png',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            },
            {
                title: '聊天助手',
                url: 'https://chat-agischool.vercel.app',
                imgUrl: '/static/images/ai_chat.png',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            },
            {
                title: 'AI训练场',
                url: 'https://play-agischool.vercel.app',
                imgUrl: '/static/images/ai_train.png',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            },
        ]
    },
];

export default function Home() {
    return (
        <div>
            {sections.map((section, index) => (
                <div key={index} className="py-4">
                    <div className="bg-white sticky top-0 py-2 z-1 px-[10%] text-2xl z-10">
                        <h2 className="relative flex items-center before:content-empty before:block before:w-1 before:h-6 before:bg-[#7260af] before:mr-2">
                            {section.name}
                        </h2>
                    </div>
                    <div className="px-[10%] py-4">
                        <div className="flex flex-wrap mx-[-1rem] gap-y-8">
                            {section.children.map((item, itemIdx) => (
                                <div key={itemIdx}
                                     className="2xl:w-1/5 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-full w-full px-4">
                                    <a href={item.url} className="block h-full border-[1px] rounded-xl hover:shadow-xl"
                                       target="_blank">
                                        <div className="rounded-xl">
                                            <div className="w-full h-[200px] relative">
                                                <Image
                                                    src={`${item.imgUrl}?timestamp=${Date.now()}_${itemIdx}`}
                                                    alt={item.title}
                                                    className="object-cover rounded-ss-xl rounded-se-xl"
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                            </div>
                                            <div className="p-[24px] rounded-xl">
                                                <div className="mb-2 text-ellipsis font-bold" title={item.title}>
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
