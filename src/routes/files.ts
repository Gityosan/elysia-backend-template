// src/routes/files.ts
import { Elysia } from 'elysia'
import { uploadFile } from '../services/fileService'

const files = new Elysia({ prefix: '/files' })

files.post('/upload', async ({ body }) => {
    if (!body || !body.file || !body.fileName || !body.contentType) {
        throw new Error('Invalid file upload request')
    }

    const fileUrl = await uploadFile(body.file, body.fileName, body.contentType)
    return { message: 'File uploaded successfully', fileUrl }
})

export default files