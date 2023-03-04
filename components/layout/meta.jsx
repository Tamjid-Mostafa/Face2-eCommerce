import Head from "next/head";

const DOMAIN = "https://face2-omega.vercel.app";

export default function Meta({
    title = "Face2-Leading Clothing Brand",
    description = "Face2 is the leading clothing brand of Bangladesh. We manufacture and sell best quality mens lifestyle attire with variety of designs. The all-new face2 Panjabi Designs for Men 2023 are set to blaze this wedding season. Getting flattering compliments, being the fashion icon and creating a style statement are some basic…",
    image = `${DOMAIN}/api/og`,
}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />

            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta itemProp="image" content={image} />
            <meta property="og:logo" content={`${DOMAIN}/logo.png`}></meta>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@vercel" />
            <meta name="twitter:creator" content="@steventey" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
    );
}