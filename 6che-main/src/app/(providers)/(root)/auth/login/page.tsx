'use client';

import { createClient } from '@/supabase/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';
import { useAuthStore } from '@/zustand/store/useTagStore';

function LoginPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const supabase = createClient();
  const router = useRouter();
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      alert('모든 항목을 입력해 주세요.');
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    router.prefetch('/');
  };

  const handleSocialLogin = async (provider: 'google' | 'kakao') => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
        },
      });
      if (error) throw error;

      if (data) {
        setIsLoggedIn(true);
        window.location.href = data.url;
      }
    } catch (error) {
      console.error(
        `ERROR ${provider.toUpperCase()}`,
        (error as Error).message,
      );
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-80 h-[1486px] relative overflow-hidden bg-white m-auto"
    >
      <h1 className="absolute left-4 top-[138px] text-2xl font-medium text-center text-black">
        로그인
      </h1>
      <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-[207px] pb-3">
        <label
          htmlFor="email"
          className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black"
        >
          이메일
        </label>
        <input
          type="email"
          placeholder="이메일을 입력해 주세요."
          ref={emailRef}
          className="self-stretch flex-grow-0 flex-shrink-0 h-[42px] opacity-50 rounded-lg bg-[#d9d9d9]"
        />
      </div>
      <div className="flex flex-col justify-start items-start w-72 absolute left-4 top-72 pb-2.5">
        <label className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-lg text-left text-black">
          비밀번호
        </label>
        <input
          type="password"
          ref={passwordRef}
          placeholder="비밀번호를 입력해 주세요."
          className="self-stretch flex-grow-0 flex-shrink-0 h-[42px] opacity-50 rounded-lg bg-[#d9d9d9]"
        />
      </div>
      <div className="w-72 h-[46px] absolute left-[15px] top-[425px] rounded-lg bg-[#d9d9d9] text-center">
        <button className="text-lg font-medium text-black">로그인</button>
      </div>
      <div className="flex justify-start items-center absolute left-[50px] top-[493px] gap-2">
        <Link
          href={''}
          className="flex-grow-0 flex-shrink-0 text-base text-left text-black"
        >
          아이디/비밀번호 찾기
        </Link>
        <div className="flex-grow-0 flex-shrink-0 w-px h-[22px] bg-[#d9d9d9]" />
        <Link
          href={'/auth/signup'}
          className="flex-grow-0 flex-shrink-0 text-base text-left text-black"
        >
          회원가입
        </Link>
      </div>
      <div className="w-72 h-12 absolute left-[15px] top-[600px] rounded-3xl bg-[#d9d9d9]" />
      <div className="w-72 h-12 absolute left-[15px] top-[658px] rounded-3xl bg-[#d9d9d9]" />
      <button
        type="button"
        onClick={() => handleSocialLogin('google')}
        className="absolute left-[145px] top-[613px] text-base text-left text-black"
      >
        구글
      </button>
      <button
        type="button"
        onClick={() => handleSocialLogin('kakao')}
        className="absolute left-[130px] top-[671px] text-base text-left text-black"
      >
        카카오톡
      </button>
      <div className="w-72 h-px absolute left-[15px] top-[557px] bg-[#d9d9d9]" />
      <p className="absolute left-[43px] top-[395px] text-sm text-left text-black">
        자동로그인
      </p>
      <p className="absolute left-[130px] top-[569px] text-sm text-left text-black">
        소셜 로그인
      </p>
    </form>
  );
}

export default LoginPage;
