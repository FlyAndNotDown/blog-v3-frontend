import Mock from 'mockjs';

export class MockTool {

    /**
     * 开启 Mock
     */
    static start() {

        // /service/page/index
        Mock.mock('/service/page/index', {
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
                description: '这是测试描述这是测试描述这是测试描述这是测试描述这是测试描述这是测试描述这是测试描述' +
                    '这是测试描述这是测试描述这是测试描述这是测试描述这是测试描述这是测试描述这是测试描述这是测试描述' +
                    '这是测试描述这是测试描述这是测试描述这是测试描述这是测试描述这是测试描述这是测试描述这是测试描述',
                date: '2018.7.13',
                tags: [{
                    id: 1,
                    name: '测试'
                }, {
                    id: 2,
                    name: '运维'
                }]
            }]
        });

    }

}