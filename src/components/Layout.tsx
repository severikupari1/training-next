import { Header } from "./Header";
import { ResponsiveAppBar } from "./ResponsiveAppBar";

type Props = {
  children: JSX.Element,
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header title={'Test title'} />
      <ResponsiveAppBar/>
      { children }
    </>
  );
};