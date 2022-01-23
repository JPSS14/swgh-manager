import { Footer } from '../footer';
import { Header } from '../header';
import { ContentStyled } from './layout.style';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <ContentStyled>
        {children}
      </ContentStyled>
      <Footer/>
    </div>
  );
}