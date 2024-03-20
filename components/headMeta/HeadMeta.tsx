import Head from "next/head";

type PropsType = {
    title: string,
    desc?: string
}
const HeadMeta = ({title, desc}: PropsType) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={desc || 'Generated by create next app'}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    );
};

export default HeadMeta;
