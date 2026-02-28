import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Palette, Smartphone, Database, Layout, Zap } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'React, Next.js, Vue.js, TypeScriptを使用したモダンなフロントエンド開発',
    items: ['React / Next.js', 'Vue.js / Nuxt.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'ユーザー中心のデザインとインタラクティブな体験の創造',
    items: ['Figma', 'Adobe XD', 'Responsive Design', 'Accessibility'],
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'スケーラブルなバックエンドシステムの設計と実装',
    items: ['Node.js', 'PostgreSQL', 'Supabase', 'REST API'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'クロスプラットフォームモバイルアプリケーション開発',
    items: ['React Native', 'Expo', 'iOS / Android', 'PWA'],
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'パフォーマンス最適化とSEO対策',
    items: ['Web Vitals', 'SEO', 'Lighthouse', 'Code Splitting'],
  },
  {
    icon: Palette,
    title: 'Creative Coding',
    description: 'アニメーションとインタラクティブな表現',
    items: ['Motion', 'Three.js', 'Canvas API', 'WebGL'],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="w-full py-32 bg-white">
      <div className="w-full px-6 flex justify-center">
        <div className="w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="!mb-20"
        >
          <div className="text-sm tracking-[0.3em] text-gray-500 !mb-4 text-center">
            SKILLS
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tight text-center !mb-6">
            技術スタック
          </h2>
          <div className="w-full flex justify-center">
            <p className="text-center text-gray-600 max-w-2xl">
              最新の技術とツールを活用し、高品質なプロダクトを提供します
            </p>
          </div>
        </motion.div>

        <div className="!mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-8 border border-gray-200 rounded-xl hover:border-gray-400 transition-all hover:shadow-lg group"
              >
                <div className="mb-6 relative">
                  <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                    <Icon className="w-7 h-7 group-hover:text-white transition-colors" />
                  </div>
                </div>
                
                <h3 className="text-xl mb-3">{skill.title}</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {skill.description}
                </p>
                
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Logos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="!mt-20 !pt-20 border-t border-gray-200"
        >
          <div className="text-center !mb-12">
            <h3 className="text-2xl tracking-tight !mb-3">使用技術</h3>
            <p className="text-sm text-gray-600">主に使用している技術スタック</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 !mb-3">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Figma', 'Git'].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.7 + index * 0.05, duration: 0.4 }}
                className="px-6 py-3 bg-gray-50 rounded-lg text-sm font-mono hover:bg-gray-100 transition-colors"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
