import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import './resume.scss'

class Resume extends React.Component {
  render() {
    return (
      <div id="resume" className="container">
        <div className="row">
          <div className="col-sm-12">
            <div id="myProfile">
              <div className="photo" />
              <div className="margin-bottom-25">
                <div className="kr">임 흥선</div>
                <div className="en">HungSun LIM</div>
              </div>
              <div className="margin-bottom-10">
                <div className="position">Front-End Developer</div>
                <div>
                  <small>KangNam Univ. Computer Media Engineering</small>
                </div>
                <a href="mailto://majac6@gmail.com">majac6@gmail.com</a>
              </div>
              <div className="sns">
                <a href="https://github.com/majac6" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a href="https://www.facebook.com/majac6" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hungsun-lim-a37824106/"
                  target="_blank"
                >
                  <i className="fa fa-facebook-official" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-10 row mr-auto ml-auto">
            <div className="col-sm-12">
              <h2>Skill</h2>
              <hr />
            </div>

            <div className="col-sm-3">
              <h4>Front End</h4>
            </div>
            <div className="col-sm-9">
              <ul>
                <li>
                  Javascript & Typescript
                  <small>React, AngularJS, Angular, Meteor, Webpack2</small>
                </li>
                <li>
                  HTML/CSS
                  <small>SASS(SCSS), SVG, Bootstrap, Pug(Jade)</small>
                </li>
              </ul>
            </div>

            <div className="col-sm-3">
              <h4>Back End</h4>
            </div>
            <div className="col-sm-9">
              <ul>
                <li>
                  Javascript & Typescript
                  <small>Express, Hapi</small>
                </li>
                <li>
                  PHP
                  <small>Codeigniter, Laravel(Lumen)</small>
                </li>
                <li>
                  Database
                  <small>Mysql(MariaDB), MongoDB</small>
                </li>
              </ul>
            </div>

            <div className="col-sm-3">
              <h4>Server</h4>
            </div>
            <div className="col-sm-9">
              <ul>
                <li>
                  Cloud Server
                  <small>AWS, Openstack</small>
                </li>
                <li>
                  OS
                  <small>Ubuntu, CentOS</small>
                </li>
                <li>
                  Etc..
                  <small>
                    Docker & Docker-Compose, Gitlab, PlexMediaServer, ownCloud
                  </small>
                </li>
              </ul>
            </div>

            <div className="col-sm-3">
              <h4>Tools</h4>
            </div>
            <div className="col-sm-9">
              <ul>
                <li>
                  Dev
                  <small>VScode, Sublime Text 3</small>
                </li>
                <li>
                  UI/UX
                  <small>Photoshop, Illustrator, Adobe XD</small>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-10 row mr-auto ml-auto">
            <div className="col-sm-12">
              <h2>Company</h2>
              <hr />
            </div>

            <div className="col-sm-3">
              <h4>Open Source Consulting. Inc</h4>
              <small>2017.07 ~ Now</small>
            </div>
            <div className="col-sm-9">
              <ul>
                <li>
                  RORO Beta
                  <div>Migration 솔루션 Front end 개발</div>
                  <small>React</small>
                </li>
                <li>
                  Official Product Website
                  <div>제품 홍보용 Static 웹사이트 개발</div>
                  <small>React(gatsby.js)</small>
                </li>
                <li>
                  RORO Alpha
                  <div>Migration 솔루션 Front end 개발</div>
                  <small>Angular4</small>
                </li>
              </ul>
            </div>

            <div className="col-sm-3">
              <h4>Bakcha Company</h4>
              <small>2016.06 ~ 2017.05</small>
            </div>
            <div className="col-sm-9">
              <ul>
                <li>
                  Chapang Mobile(Cordova) App
                  <div>중고차 경매 하이브리드 앱</div>
                  <small>Framework7</small>
                </li>
                <li>
                  Bakcha BIZ
                  <div>중고차 양수도 업체 전용 웹앱</div>
                  <small>AngularJS</small>
                </li>
                <li>
                  Official Website
                  <div>Bakcha Company 공식 웹사이트</div>
                  <small>Jquery</small>
                </li>
                <li>
                  Bakcha Mobile(Cordova) App
                  <div>중고차 매매 하이브리드 앱</div>
                  <small>Framework7</small>
                </li>
              </ul>
            </div>

            <div className="col-sm-3">
              <h4>Ecube Labs Co., Ltd.</h4>
              <small>2012.11 ~ 2016.03</small>
            </div>

            <div className="col-sm-9">
              <ul>
                <li>
                  CCN(Clean City Networks)
                  <div>제품 솔루션 웹앱 프론트 개발</div>
                  <small>AngularJS</small>
                </li>
                <li>
                  Official Website
                  <div>회사 공식 홈페이지 개발</div>
                  <small>PHP(Codeigniter), Jquery</small>
                </li>
                <li>
                  Parkingtogether
                  <div>정부과제(주차관제시스템) 프론트 개발</div>
                  <small>Meteor</small>
                </li>
                <li>
                  SecretChart
                  <div>성형&뷰티 큐레이션 프로젝트 백앤드 개발</div>
                  <small>PHP(Codeigniter)</small>
                </li>
                <li>
                  CCN(Clean Cube Networks) Beta 하이브리드 앱
                  <div>제품 솔루션 베타버전의 모바일 앱 개발</div>
                  <small>Jquery Mobile, PhoneGap</small>
                </li>
                <li>
                  CCN(Clean Cube Networks) Beta
                  <div>제품 솔루션 프론트, 백앤드 개발</div>
                  <small>PHP, Jquery</small>
                </li>
                <li>
                  CCN(Clean Cube Networks) Alpha
                  <div>제품 솔루션 프론트, 백앤드 개발</div>
                  <small>PHP, Jquery</small>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-10 row mr-auto ml-auto">
            <div className="col-sm-12">
              <h2>Personal Somethings</h2>
              <hr />
            </div>

            <div className="col-sm-3">
              <h4>Open Source</h4>
            </div>
            <div className="col-sm-9">
              <ul>
                <li>
                  <a
                    href="https://github.com/majac6/singleLinePrice-chart-majac"
                    target="_blank"
                  >
                    Single Price Chart
                  </a>
                  <div>박차컴퍼니 앱에 사용되기 위해 제작</div>
                  <small>D3.js</small>
                </li>
                <li>
                  <a
                    href="https://github.com/majac6/package_daum-postcode"
                    target="_blank"
                  >
                    Daum Postcode Meteor Package
                  </a>
                  <div>Meteor 에서 사용하기 위해 다음 주소찾기를 미티어 패키지 제작</div>
                  <small>Javascript, Meteor</small>
                </li>
              </ul>
            </div>

            <div className="col-sm-3">
              <h4>OutSourced Dev</h4>
            </div>
            <div className="col-sm-9">
              <ul>
                <li>
                  Twinkring BackOffice
                  <div>기존 종이로 처리하던 업무 시스템을 웹앱으로 전환</div>
                  <small>기획, Angular4, AWS, PHP(Lumen)</small>
                </li>
              </ul>
            </div>

            <div className="col-sm-3">
              <h4>Speech</h4>
            </div>
            <div className="col-sm-9">
              <ul>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=wNkVQxbcYeg&index=32&list=PLORxAVAC5fUW6hZ4C7YQ-RluswzsE5Ibb"
                    target="_blank"
                  >
                    2018 AWS Summit Seoul
                  </a>
                  <div>AWS 행사에서 회사 대표로 '데이터 센터 모던화' 에 대해 발표</div>
                  <small>Server, AWS, DevOps</small>
                </li>
                <li>
                  <Link to="osc-tonight">2018 OSC Tonight</Link>
                  <div>사내에서 진행된 행사에서 'Javascript로 할수있는 일들' 에 대해 발표</div>
                  <small>Javascript</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume
