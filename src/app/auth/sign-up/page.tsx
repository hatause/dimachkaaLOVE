import Link from 'next/link';
import { AuthLayout } from '@/components/AuthLayout';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function SignUpPage() {
    return (
        <AuthLayout>
            <div className="mb-8">
                <h1 className="text-3xl font-semibold tracking-tight text-white mb-2">Create an account</h1>
                <p className="text-[15px] text-zinc-400">
                    Enter your details to get started
                </p>
            </div>

            <form className="space-y-5 flex flex-col">
                <Input
                    label="Full Name"
                    type="text"
                    placeholder="Jane Doe"
                    required
                    name="name"
                />
                <Input
                    label="Email address"
                    type="email"
                    placeholder="name@company.com"
                    required
                    name="email"
                />
                <div className="space-y-[10px]">
                    <label className="text-sm font-medium text-zinc-300">Password</label>
                    <input
                        type="password"
                        placeholder="Create a password (min 8 characters)"
                        required
                        className="flex h-11 w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 focus-visible:border-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                        name="password"
                    />
                </div>

                <div className="pt-2">
                    <Button fullWidth type="submit" className="h-11 text-base">Create account</Button>
                </div>
            </form>

            <div className="mt-8 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-zinc-800 after:mt-0.5 after:flex-1 after:border-t after:border-zinc-800">
                <span className="mx-4 text-xs tracking-wider text-zinc-500 font-medium uppercase">Or continue with</span>
            </div>

            <div className="mt-6 flex gap-3">
                <Button variant="outline" fullWidth className="h-11 bg-zinc-900/30 hover:bg-zinc-800 border-zinc-800">
                    <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                        <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                    </svg>
                    Google
                </Button>
            </div>

            <p className="mt-6 text-[13px] text-center text-zinc-500">
                By continuing, you agree to our{' '}
                <Link href="#" className="hover:text-zinc-300 underline underline-offset-4 decoration-zinc-800 decoration-dotted">Terms of Service</Link>
                {' '}and{' '}
                <Link href="#" className="hover:text-zinc-300 underline underline-offset-4 decoration-zinc-800 decoration-dotted">Privacy Policy</Link>.
            </p>

            <div className="mt-8 text-center text-sm text-zinc-400">
                Already have an account?{' '}
                <Link
                    href="/auth/sign-in"
                    className="font-medium text-white hover:text-zinc-200 transition-colors"
                >
                    Sign in
                </Link>
            </div>
        </AuthLayout>
    );
}
