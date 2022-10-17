import express, { Request, Response } from 'express'

import { PORT } from './libraries/config'
import { serverPrettyUrl } from './libraries/helpers'

const app = express()

app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({ message: 'Aloha!' })
})

app.listen(PORT, () => console.log(serverPrettyUrl(PORT)))
