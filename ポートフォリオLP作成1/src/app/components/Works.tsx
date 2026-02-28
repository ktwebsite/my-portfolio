import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Application',
    description: 'モダンなUIとシームレスなUXを実現したECプラットフォーム',
    image: 'https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxOTM1MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Dashboard Analytics',
    category: 'SaaS Product',
    description: 'データビジュアライゼーションに特化した分析ダッシュボード',
    image: 'https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzcxOTgyOTc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'Recharts', 'PostgreSQL'],
  },
  {
    title: 'Portfolio Website',
    category: 'Corporate Site',
    description: 'ミニマルなデザインのコーポレートサイト',
    image: 'https://images.unsplash.com/photo-1603219950587-b4f3f7ee87e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdGVjaCUyMG9mZmljZXxlbnwxfHx8fDE3NzE5ODI5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Motion', 'CSS'],
  },
  {
    title: 'Task Management App',
    category: 'Productivity Tool',
    description: 'チーム向けのタスク管理アプリケーション',
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzcxOTA3MjAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Vue.js', 'Firebase', 'Vuex'],
  },
  {
    title: 'Mobile App Design',
    category: 'Mobile Application',
    description: 'ユーザー体験を重視したモバイルアプリのデザイン',
    image: 'https://images.unsplash.com/photo-1741466071751-c62474d2d3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGxhcHRvcHxlbnwxfHx8fDE3NzE5NTQ1NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React Native', 'Expo', 'TypeScript'],
  },
  {
    title: 'Real Estate Platform',
    category: 'Web Application',
    description: '不動産検索プラットフォームのフルスタック開発',
    image: 'https://images.unsplash.com/photo-1675350174784-e76296667d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzcxOTQ3MjczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'Prisma', 'Supabase'],
  },
];

export function Works() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="works" ref={ref} className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-sm tracking-[0.3em] text-gray-500 mb-4 text-center">
            WORKS
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tight text-center">
            制作実績
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-4 right-4 flex gap-2"
                >
                  <button className="p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform">
                    <Github className="w-4 h-4" />
                  </button>
                </motion.div>
              </div>
              
              <div className="p-6">
                <div className="text-xs tracking-wider text-gray-500 mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl mb-3">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-gray-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
