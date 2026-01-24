"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  GraduationCap,
  FileText,
  Briefcase,
  Award,
  TrendingUp,
  BookOpen,
} from "lucide-react";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const benefits = [
    {
      id: 1,
      icon: GraduationCap,
      title: "Free Trial Courses",
      description: "Access premium courses for free",
    },
    {
      id: 2,
      icon: FileText,
      title: "Professional CV Maker",
      description: "Create stunning resumes with AI",
    },
    {
      id: 3,
      icon: Briefcase,
      title: "Portfolio Setup",
      description: "Showcase your projects beautifully",
    },
    {
      id: 4,
      icon: Award,
      title: "Career Guidance",
      description: "Personalized roadmaps & mentorship",
    },
    {
      id: 5,
      icon: TrendingUp,
      title: "Job Opportunities",
      description: "Connect with top companies",
    },
    {
      id: 6,
      icon: BookOpen,
      title: "Learning Resources",
      description: "Access ebooks, guides & materials",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (!agreedToTerms) {
      alert("Please agree to the Terms and Privacy Policy");
      return;
    }
    setIsLoading(true);
    // Add your signup logic here
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-6xl">
        {/* Logo - Centered on mobile, left on desktop */}
        <Link
          href="/"
          className="flex justify-center lg:justify-start mb-4 cursor-pointer"
        >
          <Image
            src="/logo1.png"
            alt="LifePath Logo"
            width={140}
            height={56}
            className="h-9 w-auto"
          />
        </Link>

        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
          {/* Left Side - Benefits Section */}
          <div className="hidden lg:block w-full">
            <div className="flex flex-col gap-4 items-center justify-center h-full">
              <h2 className="text-3xl font-bold text-zinc-900 mb-2">
                Why Create a{" "}
                <span className="text-blue-600">LifePath Account?</span>
              </h2>
              <p className="text-sm text-zinc-600 mb-4">
                Join thousands of students building their dream careers
              </p>

              <div className="space-y-2.5">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={benefit.id}
                      className="flex items-start gap-3 p-2.5 bg-white rounded-lg border border-blue-100 hover:shadow-sm transition-shadow"
                    >
                      <div className="shrink-0 w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon size={18} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-zinc-900 text-sm mb-0.5">
                          {benefit.title}
                        </h3>
                        <p className="text-xs text-zinc-600">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="w-2/4">
            {/* Mobile Benefits Summary */}
            <div className="lg:hidden mb-6 p-4 bg-white rounded-xl border border-blue-100">
              <h3 className="font-semibold text-zinc-900 mb-3 text-center">
                What You&apos;ll Get:
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {benefits.slice(0, 4).map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={benefit.id} className="flex items-center gap-2">
                      <Icon size={16} className="text-blue-600" />
                      <span className="text-zinc-700">
                        {benefit.title
                          .replace("Professional ", "")
                          .replace(" Setup", "")}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Signup Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 p-5">
              <div className="text-center mb-4">
                <h1 className="text-2xl font-bold text-zinc-900 mb-1">
                  Join LifePath
                </h1>
                <p className="text-sm text-zinc-600">
                  Create your account and start your career journey
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Full Name Field */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-medium text-zinc-700 mb-1"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                      <User size={16} />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full pl-9 pr-3 py-2 text-sm border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-zinc-900 placeholder-zinc-400"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-zinc-700 mb-1"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                      <Mail size={16} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full pl-9 pr-3 py-2 text-sm border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-zinc-900 placeholder-zinc-400"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-xs font-medium text-zinc-700 mb-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                      <Lock size={16} />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a strong password"
                      required
                      minLength={8}
                      className="w-full pl-9 pr-10 py-2 text-sm border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-zinc-900 placeholder-zinc-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 cursor-pointer"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-xs font-medium text-zinc-700 mb-1"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                      <Lock size={16} />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Re-enter your password"
                      required
                      minLength={8}
                      className="w-full pl-9 pr-10 py-2 text-sm border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-zinc-900 placeholder-zinc-400"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 cursor-pointer"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    required
                    className="w-4 h-4 text-blue-600 border-zinc-300 rounded focus:ring-2 focus:ring-blue-500 mt-1 cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-sm text-zinc-700">
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2 text-sm bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Creating account...
                    </span>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-3">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-200"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-3 bg-white text-zinc-500">
                    Or sign up with
                  </span>
                </div>
              </div>

              {/* Social Signup Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-3 py-2 text-xs border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-xs font-medium text-zinc-700">
                    Google
                  </span>
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-3 py-2 text-xs border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-xs font-medium text-zinc-700">
                    Facebook
                  </span>
                </button>
              </div>

              {/* Login Link */}
              <p className="text-center text-xs text-zinc-600 mt-3">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
                >
                  Sign in
                </Link>
              </p>
            </div>

            {/* Back to Home */}
            <div className="text-center mt-3">
              <Link
                href="/"
                className="text-xs text-zinc-600 hover:text-zinc-900 cursor-pointer"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
