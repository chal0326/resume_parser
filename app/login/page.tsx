import { AuthForm } from '@/components/AuthForm';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <AuthForm mode="login" />
      <p className="mt-4 text-gray-300">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="text-blue-400 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}