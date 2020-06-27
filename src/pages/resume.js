import React, { Component } from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'

import './resume.scss'

export class Resume extends Component {
  render() {
    return (
      <Layout>
        <div id="resume">
          <section>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div id="myProfile">
                    <div className="photo">
                      <img src="https://s.gravatar.com/avatar/ac88fef73fb20037feaf38ff349b129c?s=500&r=pg" />
                    </div>
                    <div className="mb-3">
                      <div className="kr">임 흥선</div>
                      <div className="en">HungSun LIM</div>
                    </div>
                    <div className="mb-2">
                      <div className="position">Front-End Developer</div>
                      <div>
                        <small>KangNam Univ. Computer Media Engineering</small>
                      </div>
                      <a href="mailto://majac6@gmail.com">majac6@gmail.com</a>
                    </div>
                    <div className="sns">
                      <a
                        href="https://github.com/majac6"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://www.facebook.com/majac6"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Linkedin
                      </a>
                      <a
                        href="https://www.linkedin.com/in/hungsun-lim-a37824106/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="skill">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h2>보유 기술</h2>
                </div>
                <div className="col-sm-12 mb-4">
                  <p className="text-lg">
                    안녕하세요 프론트앤드 개발자 임흥선입니다. 처음 개발을
                    시작하고 AngularJS 를 만난후 프론트앤드 개발자로써 첫 시작을
                    하였습니다. 지금은 React 를 위주로 사용하고 있고 이 분야에서
                    최고가 되기 위해 노력하고 있습니다.
                  </p>
                </div>
                <div className="col-sm-4">
                  <div className="mb-2">
                    <b className="text-lg">JS/HTML/CSS</b>
                  </div>
                  <ul>
                    <li>자바스크립트 + No Jquery</li>
                    <li>Webpack</li>
                    <li>CSS 전처리기 사용</li>
                    <li>아름다운 HTML</li>
                    <li>다양한 브라우저 지원</li>
                    <li>검색엔진 최적화</li>
                  </ul>
                </div>
                <div className="col-sm-4">
                  <div className="mb-2">
                    <b className="text-lg">React</b>
                  </div>
                  <ul>
                    <li>컴포넌트 기반 개발</li>
                    <li>Styled 컴포넌트 활용</li>
                    <li>컴포넌트 라이프사이클 및 최적화</li>
                    <li>컴포넌트 상태 관리(State, Mobx)</li>
                    <li>Redux + Flux 구조</li>
                    <li>코드 스플리팅을 통한 앱 최적화</li>
                  </ul>
                </div>
                <div className="col-sm-4">
                  <div className="mb-2">
                    <b className="text-lg">Angular</b>
                  </div>
                  <ul>
                    <li>컴포넌트 기반 개발</li>
                    <li>프로바이더 활용</li>
                    <li>모듈 지연 로딩</li>
                    <li>데이터 반응형 구조 설계</li>
                  </ul>
                </div>
                <div className="col-sm-4">
                  <div className="mb-2">
                    <b className="text-lg">Database</b>
                  </div>
                  <ul>
                    <li>RDB : MariaDB, Mysql</li>
                    <li>NoSQL : MongoDB</li>
                  </ul>
                </div>
                <div className="col-sm-4">
                  <div className="mb-2">
                    <b className="text-lg">Server</b>
                  </div>
                  <ul>
                    <li>PHP with Composer</li>
                    <li>NodeJS, Express, Koa.js</li>
                  </ul>
                </div>
                <div className="col-sm-4">
                  <div className="mb-2">
                    <b className="text-lg">Tools</b>
                  </div>
                  <ul>
                    <li>VS code, gitKraken, git CLI</li>
                    <li>Sketch, Adobe XD</li>
                    <li>Photoshop, Illustrator</li>
                    <li>MS Office, Page, Keynote</li>
                  </ul>
                </div>
                <div className="col-sm-12">
                  <div className="mb-2">
                    <b className="text-lg">Infra Structure</b>
                  </div>
                  <ul>
                    <li>OS: Ubuntu, Amazone Linux 2</li>
                    <li>AWS: EC2, ECS, S3, Route53, EKS, CloudFront</li>
                    <li>CI/CD: Github Action, Jenkins</li>
                    <li>I Love Docker</li>
                  </ul>
                </div>
                <div className="col-sm-12">
                  <div className="mb-2">
                    <b className="text-lg">Communication</b>
                  </div>
                  <ul>
                    <li>
                      레드마인, 지라, 컨플루언스를 사용하는 것을 좋아합니다.
                    </li>
                    <li>
                      깃랩, 레드마인(아틀라시안 제품군) 등을 직접 셋팅하고
                      동료들과 프로젝트를 진행합니다.
                    </li>
                    <li>
                      프로토타이핑, 그래픽 툴을 활용해 앞으로의 개발에 대해
                      이야기하고 반영합니다.
                    </li>
                    <li>간결하고 아름다운 문서를 작성하는 것을 좋아합니다.</li>
                  </ul>
                </div>
                <div className="col-sm-12">
                  <div className="mb-2">
                    <b className="text-lg">Licenses</b>
                  </div>
                  <ul>
                    <li>2004­.12.­10 - M­Commerce관리사 2급(MCS­09­000231)</li>
                    <li>2004.10.11 - 정보기기운용기능사(04404100554Y)</li>
                    <li>2004­.04.­30 - 인터넷정보검색사 2급(IIS­21­002405)</li>
                    <li>2004­.04.­19 - 정보처리기능사(0M01101408Y)</li>
                    <li>
                      2003­.12.­22 - 컴퓨터그래픽스운용기능사(03405 1027520)
                    </li>
                    <li>2003­.10.­30 - 컴퓨터활용능력 2급</li>
                    <li>2003­.07.­03 - 워드프로세서 1급</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="project">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h2>개발 경험</h2>
                </div>

                <div className="col-sm-4">
                  <h3>주식회사 카닥</h3>
                  <div className="role">프론트앤드 개발</div>
                  <div className="date">2019.01 - NOW</div>
                </div>

                <div className="col-sm-8">
                  <div className="project">
                    <h3>cardoc react generator 업데이트</h3>
                    <div className="date">2020.05</div>
                    <p className="description">
                      월초에 제작했던 cg 커맨드는 컨테이너와 컴포넌트만 생성이
                      가능하였으나 기능을 추가로 개선해 페이지, 엘리먼트 등도 이
                      커맨드를 이용해 자동으로 생성할수 있도록 추가하였고 헤당
                      프로젝트가 JS ,TS 인지를 옵션으로 부여받았지만 프로젝트
                      루트폴더의 index.js or ts 를 보고 자동으로 이 프로젝트의
                      메인 언어를 파악하는 방식으로 변경하였습니다. 그리고 각
                      컴포넌트 타입에 따라 필요한 패키지를 미리 첨부해두는
                      식으로 작업자의 피로를 덜 수 있는 방향으로
                      업데이트하였습니다.
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">NodeJS, Yarn Workspace</p>
                    <h5>역할</h5>
                    <div className="myRole">
                      <ul>
                        <li>
                          ts, js 를 옵션으로 받지만 자동으로 감지해 생성하도록
                          변경
                        </li>
                        <li>
                          ReadME 업데이트 및 프론트 개발자들에게 교육 진행
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="project">
                    <h3>마이카 프로필 업데이트</h3>
                    <div className="date">2020.05</div>
                    <p className="description">
                      마이카의 프로필 페이지를 도입할 필요성이 있기에 새로운
                      UI를 적용하였고 기존 레거시 코드를 개선하는 작업도 함께
                      이루어졌습니다. 기존에는 page 를 메인으로 두고 하단에
                      추가적인 페이지를 만드는 방식으로 구현되었지만 몰 작업때
                      완전히 정착된 컨테이너 패턴을 적용해 레거시와 독립된
                      형태로 구성하였습니다.
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">React, Context, Hooks, AWS S3</p>
                    <h5>역할</h5>
                    <div className="myRole">
                      <ul>
                        <li>컨테이너 패턴 적용</li>
                        <li>
                          callback 패턴 적용 및 DeBounce 개념 도입해 불필요한
                          렌더링 제거
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="project">
                    <h3>카닥몰 2차 업데이트</h3>
                    <div className="date">2020.04</div>
                    <p className="description">
                      카닥몰 최초 업데이트 이후 후속으로 진행된 프로젝트입니다.
                      기존 디자인 패턴을 유지하면서 상품 검색,목록,상세,후기 및
                      상품문의 등 장바구니 이전 단계까지의 흐름을 구현하였고 이
                      부분을 1개의 컨테이너로 구현하였습니다.
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">
                      React, Typescript, Context, Hooks, Docker, k8s(AWS EKS)
                    </p>
                    <h5>역할</h5>
                    <div className="myRole">
                      <ul>
                        <li>
                          callback 패턴 적용 및 DeBounce 개념 도입해 불필요한
                          렌더링 제거
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="project">
                    <h3>카닥몰 첫 랜딩 페이지 프로젝트</h3>
                    <div className="date">2020.03</div>
                    <p className="description">
                      통합결제 프로젝트와 병행으로 진행되었으며 기존
                      워드프레스의 view 를 사용하지 않고 프론트앤드 사이드는
                      별도로 작성해 빠른 페이지 로딩과 카닥에서 제공하는 UI/UX
                      를 첫 페이지에 도입하는 프로젝트입니다.
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">
                      React, Typescript, Context, Hooks, Docker, k8s(AWS EKS)
                    </p>
                    <h5>역할</h5>
                    <div className="myRole">
                      <ul>
                        <li>
                          서버에서 준 타입으로 동적인 컴포넌트를 사용하도록 구성
                        </li>
                        <li>
                          컴포넌트 최적화를 위해 state, staticState 등의 개념
                          분리
                        </li>
                        <li>
                          callback 패턴으로 컨테이너 컴포넌트간 통신규약 설정 후
                          내부 개발자 교육 진행
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="project">
                    <h3>카닥 통합결제, 신용카드등록 프로젝트</h3>
                    <div className="date">2020.02 - 2020.03</div>
                    <p className="description">
                      각 서비스별로 독립적으로 작용했던 결제창을 하나로
                      통합하고, 유저가 자신의 신용카드를 직접 등록해 반복적으로
                      사용할수 있도록 추가되었습니다. 그리고 새롭게 템플릿
                      패턴을 통해 반복적인 페이지의 레이아웃을 컴포넌트화 하는
                      작업도 진행되었습니다.
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">React, Typescript, Context, Hooks</p>
                    <h5>역할</h5>
                    <div className="myRole">
                      <ul>
                        <li>컨테이너 패턴으로 두가지 기능을 효율적으로 작성</li>
                        <li>
                          카드번호와 같이 특정 패턴을 정규화하도록 input masking
                          hook 작성
                        </li>
                        <li>
                          전역, 지역 Context 를 활용해 props 깊이와 리렌더링
                          컨트롤
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="project">
                    <h3>
                      프론트앤드 모든 프로젝트 모노레포(Monorepo) 전환 및 CI/CD
                      개선
                    </h3>
                    <div className="date">2019.12 - 2020.01</div>
                    <p className="description">
                      더 빠르고 효율적인 작업을 위해, MSA + 모놀리식 으로 구성된
                      지금의 방식을 yarn workspace 를 활용해 모노레포 환경으로
                      다시 구성하였습니다. 구상했던 방식을 12월 외부 세미나에서
                      TOSS팀의 개발방식에 대해 이야기를 듣고 난 뒤 좀 더
                      확신하게 되었고 이를 실제 구현하였으며 이를 도입하면서
                      젠킨스가 아닌 github Action 으로 CI/CD 툴을
                      변경하였습니다. 이 시점부터 모든 프론트앤드 프로젝트는
                      도커로 전환되었습니다. 그리고 쉘스크립트와
                      cardoc-react-generator(cg cli) 를 만들어 모든 개발자가
                      동일한 컨벤션을 가질 수 있도록 툴로써 제공하였습니다.
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">
                      AWS, Github Action, Docker, Yarn, Yarn Workspace
                    </p>
                    <h5>역할</h5>
                    <div className="myRole">
                      <ul>
                        <li>
                          ./deploy.sh 쉘스크립트를 사용해 모든 production 배포
                          로직을 시스템화
                        </li>
                        <li>
                          1개 저장소에 다중 프로젝트 구조를 갖는 모노레포 구성
                        </li>
                        <li>
                          cardoc-react-generator cli 프로젝트로 생성해 코드
                          컨벤션 통일
                        </li>
                        <li>오래되고 정확하지 않은 README 재정리</li>
                        <li>프론트앤드 팀 내 개발자 교육</li>
                        <li>
                          변경된 사항을 다른 팀과 공유하기 위해 슬라이드 제작 및
                          세미나 진행
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="project">
                    <h3>테크샵, 워시, admin 툴 업데이트</h3>
                    <div className="date">2019.11 - 2019.12</div>
                    <p className="description">
                      카닥의 테크샵(엔진오일), 워시(세차) 서비스는 모두 100%
                      웹뷰로만 구성되어 있습니다. 그리고 이 웹뷰는 네이티브 앱과
                      JS인터페이스를 통해 긴밀히 통신하기에 이 부분에 유의해야
                      하고 매우 안 좋은 구조의 리액트 패턴으로 작업되어 있기에
                      이 부분도 일부 함께 개선되었습니다.
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">
                      React, NextJS, Typescript, React Hooks, React Router,
                      Redux, Context
                    </p>
                    <h5>역할</h5>
                    <div className="myRole">
                      <ul>
                        <li>불필요한 의존성 해제</li>
                        <li>Function 컴포넌트 사용 지향</li>
                        <li>공통 디자인 컴포넌트, 엘리먼트 작성</li>
                      </ul>
                    </div>
                  </div>

                  <div className="project">
                    <h3>카닥 4.0 업데이트</h3>
                    <div className="date">2019.07 - 2019.10</div>
                    <p className="description">
                      카닥 4.0에서는 모든 웹뷰의 디자인 업데이트와 새로 추가된
                      쿠폰함, 쇼핑탭 및 쿠폰과의 연동 작업이 진행되었습니다.
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">
                      React, NextJS, Typescript ,React Hooks, React Router,
                      Context, Story Book
                    </p>
                    <h5>역할</h5>
                    <div className="myRole">
                      <ul>
                        <li>컨테이너 패턴 적용</li>
                        <li>커스텀 화면전환 애니메이션 적용</li>
                        <li>공통된 행동을 Hooks 로 작성</li>
                        <li>Function 컴포넌트 사용 지향</li>
                        <li>스토리북을 통한 컴포넌트 공유</li>
                      </ul>
                    </div>
                  </div>
                  <div className="project">
                    <h3>카닥 앱 마이카 업데이트</h3>
                    <div className="date">2019.03 - 2019.06</div>
                    <p className="description">
                      앱 사용자들을 위해 자신의 차량을 등록하고, 이미 개발된
                      카닥의 모든 서비스를 이용할 수 있는 마이카 기능 업데이트
                      작업입니다. 이 작업은 Android, iOS 에서 WebView 로
                      사용해야 하기 때문에 그것을 전제 조건으로 개발하였고 내부
                      운영을 위한 백오피스도 함께 업데이트 되었습니다.
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">
                      React, React Hooks, React Router, Context
                    </p>
                    <h5>역할</h5>
                    <div className="myRole">
                      <ul>
                        <li>웹뷰를 위한 모놀리식(Monolithic) 프로젝트 구성</li>
                        <li>컨테이너 패턴 적용</li>
                        <li>커스텀 화면전환 애니메이션 적용</li>
                        <li>공통된 행동을 Hooks 로 작성</li>
                        <li>Function 컴포넌트 사용 지향</li>
                      </ul>
                    </div>
                  </div>

                  <div className="project">
                    <h3>카닥 앱 React Native 샘플 작성</h3>
                    <div className="date">2019.01 - 2019.03</div>
                    <p className="description">
                      카닥은 모바일 어플리케이션을 Native + WebView 를 사용해
                      제작하고 있었는데 내부적인 테스트를 위해 React Native 를
                      활용하여 간단하게 현재의 앱의 일부 기능을 샘플로
                      제작하였습니다.
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">React Native, Expo, React, Adobe XD</p>
                    <h5>역할</h5>
                    <div className="myRole">
                      <ul>
                        <li>Adobe XD 로 개발 목표와 프로토타입 제작</li>
                        <li>최초 Boiler Plate 작성</li>
                        <li>화면 전환 및 기본 레이아웃 구성</li>
                        <li>
                          사진 선택 및 최적화 등 기본적인 견적요청 기능 작성
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <h3>오픈소스컨설팅</h3>
                  <div className="role">프론트앤드 개발</div>
                  <div className="date">2017.07 - 2018.12</div>
                </div>
                <div className="col-sm-8">
                  <div className="project">
                    <h3>Play-ce RoRo Admin 업데이트</h3>
                    <div className="date">2018.09 - 2018.12</div>
                    <p className="description">
                      일반 유저 사이드 작업을 끝내고 관리자를 위한 대시보드와
                      별도의 콘솔을 작업하였습니다.
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">
                      React, Styled Component, React Router, Redux, Context,
                      Code Spliting
                    </p>
                    <h5>역할</h5>
                    <div className="myRole">
                      <ul>
                        <li>Sketch 로 기본 기획 및 프로토타입 작성</li>
                        <li>컨테이너 패턴 적용</li>
                        <li>Google Material Design 가이드 준수</li>
                        <li>프론트앤드 개발환경 구성 및 기능 구현</li>
                        <li>Context API 사용</li>
                        <li>Code Spliting 등 으로 앱 최적화</li>
                        <li>Jest 기반 테스트 환경 구성</li>
                      </ul>
                    </div>
                  </div>

                  <div className="project">
                    <h3>Play-ce RoRo 웹 콘솔 개발</h3>
                    <div className="date">2017.07 - 2018.08</div>
                    <p className="description">
                      기존 On Premise 서버 환경을 AWS 와 같은 Cloud 환경으로
                      자동 전환해주는 프로젝트로 웹 콘솔을 통해 서버, 클라우드
                      인증정보 등을 입력하면 기존 서버의 환경을 분석해
                      클라우드로 자동 마이그레이션이 가능한 툴입니다. 현재는
                      디자인 업데이트와 관리자 콘솔을 작업하고 있습니다.
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">
                      React, Styled Component, React Router, Mobx, Redux, AWS{' '}
                      <s>Angular4</s>
                    </p>
                    <h5>역할</h5>
                    <div className="myRole">
                      <ul>
                        <li>Adobe XD 로 기본 기획 및 프로토타입 작성</li>
                        <li>
                          Photoshop, Illustrator 활용해 기본 샘플 로고 및
                          디자인파일 작성
                        </li>
                        <li>프론트앤드 개발환경 구성 및 기능 구현</li>
                        <li>Redux 컴포넌트 기반 구조 개발</li>
                        <li>Redux 기반 Flux 구조 작성</li>
                        <li>Code Spliting 등 으로 앱 최적화</li>
                        <li>Jest 기반 테스트 환경 구성</li>
                        <li>Anglar4 에서 React 로 리팩토링</li>
                      </ul>
                    </div>
                  </div>

                  <div className="project">
                    <h3>공식 제품 소개 페이지 개발</h3>
                    <div className="date">2017.09 - 2017.10</div>
                    <p className="description">
                      사내에서 개발한 제품을 소개하기 위한 Static
                      웹사이트입니다. 제품의 종류와 소개 그리고 한/영 번역과
                      markdown blog 로 제품관련 소식을 전달했습니다.
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">gatsby, Styled Component</p>
                    <h5>역할</h5>
                    <div className="myRole">
                      <ul>
                        <li>Adobe XD 로 기본 기획 및 프로트타입 작성</li>
                        <li>
                          Photoshop, Illustrator 활용해 기본 샘플 로고 및
                          디자인파일 작성
                        </li>
                        <li>프론트앤드 개발환경 구성 및 기능 구현</li>
                        <li>React 컴포넌트 기반 구조 개발</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <h3>박차컴퍼니</h3>
                  <div className="role">프론트앤드 개발</div>
                  <div className="date">2016.06 ~ 2017.05</div>
                </div>
                <div className="col-sm-8">
                  <div className="project">
                    <h3>차팡 모바일 앱 개발</h3>
                    <div className="date">2017.02 - 2017.05</div>
                    <p className="description">
                      딜러들을 위한 차량 경매 어플리케이션으로 iOS, Android 동시
                      배포를 위해 하이브리드 앱으로 작성 되었습니다. 기본적인
                      경매 기능을 중심으로 차량의 아주 디테일한 상태와 사고,
                      보험이력, 가격정보 그래프 등의 정보 제공과 낙찰 이후의
                      추가정보나 서류제출등의 과정도 함께 처리할 수 있도록
                      제작되었습니다.
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">Framework7, SCSS, Cordova, PHP</p>
                    <h5>역할</h5>
                    <div className="myRole">
                      <ul>
                        <li>프론트앤드 개발환경 구성 및 기능 구현</li>
                        <li>Framework7 기반 페이지 구조 개발</li>
                        <li>d3.js 활용 가격변동 그래프 제작</li>
                        <li>플레이스토어 및 앱스토어 등록 및 인증서 작업</li>
                        <li>SCSS 기반 스타일 클래스 작성</li>
                      </ul>
                    </div>
                  </div>

                  <div className="project">
                    <h3>박차 모바일 앱 업데이트</h3>
                    <div className="date">2016.10 - 2017.01</div>
                    <p className="description">
                      일반 고객 대상의 LPG 전문 중고차 구매 어플리케이션으로
                      iOS, Android 동시 배포를 위해 하이브리드 앱으로 작성
                      되었습니다. 중고차 특성상 상태, 사고여부, 수리여부,
                      보험이력 등의 많은 정보를 효율적으로 전달하기 위해
                      신경써서 제작하였고, 차량 구매 이후 계약 진행과
                      탁송여부등도 어플리케이션을 통해 손쉽게 진행할수 있도록
                      제작되었습니다.
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">Framework7, SCSS, Cordova, PHP</p>
                    <h5>역할</h5>
                    <div className="myRole">
                      <ul>
                        <li>프론트앤드 개발환경 구성 및 기능 구현</li>
                        <li>Framework7 기반 페이지 구조 개발</li>
                        <li>SCSS 기반 스타일 클래스 작성</li>
                      </ul>
                    </div>
                  </div>

                  <div className="project">
                    <h3>박차 비즈 웹사이트 개발</h3>
                    <div className="date">2016.06 - 2016.09</div>
                    <p className="description">
                      중고차 양수도를 위해 허용된 이용자만 사용 가능한
                      웹사이트입니다. 해외 서비스인 carvana 를 참고해 개발하였고
                      좌측 필터를 통해 차종, 색상, 연식, 주행거리, 제조사 등의
                      값을 변경하면 부드럽게 목록이 전환되도록 작성하였으며
                      목록과 상세 페이지 전환시에도 사용자가 불편함을 느끼지
                      않도록 개발하였습니다.
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">AngularJS, SCSS, PHP</p>
                    <h5>역할</h5>
                    <div className="myRole">
                      <ul>
                        <li>프론트앤드 개발환경 구성 및 기능 구현</li>
                        <li>AngularJS 기반 컨트롤러 구조 개발</li>
                        <li>AngularJS 디렉티브, 서비스, 팩토리 활용</li>
                        <li>SCSS 기반 스타일 클래스 작성</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <h3>이큐브랩</h3>
                  <div className="role">소프트웨어 개발</div>
                  <div className="date">2012.11 ~ 2016.03</div>
                </div>
                <div className="col-sm-6">
                  <div className="project">
                    <h3>CCN 웹사이트 2.0 개발</h3>
                    <div className="date">2015.08 - 2016.03</div>
                    <p className="description">
                      기존 1.0 버전에서 새로운 제품군이 추가되고 다양한
                      요구사항을 수용하기 위해 2.0 리워크를 결정하였으며 개발
                      환경도 함께 변경하였습니다. 구글맵 지도 기반에서 각
                      사용자별 자신의 제품을 효율적으로 관리할 수 있도록
                      수정되었으며, 지도 위에 많은 제품을 보여주기 위해 마커
                      그룹화 및 실시간 필터링을 제공하였습니다.
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">
                      AngularJS, SCSS, NodeJS, MariaDB, AWS, Android/iOS
                    </p>
                    <h5>역할</h5>
                    <div className="myRole">
                      <ul>
                        <li>프론트앤드 기능 구현</li>
                        <li>AngularJS 기반 컨트롤러 구조 개발</li>
                        <li>AngularJS 디렉티브, 서비스, 팩토리 활용</li>
                        <li>SCSS 기반 스타일 클래스 작성</li>
                      </ul>
                    </div>
                  </div>

                  <div className="project">
                    <h3>시크릿차트 웹사이트 개발</h3>
                    <div className="date">2014.08 - 2015.08</div>
                    <p className="description">
                      성형외과 등 주로 비급여 항목을 다루는 병원들의 마케팅
                      플랫폼으로 제작되었고 일반 사용자의 성형후기 게시 및 공유,
                      병원정보, 병원검색, 나에게 맞는 병원 찾기 기능과 병원
                      관리자 페이지를 통해 자신의 병원에 관심이 있거나 관심이
                      있을만한 유저를 추천하고, 메시지를 보내거나 자신의 병원과
                      관련된 후기 등을 관리하는 기능을 개발하였습니다.
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">
                      Jquery, SCSS, Android/iOS, Codeigniter, MaraiDB
                    </p>
                    <h5>역할</h5>
                    <div className="myRole">
                      <ul>
                        <li>백앤드 개발환경 구성 및 기능 구현</li>
                        <li>프론트앤드 개발환경 구성 및 기능 구현</li>
                        <li>CI 기반 MVC 구조 개발</li>
                        <li>네이티브 앱 용 API 개발 및 테스트페이지 작성</li>
                        <li>Jquery 기반 구조 개발</li>
                        <li>SCSS 기반 스타일 클래스 작성</li>
                      </ul>
                    </div>
                  </div>

                  <div className="project">
                    <h3>CCN 웹사이트 개발</h3>
                    <div className="date">2012.11 - 2014.08</div>
                    <p className="description">
                      태양광 압축 쓰레기통 이라 불리는 자사 제품을 컨트롤하기
                      위한 웹 브라우저 기반 콘솔입니다. 지도 기반 페이지에서 각
                      제품별 폐기물량, 배터리 충전량, 마지막 수거 시간 등의
                      정보와 지금까지의 쓰레기 발생량이나 발생량이 많은 지역등의
                      수집된 정보, 그리고 수집된 정보를 바탕으로 한 쓰레기통
                      추가 배치가 필요한 지역과 발생량 추이 등의 데이터를
                      제공하였습니다. 현장 수거자를 위해서 모바일 앱 개발도
                      필요했기에 하이브리드 앱도 제작하였고 알파, 베타를 거쳐
                      1.0 버전까지 업데이트가 이루어졌습니다.
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">
                      Jquery, SCSS, PhoneGap, JqueryMobile, Codeigniter, MaraiDB
                    </p>
                    <h5>역할</h5>
                    <div className="myRole">
                      <ul>
                        <li>백앤드 개발환경 구성 및 기능 구현</li>
                        <li>프론트앤드 개발환경 구성 및 기능 구현</li>
                        <li>Jquery 기반 구조 개발</li>
                        <li>JqueryMobile 기반 구조 개발</li>
                        <li>PhoneGap 으로 하이브리드 앱 개발</li>
                        <li>SCSS 기반 스타일 클래스 작성</li>
                        <li>CI 기반 MVC 구조 개발</li>
                        <li>
                          PHP 기반 HTTP 포트 활용한 서버, 제품간 프로토콜 개발
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* 이큐브랩 종료 */}

                <div className="col-sm-4">
                  <h3>트윈클링</h3>
                  <div className="role">소프트웨어 개발</div>
                  <div className="date">외주</div>
                </div>
                <div className="col-sm-8">
                  <div className="project">
                    <h3>베트남 쇼핑몰</h3>
                    <div className="date">2018.07 - 2018.08</div>
                    <p className="description">
                      PHP 기반 오픈소스인 영카트5 를 활용해 베트남 쇼핑몰을
                      구축하였습니다. 기본 기능을 귀금속 쇼핑몰에 맞게
                      커스터마이징 하고 docker-compose 를 이용해 앱에서 사용되는
                      미들웨어를 관리하였으며 글로벌 서비스이기에 aws EC2
                      instance 및 RDB 그리고 S3 + CloudFront 을 사용했습니다.
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">PHP, Composer, Jquery, SCSS</p>
                    <h5>역할</h5>
                    <div className="myRole">
                      <ul>
                        <li>요구사항 정리 및 문서화</li>
                        <li>Abode XD 로 기본 기획 및 프로토타입 작성</li>
                        <li>백엔드 개발환경 구성 및 기능 구현</li>
                        <li>프론트엔드 개발환경 구성 및 기능 구현</li>
                        <li>
                          Docker, Docker-compose 기반 개발/테스트/배포 환경 구성
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="project">
                    <h3>백오피스</h3>
                    <div className="date">2017.11 - 2017.12</div>
                    <p className="description">
                      개인 사업자분 으로부터 의뢰받아 진행한 프로젝트로 귀금속을
                      주문받아 고객에게 발송될때까지의 내부적인 업무 프로세스를
                      웹앱으로 작성하였으며, 제품 주문 -> 발주 -> 입고 -> 배송
                      의 과정을 처리하고 매출 등의 자료를 대시보드를 통해
                      보여주는 작업을 진행하였습니다. 현재는 간혹 있는
                      요구사항을 처리하고 있습니다. 백엔드는 PHP 기반의 Lumen
                      으로 작성하였고 다른 개발자와 협업하였습니다.
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">
                      Angular4, Lumen, Composer, Docker, Docker-compose, GitLab
                    </p>
                    <h5>역할</h5>
                    <div className="myRole">
                      <ul>
                        <li>요구사항 정리 및 문서화</li>
                        <li>KaKao Oven 으로 기본 기획 및 프로토타입 작성</li>
                        <li>프론트앤드 개발환경 구성 및 기능 구현</li>
                        <li>ng 컴포넌트 기반 구조 개발</li>
                        <li>rxjs 기반 데이터 반응형 구조</li>
                        <li>Laradock 기반 개발/테스트/배포 환경 구성</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* 트윈클링 종료 */}
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h2>외부 활동</h2>
                </div>

                <div className="col-sm-4" id="opensource">
                  <h3>오픈소스 제작</h3>
                </div>
                <div className="col-sm-6">
                  <div className="project">
                    <h3>React Social Login</h3>
                    <p className="description">
                      Facebook, Google 인증에 사용되는 모듈을 만들어 오픈소스
                      형태로 배포하였습니다.
                      {'  '}
                      <a href="https://www.npmjs.com/package/@majac/react-social-login">
                        링크
                      </a>
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">React, NPM</p>
                  </div>

                  <div className="project">
                    <h3>오픈소스컨설팅 UI 킷</h3>
                    <p className="description">
                      사내 프론트앤드 개발시 사용되는 속성값들을 묶어 오픈소스로
                      제작하고 가이드 문서도 함께 만들어 배포하였습니다.
                      {'  '}
                      <a href="https://tech.osci.kr/osc-style/">링크</a>
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">Webpack, Pug(Jade), NPM, SCSS</p>
                  </div>

                  <div className="project">
                    <h3>가격 범위 그래프</h3>
                    <p className="description">
                      박차컴퍼니 재직당시 사용하기 위해 1개의 축을 가진 Range
                      차트를 작성한 이후 오픈소스로 만들어 배포하였습니다.
                      {'  '}
                      <a href="https://github.com/majac6/singleLinePrice-chart-majac">
                        링크
                      </a>
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">D3.js</p>
                  </div>

                  <div className="project">
                    <h3>다음 주소검색 Meteor 패키지</h3>
                    <p className="description">
                      Meteor 기반 정부과제 프로젝트 진행당시 사용했던 주소검색
                      패키지입니다.
                      {'  '}
                      <a href="https://github.com/majac6/package_daum-postcode">
                        링크
                      </a>
                    </p>
                    <h5>사용 기술</h5>
                    <p className="tech">Meteor</p>
                  </div>
                </div>

                <div className="col-sm-4" id="speech">
                  <h3>발표</h3>
                </div>
                <div className="col-sm-6">
                  <div className="project">
                    <h3>2018 AWS Submit Seoul</h3>
                    <p className="description">
                      AWS 행사에서 회사 대표로 '데이터 센터 모던화' 에 대해
                      발표했고, 주로 자사 제품을 통한 클라우드 전환, Docker,
                      DevOps 관련 내용을 정리하였습니다.
                      {'  '}
                      <a
                        href="https://www.youtube.com/watch?v=wNkVQxbcYeg&index=32&list=PLORxAVAC5fUW6hZ4C7YQ-RluswzsE5Ibb"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        YouTube 링크
                      </a>
                    </p>
                  </div>

                  <div className="project">
                    <h3>2018 OSC Tonight</h3>
                    <p className="description">
                      사내에서 진행된 행사에서 'Javascript로 할 수 있는 일들' 에
                      대해 간략하게 발표하였습니다.
                      {'  '}
                      <Link to="osc-tonight">링크</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Resume
