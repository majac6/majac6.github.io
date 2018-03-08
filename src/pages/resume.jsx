import React from 'react'
import Helmet from 'react-helmet'

class Resume extends React.Component {
  render() {
    return (
      <div id="resume" className="container">
        <div className="row">

          <div className="col-sm-12">
            <div id="myProfile">
              <div className="photo"></div>
              <div className="margin-bottom-25">
                <div className="kr">임 흥선</div>
                <div className="en">HungSun LIM</div>
              </div>
              <div className="margin-bottom-10">
                <div className="position">Front-End Developer</div>
                <a href="mailto://majac6@gmail.com">majac6@gmail.com</a>
              </div>
              <div className="sns">
                <a href="https://github.com/majac6" target="_blank"><i className="fa fa-github-square" aria-hidden="true"></i></a>
                <a href="https://www.facebook.com/majac6" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/hungsun-lim-a37824106/" target="_blank"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>

          <div className="content-box col-sm-12">
            <h2>Skill</h2>

            <h3 className="text-center">WEB Development</h3>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="img"></div>
                <h4>Javascript</h4>
                <ul>
                  <li>NodeJS</li>
                  <li>Typescript</li>
                  <li>React</li>
                  <li>Angular</li>
                  <li>AngularJS</li>
                  <li>Gatsby.js</li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="img"></div>
                <h4>HTML/CSS</h4>
                <ul>
                  <li>SASS</li>
                  <li>Bootstrap</li>
                  <li>Materialize</li>
                  <li>fontawesome</li>
                  <li>icomoon</li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="img"></div>
                <h4>PHP</h4>
                <ul>
                  <li>Codeigniter</li>
                  <li>Laravel</li>
                  <li>Lumen</li>
                  <li>그누보드</li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="img"></div>
                <h4>Database</h4>
              </div>
            </div>

          </div>

          <div className="col-sm-8 mr-auto ml-auto">

            <h2>History</h2>

            <ul>
              <li><div className="margin-bottom-5">2017.07 ~ NOW</div><a href="https://osci.kr/" target="_blank">OPEN SOURCE CONSULTING</a> : Front-End Developer</li>
              <li><div className="margin-bottom-5">2016.06 ~ 2017.06</div><a href="https://bakcha.com/" target="_blank">Bakcha Company</a> : Front-End Developer</li>
              <li><div className="margin-bottom-5">2012.11 ~ 2016.03</div><a href="http://ecubelabs.com/" target="_blank">Ecube Labs Co., Ltd.</a> : Full-Stack Developer</li>
              <li><div className="margin-bottom-5">2010.04 ~ 2012.01</div>KOREA Army</li>
              <li><div className="margin-bottom-5">2009.03 ~ 2013.08</div><a href="http://kangnam.ac.kr/" target="_blank">KangNam Univ</a> : Computer Media Engineering Bachelor</li>
              <li><div className="margin-bottom-5">2007.03 ~ 2009.02</div><a href="http://www.sehan.ac.kr/" target="_blank">Sehan Univ</a> : Computer Education</li>
              <li><div className="margin-bottom-5">2006.03 ~ 2006.09</div><a href="http://ydhw.co.kr/main/index.php" target="_blank">Yonseigame</a> : Game Design</li>
            </ul>

            <hr />

            <h2>Persnal Project</h2>
            <ul>
              <li><a href="https://github.com/majac6/majac-angular1-tutorial" target="_blank">AngularJS ^1.5 Tutorial</a></li>
              <li><a href="https://majac6.github.io/majac-css/" target="_blank">MAJAC - CSS</a></li>
            </ul>

            <hr />

            <h2>Bakcha Company</h2>
            <ul>
              <li><a href="http://chapang.co.kr/" target="_blank">Chapang Mobile(Cordova) App</a> - Framework7</li>
              <li><a href="https://biz.bakcha.com/" target="_blank">Bakcha BIZ</a> - AngularJS 1</li>
              <li><a href="https://bakcha.com/" target="_blank">Official Website</a> - Jquery</li>
              <li><a href="https://bakcha.com/" target="_blank">Bakcha Mobile(Cordova) App</a>  - Framework7</li>
            </ul>

            <hr />

            <h2>Ecube Labs Co., Ltd.</h2>
            <ul>
              <li><a href="https://cleancitynetworks.com/" target="_blank">CCN(Clean City Networks)</a> - AngularJS 1</li>
              <li><a href="http://ecubelabs.com/" target="_blank">Official Website</a> - CI(PHP), Jquery</li>
              <li><a href="http://parkingtogether.com/" target="_blank">Parkingtogether</a> - Meteor</li>
              <li><a href="http://secretchart.com/" target="_blank">SecretChart</a> - CI(PHP)</li>
              <li>CCN(Clean Cube Networks) Beta Mobile(Cordova) App - Jquery Mobile</li>
              <li>CCN(Clean Cube Networks) Beta - PHP, Jquery</li>
              <li>CCN(Clean Cube Networks) Alpha - PHP, Jquery</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume