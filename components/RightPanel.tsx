import React from 'react'
interface Props {
    result: string
    url: string
}
const RightPanel = ({ result, url }: Props) => {
    return (
        <>
            <figure className='min-h-100px mt-4 md:mt-0 flex-auto p-2 rounded text-white border-2 border-solid border-brew-primary overflow-scroll max-h:h-(screen-40)'>
                <pre>{result}</pre>
            </figure>
            <div className='flex justify-end space-x-2'>
                <button
                    onClick={() => {
                        if (!result) {
                            alert('没有访问数据')
                            return
                        }
                        const element = document.createElement('a')
                        const file = new Blob(['\ufeff' + result], {
                            type: 'text/plain;charset=UTF-8'
                        })
                        element.href = URL.createObjectURL(file)
                        window.open(element.href, '_blank')
                    }}
                >
                    预览
                </button>
                <button
                    onClick={() => {
                        if (!result) {
                            alert('没有访问数据')
                            return
                        }
                        const element = document.createElement('a')
                        const file = new Blob([result], {
                            type: 'text/json'
                        })
                        element.href = URL.createObjectURL(file)
                        element.download = url + '.json'
                        document.body.append(element)
                        element.click()
                    }}
                >
                    下载
                </button>
            </div>
        </>
    )
}

export default RightPanel
