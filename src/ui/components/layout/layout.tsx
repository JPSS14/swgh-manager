import { Header } from '../header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div>
        {children}
      </div>
    </div>
  );
}