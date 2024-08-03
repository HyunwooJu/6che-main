'use client';

import React, { useState } from 'react';
import QuestionPage from './question';
import Image from 'next/image';
import top from '../../../../../assets/top.png';
import middle from '../../../../../assets/middle.png';
import under from '../../../../../assets/under.png';

const SurveyLayout: React.FC = () => {
  const [showQuestionPage, setShowQuestionPage] = useState(false);

  const handleStartClick = () => {
    setShowQuestionPage(true);
  };

  return (
    <div className="w-80 mx-auto relative flex flex-col items-center justify-between h-screen bg-white">
      {showQuestionPage ? (
        <QuestionPage />
      ) : (
        <>
          <div
            className="flex flex-col items-center"
            style={{ marginTop: '194px' }}
          >
            <div className="relative">
              <div className="absolute top-[-60px] right-[-60px]">
                <Image src={top} alt="Top Clothes" width={90} height={112} />
                {/* figma 위치값 수정 후 재수정 해야함 */}
              </div>
              <div className="absolute top-[20px] left-[-60px]">
                <Image
                  src={middle}
                  alt="Medium Clothes"
                  width={60}
                  height={60}
                />
                {/* figma 위치값 수정 후 재수정 해야함 */}
              </div>
              <div className="absolute top-[60px] right-[-40px]">
                <Image
                  src={under}
                  alt="Bottom Clothes"
                  width={60}
                  height={60}
                />
                {/* figma 위치값 수정 후 재수정 해야함 */}
              </div>
              <div
                className="flex justify-center items-center gap-2 px-4 py-2 rounded-[1000px] bg-[#ffc329]/80 border border-white/50 backdrop-blur-[20px]"
                style={{
                  boxShadow:
                    '0px 0px 2px 0 rgba(0,0,0,0.05), 4px 4px 20px 0 rgba(0,0,0,0.05)',
                }}
              >
                <p className="flex-grow-0 flex-shrink-0 text-[34px] text-left text-[#121212]">
                  취향 코디 찾기
                </p>
              </div>
            </div>
            <p
              className="text-base text-center text-[#121212]"
              style={{ marginTop: '20px' }}
            >
              <span className="text-base text-center text-[#121212]">
                질문의 답변을 통해
              </span>
              <br />
              <span className="text-base text-center text-[#121212]">
                내 성향에 맞는 코디를 추천해드려요
              </span>
            </p>
          </div>
          <div
            className="flex justify-center items-center w-72 relative overflow-hidden gap-2 p-3 rounded-lg bg-[#121212] cursor-pointer hover:bg-[rgba(94,176,255,0.80)] active:bg-[rgba(88, 168, 243, 0.8)]"
            style={{ marginTop: '208px', marginBottom: '234px' }}
            onClick={handleStartClick}
          >
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
              시작하기
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default SurveyLayout;
