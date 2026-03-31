import React from 'react';
import Link from 'next/link';

export function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen w-full bg-[#09090b] text-zinc-50 font-sans selection:bg-indigo-500/30">
            {/* Left side: Authentication form */}
            <div className="flex w-full flex-col justify-center px-6 md:w-1/2 md:px-12 lg:px-24">
                <div className="mx-auto w-full max-w-[380px]">
                    {/* Mobile Logo */}
                    <div className="flex items-center space-x-2 md:hidden mb-12">
                        <div className="h-8 w-8 rounded-lg bg-indigo-500 flex items-center justify-center">
                            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold tracking-tight">MintRight</span>
                    </div>

                    {children}
                </div>
            </div>

            {/* Right side: Branding / Marketing copy */}
            <div className="hidden w-1/2 flex-col justify-between overflow-hidden relative md:flex border-l border-zinc-800/50 bg-zinc-950">
                {/* Background Gradients & Glow Effects */}
                <div className="absolute inset-0 bg-zinc-950 z-0" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-indigo-900/20 via-purple-900/10 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />
                <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none z-0" />

                {/* Content */}
                <div className="relative z-10 p-12 lg:p-16 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        {/* Logo */}
                        <div className="flex items-center space-x-2.5">
                            <div className="h-9 w-9 rounded-lg bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">MintRight</span>
                        </div>
                    </div>

                    <div className="max-w-[480px]">
                        <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6 leading-[1.15]">
                            Токенизируйте ваши IP&#8209;активы на Solana.
                        </h1>
                        <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
                            Веб-платформа для верификации правообладателей, токенизации интеллектуальной собственности и размещения на маркетплейсе с расчётами в Solana.
                        </p>

                        <div className="flex items-center space-x-4 bg-zinc-900/40 p-3 rounded-2xl border border-zinc-800/60 backdrop-blur-sm mr-auto inline-flex">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="inline-block h-10 w-10 rounded-full ring-[3px] ring-zinc-950 bg-zinc-800 overflow-hidden relative">
                                        <div className="w-full h-full bg-zinc-700" style={{ backgroundImage: `url('https://api.dicebear.com/7.x/avataaars/svg?seed=mintright${i}')`, backgroundSize: 'cover' }} />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col pl-2 pr-4">
                                <div className="flex items-center space-x-1">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-xs font-medium text-zinc-300 mt-0.5">
                                    50+ правообладателей
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer links */}
                    <div className="flex gap-8 text-sm text-zinc-500 font-medium">
                        <Link href="#" className="hover:text-zinc-300 transition-colors">Условия использования</Link>
                        <Link href="#" className="hover:text-zinc-300 transition-colors">Политика конфиденциальности</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
