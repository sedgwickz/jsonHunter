import React from 'react'

const Intro = () => {
    return (
        <div className='text-brew-primary leading-5 space-y-4 max-w-full'>
            <div id='intro'>使用说明：</div>
            <div className='space-y-4'>
                <h3>案例1: 获取v2ex首页贴子标题</h3>
                <figure className='p-4 space-y-4'>
                    <div>
                        请求url
                        <pre>
                            {`
https://v2ex.com/?tab=all`}
                        </pre>
                    </div>
                    <div>
                        请求参数：
                        <pre>
                            {`
[{
    "name": ".topic-link"
}] 
`}
                        </pre>
                    </div>
                </figure>
            </div>
            <div className='space-y-4'>
                <h3>
                    案例2:
                    获取v2ex首页贴子标题及链接，发帖人及链接，以及发表时间
                </h3>
                <figure className='p-4 space-y-4'>
                    <div>
                        请求url
                        <pre>
                            {`
https://v2ex.com/?tab=all`}
                        </pre>
                    </div>
                    <div>
                        请求参数：
                        <pre className='max-w-full'>
                            {`
[
    {
        "name": ".topic-link",
        "attrs": [
        "href"
        ]
    },
    {
        "name": ".topic_info strong:first-of-type a",
        "attrs": [
        "href"
        ]
    },
    {
        "name": ".topic_info span"
    }
]
                `}
                        </pre>
                    </div>
                </figure>
            </div>
            <div className='space-y-4'>
                <h3>⚠️注意：目前支持的选择器如下</h3>
                <figure className='p-4 space-y-4'>
                    <pre>
                        {`
*  任何元素

E  任何类型E的元素

E:nth-child(n)  一个E元素，其父元素的第n个子元素

E:first-child  一个E元素，其父元素的第一个孩子

E:nth-of-type(n)  E元素，其类型的第n个同级

E:first-of-type  E元素，其类型的第一个同级

E:not(s)  与两个复合选择器都不匹配的E元素

E.warning  属于类警告的E元素

E#myid  ID等于myid的E元素。

E[foo]  具有foo属性的E元素

E[foo="bar"]  一个E元素，其foo属性值完全等于bar

E[foo="bar" i]  一个E元素，其foo属性值完全等于bar的任何（ASCII范围）大小写排列

E[foo="bar" s]  一个E元素，其foo属性值与大小写精确且等于bar

E[foo~="bar"]  一个E元素，其foo属性值是由空格分隔的值的列表，其中一个值等于bar

E[foo^="bar"]  一个E元素，其foo属性值完全以字符串bar开头

E[foo$="bar"]  一个E元素，其foo属性值恰好以字符串bar结尾

E[foo*="bar"]  一个E元素，其foo属性值包含子字符串栏

E[foo|="en"]  一个E元素，其foo属性值是用en开头的连字符分隔的值列表

E F  E元素的F元素后代

E > F  E元素的F元素子元素
`}
                    </pre>
                </figure>
            </div>
        </div>
    )
}

export default Intro
