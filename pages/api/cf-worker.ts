import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const url = `https://jsonhunter.nuk.workers.dev`
        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        })
        res.statusCode = resp.status
        res.end(JSON.stringify(await resp.json()))
    } catch (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ errMsg: '请求服务失败' }))
    }
}
