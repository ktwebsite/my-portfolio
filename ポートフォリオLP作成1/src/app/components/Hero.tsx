import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-24">
      <div className="w-full px-20 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className='!ml-15'>
            <p className="text-sm text-gray-500 leading-relaxed">
              エンジニア/デベロッパーのポートフォリオ。<br />
              シンプルで洗練されたWebサイトを作ります。
            </p>

            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-10">
              Iwamura Kenta
            </h1>

            <p className="text-gray-600 mb-10 leading-relaxed">
              シンプルでモダンなデザインを大切にし、<br />
              ユーザー体験を第一に考えた開発を行います。
            </p>

            <div className="flex gap-3 !mt-5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right - Profile Image with rotated frame */}
          <div className="flex justify-center md:justify-end !mr-30">
            <div className="relative w-72 h-80 md:w-80 md:h-96">
              {/* Rotated border frame */}
              <div
                className="absolute inset-0 border-2 border-gray-300 rounded-lg"
                style={{ transform: 'rotate(6deg)' }}
              />

              {/* Main image container */}
              <div className="absolute inset-0 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=480&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
