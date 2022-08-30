import { Helmet } from "react-helmet";

type Props = {
  title: string,
};

export const Header = ({ title }: Props) => {
  // @ts-ignore
  return (
    <>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

      </Helmet>
    </>
  );
};
