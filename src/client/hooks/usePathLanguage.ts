import { useRouter } from 'next/router';

const usePathLanguage = () => {
  const { query } = useRouter();
  const lang = query.lang;
  if (typeof lang === 'string') {
    return lang;
  }
  return 'en';
};

export default usePathLanguage;
