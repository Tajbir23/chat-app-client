
import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: process.env.COUDINARY_API_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const { data } = await req.json();
    const uploadedResponse = await cloudinary.uploader.upload(data, {
      upload_preset: 'your-upload-preset',
    });
    return NextResponse.json({ url: uploadedResponse.secure_url });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Something went wrong while uploading' }, { status: 500 });
  }
}

