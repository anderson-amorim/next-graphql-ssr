import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import fetchLanguage from '~/server/graphql/fetchLanguage';
import { LanguageFragment } from '~/server/graphql/fetchLanguage/fetchLanguage.generated';

type Props = { value: string; language?: LanguageFragment | null };

const Blog: NextPage<Props> = ({ value, language }) => {
  const { query } = useRouter();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Blog page ({query.lang})</main>
      <footer>
        <div>Static value is: {value}</div>
        <br />
        <div>
          Language:
          <br />
          {language && (
            <div>
              {language?.code} - {language?.name} -{language?.native}
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};

type Paths = { lang: string };

export const getStaticPaths: GetStaticPaths<Paths> = async () => {
  const languages = [
    'pt',
    'en',
    'es',
    'ja',
    'ko',
    'ee',
    'fi',
    'ru',
    'th',
    'tr',
    'zh',
  ];
  const paths = languages.map((lang) => ({
    params: { lang },
  }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<Props, Paths> = async ({
  params,
}) => {
  const language = await fetchLanguage(params?.lang);
  const value = params?.lang ?? '';
  return { props: { value, language }, revalidate: 10 };
};

export default Blog;
