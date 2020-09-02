import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = { value: string };

const Blog: NextPage<Props> = ({ value }) => {
  const { query } = useRouter();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Blog page ({query.lang})</main>
      <footer>Static value is: {value}</footer>
    </div>
  );
};

type Paths = { lang: string };

export const getStaticPaths: GetStaticPaths<Paths> = async () => {
  const languages = ["pt", "en", "es", "ja", "ko"];
  const paths = languages.map((lang) => ({
    params: { lang },
  }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<Props, Paths> = async ({
  params,
}) => {
  const value = params?.lang ?? "";
  return { props: { value }, revalidate: 10 };
};

export default Blog;
