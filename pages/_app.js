import '../styles/globals.css'
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events. 
// Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());  



//bellow code for loader 
Router.onRouteChangeStart = () => {
  console.log('onRouteChangeStart Triggered');
  // <CustomLoadingScreen />;

};

Router.onRouteChangeComplete = () => {
  console.log('onRouteChangeComplete Triggered');
  // <CustomLoadingScreen />;

};

Router.onRouteChangeError = () => {
  console.log('onRouteChangeError Triggered');
  // <CustomLoadingScreen />;

};

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
