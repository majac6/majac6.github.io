import React from 'react';
import { Link } from 'gatsby';
import Layout from './components/Layout';

const IndexPage = () => {
  return (
    <Layout title="Home - Senior Frontend Engineer : HungSun LIM">
      <div className="max-w-3xl mx-auto px-2 py-8">
        {/* 히어로 섹션 */}
        <section className="text-center mb-16">
          <div className="mb-8">
            <img
              src="https://s.gravatar.com/avatar/ac88fef73fb20037feaf38ff349b129c?s=500&r=pg"
              alt="HungSun LIM"
              className="w-28 h-28 rounded-full mx-auto mb-5 border border-gray-200"
            />
          </div>
          <h1 className="text-3xl font-bold mb-3 tracking-tight">
            안녕하세요, 임흥선입니다 <span className="align-middle">👋</span>
          </h1>
          <p className="text-lg text-gray-600 mb-7 max-w-xl mx-auto">
            Senior Frontend Engineer로서 다양한 기술과 경험을 공유하는 공간입니다.
            <br />
            프론트엔드 개발, React, 그리고 웹 기술에 대한 이야기를 담고 있습니다.
          </p>
          <div className="flex justify-center gap-2">
            <Link
              to="/articles"
              className="px-5 py-2 border border-primary-600 text-primary-600 font-semibold rounded hover:bg-primary-50 transition-colors text-base">
              글 보기
            </Link>
            <Link
              to="/about"
              className="px-5 py-2 border border-gray-300 text-gray-700 font-medium rounded hover:bg-gray-50 transition-colors text-base">
              이력서 보기
            </Link>
          </div>
        </section>

        {/* 최근 글 섹션 */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 border-b border-gray-100 pb-2">최근 글</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-base font-semibold mb-1">Hello World - 첫 번째 블로그 글</h3>
              <p className="text-gray-600 text-sm mb-3">Gatsby와 React로 만든 블로그의 첫 번째 글입니다.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">2024-01-15</span>
                <Link to="/article/hello-world-첫-번째-블로그-글" className="text-primary-600 hover:underline text-xs font-medium">
                  읽기 →
                </Link>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-base font-semibold mb-1">React 18의 새로운 기능들</h3>
              <p className="text-gray-600 text-sm mb-3">React 18에서 추가된 Concurrent Features와 새로운 Hooks에 대해 알아봅니다.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">2024-01-20</span>
                <Link to="/article/react-18의-새로운-기능들" className="text-primary-600 hover:underline text-xs font-medium">
                  읽기 →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
