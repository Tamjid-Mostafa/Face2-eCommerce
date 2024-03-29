/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

const sfPro = fetch(
  new URL('../../styles/SF-Pro-Display-Medium.otf', import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler(req) {
  const [sfProData] = await Promise.all([sfPro])

  const { searchParams } = req.nextUrl
  const title = searchParams.get('title') || 'face2'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          backgroundImage:
            'linear-gradient(to bottom right, #E0E7FF 25%, #ffffff 50%, #CFFAFE 75%)',
        }}
      >
        <img
          src={new URL('../../public/logo.png', import.meta.url).toString()}
          alt="Face2 Logo"
          tw="w-48 h-48 mb-4 opacity-95"
        />
        <h1
          style={{
            fontSize: '100px',
            fontFamily: 'SF Pro',
            background:
              'linear-gradient(to bottom right, #000000 21.66%, #78716c 86.47%)',
            backgroundClip: 'text',
            color: 'transparent',
            lineHeight: '5rem',
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'SF Pro',
          data: sfProData,
        },
      ],
    }
  )
}
