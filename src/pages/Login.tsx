import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Phone } from "lucide-react";

const Login = () => {
  const [identifier, setIdentifier] = useState(""); // email or mobile
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ identifier?: string; password?: string }>({});

  const isEmail = (value: string) => /\S+@\S+\.\S+/.test(value);
  const isMobile = (value: string) => /^\d{10,15}$/.test(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { identifier?: string; password?: string } = {};

    if (!identifier) {
      newErrors.identifier = "Email or mobile number is required";
    } else if (!isEmail(identifier) && !isMobile(identifier)) {
      newErrors.identifier = "Enter a valid email or mobile number";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Login data:", {
        identifier,
        type: isEmail(identifier) ? "email" : "mobile",
        password,
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#cd853f] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-white/20">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-600 mt-2">
              Login using your email or mobile number
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email / Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email or Mobile Number
              </label>
              <div className="relative">
                {isMobile(identifier) ? (
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                ) : (
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                )}

                <input
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="Email or mobile number"
                  className={`w-full pl-11 pr-4 py-3.5 rounded-xl border ${
                    errors.identifier
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  } bg-white/70 text-gray-900 placeholder-gray-500
                     focus:outline-none focus:ring-2 transition-all`}
                />
              </div>
              {errors.identifier && (
                <p className="mt-2 text-sm text-red-600">{errors.identifier}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`w-full pl-11 pr-12 py-3.5 rounded-xl border ${
                    errors.password
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  } bg-white/70 text-gray-900 placeholder-gray-500
                     focus:outline-none focus:ring-2 transition-all`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700
                         hover:from-blue-700 hover:to-blue-800
                         text-white font-semibold rounded-xl shadow-lg
                         hover:-translate-y-0.5 transition-all"
            >
              Sign In
            </button>
          </form>

          {/* Register */}
          <p className="text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a href="/register" className="font-semibold text-blue-600 hover:underline">
              Register for free
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
