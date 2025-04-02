import React from 'react';
import Helmet from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'spoqa-han-sans/css/SpoqaHanSans-kr.css';
import './Layout.scss';

const Layout = ({ children }) => (
  <div className='layout'>
    <Helmet title="Senior Frontend Engineer : HungSun LIM">
      <html lang='ko' />
    </Helmet>
    {/* <Nav /> */}
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
    {/* <div className="left-top-rectangle" /> */}
    {/* <div className="right-bottom-rectangle" /> */}
    <div className='main'>{children}</div>
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='title'>Thanks for visiting</div>
            <div className='links'>
              <a href='https://github.com/majac6' target='_blank' rel='noopener noreferrer'>
                GitHub
              </a>
              <a href='https://www.facebook.com/majac6' target='_blank' rel='noopener noreferrer'>
                Facebook
              </a>
              <a href='https://www.linkedin.com/in/hungsun-lim-a37824106/' target='_blank' rel='noopener noreferrer'>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Layout;
