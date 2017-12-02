import Head from 'next/head';
import { url as gravatar } from 'gravatar';

import GitHub from '../components/icons/github';
import Twitter from '../components/icons/twitter';
import LinkedIn from '../components/icons/linkedin';
import Instagram from '../components/icons/instagram';

const picUrl = gravatar('n@n8.io', { s: 500 });

export default props => {
  return (
    <div id="root">
      <Head>
        <title>n8.io</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, user-scalable=no"
          key="viewport"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
        <link href="https://sf.n8.io/?weight=100" rel="stylesheet" />
      </Head>

      <div id="content">
        <img src={ picUrl } />
        <h1 className="name">Nathan Rajlich</h1>
        <h2 className="handle">@TooTallNate</h2>
        <div id="icons">
          <a href="https://github.com/TooTallNate"><GitHub className="github" /></a>
          <a href="https://twitter.com/TooTallNate"><Twitter className="twitter" /></a>
          <a href="https://www.linkedin.com/in/nathan-rajlich-aaa17233"><LinkedIn className="linkedin" /></a>
          <a href="https://instagram.com/TooTallNate"><Instagram className="instagram" /></a>
        </div>
      </div>

      <style jsx>{`
        #root {
          align-items: center;
          display: flex;
          justify-content: center;
          height: 100%;
        }

        img {
          filter: grayscale(100%);
          border: #222 1px solid;
          border-radius: 50% 50%;
          width: 50%;
          margin-bottom: 0.4em;
        }

        h1, h2 {
          margin: 0;
          font-weight: normal;
        }

        h2 {
          margin-top: 0.4em;
        }

        .name {
          color: white;
        }

        .handle {
          font-style: italic;
        }

        #content {
          text-align: center;
        }

        #icons {
          margin-top: 1.2em;
          height: 2.5em;
        }

        #icons :global(svg) {
          fill: #ccc;
          vertical-align: top;
          width: 2em;
          padding: 0 0.5em;
          filter: drop-shadow(0 0 0 white);
          transition-duration: 0.3s;
          transition-property: fill, filter, padding, width;
        }

        #icons :global(svg):hover {
          width: 2.5em;
          padding: 0 0.8em;
        }

        #icons :global(.github):hover {
          fill: #FFFFFF;
          filter: drop-shadow(0 0 0.2em #FFFFFF);
        }

        #icons :global(.twitter):hover {
          fill: #1DA1F2;
          filter: drop-shadow(0 0 0.2em #1DA1F2);
        }

        #icons :global(.linkedin):hover {
          fill: #0077B5;
          filter: drop-shadow(0 0 0.2em #0077B5);
        }

        #icons :global(.instagram):hover {
          fill: #E4405F;
          filter: drop-shadow(0 0 0.2em #E4405F);
        }
      `}</style>

      <style global jsx>{`
        html, body {
          background-color: #161616;
          color: #ccc;
          font-family: 'San Francisco';
        }

        /* https://github.com/zeit/next.js/issues/822#issuecomment-328279284 */
        html, body, body > div:first-child, #__next, #__next > div:first-child  {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
};
