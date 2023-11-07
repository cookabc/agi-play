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
        name: '机器学习训练平台',
        children: [
            {
                title: '图片项目',
                url: '/train/',
                imgUrl: '/assets/images/image_classification.png',
                description: '从问题定义、收集数据、训练模型，解决问题的实现一个完整图像分类模型及其应用，让你可以不用写一行代码，体验AI是如何分辨不同的图像的。在实验过程中，通过不断地收集数据、训练模型的迭代过程，去理解数据在AI模型中所扮演的作用。'
            },
            {
                title: '音频项目',
                url: '/train/',
                imgUrl: '/assets/images/audio_classification.png',
                description: '从计算机如何将人的声音转化成自己可以理解的数字信号，并且通过对不同数字信号的分类模型的训练，体验AI是如何识别人类的语音的。在实验过程中，通过不同的语音指令发布给AI，以及针对噪声的处理，看看AI在识别语音的准确上会出现哪些问题。'
            },
            {
                title: '姿势项目',
                url: '/train/',
                imgUrl: '/assets/images/pose.jpg',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            }
        ]
    },
    {
        name: '视觉工具/实验',
        children: [
            {
                title: '人脸检测工具',
                url: '/face/',
                imgUrl: '/assets/images/face.png',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            },
            {
                title: '人体检测工具',
                url: '/pose/',
                imgUrl: '/assets/images/pose.jpg',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            },
            {
                title: '图像分类模型应用-生活中的图像实验',
                url: '/train/',
                imgUrl: '/assets/images/image_classification.png',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            },

            {
                title: '图像分类模型小游戏-Pacman',
                url: '/pacman/',
                imgUrl: '/assets/images/pacman.jpg',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            }
        ]
    },
    {
        name: '语音工具/实验',
        children: [
            {
                title: '看见声波工具',
                url: '/see-music/',
                imgUrl: '/assets/images/audio_frequency.jpg',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            },
            {
                title: '波形采样工具',
                url: '/wave/',
                imgUrl: '/assets/images/swid.jpg',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            },
            {
                title: '声音分类模型游戏1-寻找布谷鸟',
                url: '/cuckoo/',
                imgUrl: '/assets/images/cuckoo.jpg',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            },
            {
                title: '声音分类模型游戏2-贪食蛇',
                url: '/snake/',
                imgUrl: '/assets/images/snake.jpg',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            },
            {
                title: '语音识别教学工具',
                url: '#',
                imgUrl: '/assets/images/speech.png',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            },
            {
                title: '个性化声音合成工具',
                url: '#',
                imgUrl: '/assets/images/sound_synthesis.jpg',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            }
        ]
    },
    {
        name: 'NLP工具/实验',
        children: [
            {
                title: '自然语言处理教学工具',
                url: '/nlp/',
                imgUrl: '/assets/images/nlp.jpeg',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            }
        ]
    },
    {
        name: '大模型专题',
        children: [
            {
                title: 'GPT大语言模型工具',
                url: 'https://chat.agischool.com.cn',
                imgUrl: '/assets/images/chat.jpg',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            },
            {
                title: '绘画大模型工具',
                url: '#',
                imgUrl: '/assets/images/chat.jpg',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            },
            {
                title: '孩子涂鸦AI工具',
                url: '#',
                imgUrl: '/assets/images/chat.jpg',
                description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips'
            }
        ]
    }
];

export default function Home() {
    return (
        <div>
            {sections.map((section, index) => (
                <div key={index} className="py-2">
                    <div className="bg-white sticky top-0 py-2 z-1 px-10%">
                        <h2 className="relative flex items-center">
                            <span className="before:block w-4px h-24px bg-[#7260af] mr-2"></span>
                            {section.name}
                        </h2>
                    </div>
                    <div className="px-10% py-4">
                        <div className="flex flex-wrap mx--4 gap-y-8">
                            {section.children.map((item, childIndex) => (
                                <div key={childIndex}
                                     className="2xl:w-1/5 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-full w-full px-4">
                                    <a href={item.url} className="block h-full shadow-sm rounded-8" target="_blank">
                                        <div>
                                            <Image
                                                src={`${item.imgUrl}?timestamp=${Date.now()}_${childIndex}`}
                                                alt={item.title}
                                                className="object-cover border border-solid border-[#f0f0f0]"
                                                width={100}
                                                height={200}
                                            />
                                        </div>
                                        <div>
                                            <div className="text-ellipsis" title={item.title}>
                                                {item.title}
                                            </div>
                                            <div className="line-clamp-4" title={item.description}>
                                                {item.description}
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
