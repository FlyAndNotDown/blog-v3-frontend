import Mock from 'mockjs';

export class MockTool {

    /**
     * 开启 Mock
     */
    static start() {

        // /service/page/index/init
        Mock.mock('/service/page/index/init', {
            success: true,
            data: {
                header: {
                    siteName: 'Kindem的博客',
                    sloganMain: '离开世界前，一切都是过程',
                    sloganSecond: '岁月寻常，负重而行'
                },
                hostInfo: {
                    hostName: 'John Kindem',
                    description: '进击的前端狗'
                },
                itemList: [{
                    type: 'post',
                    title: '你好世界',
                    description: '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述' +
                        '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述' +
                        '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
                    date: '2018.8.10',
                    tags: [{
                        id: 1,
                        name: '测试'
                    }, {
                        id: 2,
                        name: '运维'
                    }]
                }, {
                    type: 'message',
                    text: '今天，Kindem的博客凤凰涅槃了',
                    date: '2018.8.8'
                }]
            }
        });

    }

}