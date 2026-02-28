import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-sm tracking-[0.3em] text-gray-500 mb-4 text-center">
            ABOUT
          </div>
          
          <h2 className="text-4xl md:text-5xl tracking-tight mb-12 text-center">
            シンプルで美しい<br />デザインを追求
          </h2>
          
          <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              クライアントの「想い」をカタチにすることをモットーに、
              シンプルでモダンなデザインを心がけています。
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              丁寧なヒアリングで本質を捉え、ユーザーの求めるニーズを引き出し、
              価値あるサポートを提供します。
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              フロントエンド開発を中心に、モダンな技術スタックを活用し、
              パフォーマンスとユーザビリティを両立させた
              Web アプリケーションの開発を得意としています。
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            {[
              { number: '4+', label: '制作年数' },
              { number: '50+', label: 'プロジェクト数' },
              { number: '100%', label: '満足度' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-xl">
                <div className="text-4xl mb-2">{stat.number}</div>
                <div className="text-sm text-gray-500 tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
