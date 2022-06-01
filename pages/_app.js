import '../styles/globals.css';
import '../styles/nprogress.css';
import Router from 'next/router';

import { motion } from 'framer-motion';
import NProgress from 'nprogress';

function MyApp({ Component, pageProps, router }) {
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  return (
    <>
      <motion.div
        key={router.route}
        initial={'pageInitial'}
        animate={'pageAnimate'}
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />;
      </motion.div>
    </>
  );
}

export default MyApp;
