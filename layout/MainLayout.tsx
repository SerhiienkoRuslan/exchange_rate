import Head from "next/head";

import BackgroundStack from "../components/BackgroundStack";

interface PropsType {
  title: string;
  children: React.ReactNode;
  bgSpacing: any;
}

const MainLayout = ({ title, children, bgSpacing }: PropsType) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Exchange Rate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BackgroundStack spacing={bgSpacing}>
          {children}
        </BackgroundStack>
      </main>
    </>
  );
};

export default MainLayout;
