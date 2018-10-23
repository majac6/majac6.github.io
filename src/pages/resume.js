import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'

import './resume.scss'

class Resume extends React.Component {
	render() {
		return (
			<Layout>
				<div id="resume">
					<section>
						<div className="container">
							<div className="row">
								<div className="col-sm-12">
									<div id="myProfile">
										<div className="photo" />
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

					<section>
						<div className="container">
							<div className="row">
								<div className="col-sm-12">
									<h2>보유 기술</h2>
								</div>
								<div className="col-sm-12 mb-4">
									<p className="text-lg">
										웹 개발을 좋아하고 더 잘 하고 싶은 개발자입니다. 그 중
										프론트앤드 개발을 제일 좋아하며 극강의 프론트앤드 개발자가
										되는 것이 목표입니다.
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
										<li>PHP, Composer</li>
										<li>NodeJS, Express, Hapi</li>
									</ul>
								</div>
								<div className="col-sm-4">
									<div className="mb-2">
										<b className="text-lg">Tools</b>
									</div>
									<ul>
										<li>VS code, SourceTree</li>
										<li>Sketch, Adobe XD</li>
										<li>Photoshop, Illustrator</li>
										<li>MS Office, Page, Keynote</li>
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
							</div>
						</div>
					</section>

					<section>
						<div className="container">
							<div className="row">
								<div className="col-sm-12">
									<h2>개발 경험</h2>
								</div>

								<div className="col-sm-4">
									<h3>오픈소스컨설팅</h3>
									<div className="role">프론트앤드 개발</div>
									<div className="date">2017.07 - Now</div>
								</div>
								<div className="col-sm-8">
									<div className="project">
										<h3>Play-ce RoRo 웹 콘솔 개발</h3>
										<div className="date">2017.07 - Now</div>
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
												<li>Adobe XD 로 기본 기획 및 프로트타입 작성</li>
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
										<div className="date">2017.10 - 2017.01</div>
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
										<div className="date">2017.06 - 2017.09</div>
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

								<div className="col-sm-4">
									<h3>오픈소스 제작</h3>
								</div>
								<div className="col-sm-6">
									<div className="project">
										<h3>오픈소스컨설팅 UI 킷</h3>
										<p className="description">
											사내 프론트앤드 개발시 사용되는 속성값들을 묶어 오픈소스로
											제작하고 가이드 문서도 함께 만들어 배포하였습니다.
											{'  '}
											<a href="https://tech.osci.kr/osc-style/">링크</a>
										</p>
										<h5>사용 기술</h5>
										<p className="tech">Webpack, Pug(Jade), GitHub, SCSS</p>
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

								<div className="col-sm-4">
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
