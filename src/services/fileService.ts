// src/services/fileService.ts
import { PutObjectCommand } from '@aws-sdk/client-s3'
import { s3Client } from '../config/s3'

export const uploadFile = async (file: Buffer, fileName: string, contentType: string) => {
    const command = new PutObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: fileName,
        Body: file,
        ContentType: contentType,
    })

    try {
        await s3Client.send(command)
        return `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`
    } catch (error) {
        console.error('Error uploading file:', error)
        throw new Error('File upload failed')
    }
}