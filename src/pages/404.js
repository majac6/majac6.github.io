import React from 'react';
import { Link } from 'gatsby';
import Layout from 'components/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <main className="flex items-center justify-center min-h-[60vh] bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 tracking-tight">
            페이지를 찾을 수 없습니다
          </h1>
          <p className="text-base text-subtle mb-8">
            죄송합니다 <span role="img" aria-label="슬픈 이모지">😔</span> 요청하신 페이지를 찾을 수 없습니다.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-2 border border-primary text-primary font-semibold rounded hover:bg-primary-bg transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
