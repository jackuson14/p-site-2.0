import Theme from '../styles/theme';
import GlobalFont from '../fonts/fonts'
import '../styles/scss/HeroAnimation.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
          <GlobalFont />
          <Component {...pageProps} />
      </Theme>
    </>
  );
}
 