export default async function handler(req, res) {
    try {
        const url = `https://jsonhunter.nuk.workers.dev`
        console.log(req.body)
        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        })
        if (resp.status === 200) {
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            const json = await resp.json()
            res.end(JSON.stringify(json))
        } else {
            res.statusCode = 422
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ errMsg: '请求地址或css选择器不正确' }))
        }
    } catch (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ errMsg: '请求服务失败' }))
    }
}
