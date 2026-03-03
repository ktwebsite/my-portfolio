import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, MessageCircle, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { formRef, formData, status, isSubmitting, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contact" ref={ref} className="w-full py-32 bg-gray-50">
      <div className="w-full px-6 flex justify-center">
        <div className="w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="!mb-20"
        >
          <div className="text-sm tracking-[0.3em] text-gray-500 !mb-4 text-center">
            CONTACT
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tight text-center !mb-6">
            お問い合わせ
          </h2>
          <div className="w-full flex justify-center">
            <p className="text-center text-gray-600 max-w-2xl">
              お仕事のご依頼・ご相談など、お気軽にお問い合わせください
            </p>
          </div>
        </motion.div>

        <div className="!mt-8 w-full flex justify-center">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl w-full">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6">Get in Touch</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                プロジェクトのご相談から、ちょっとした質問まで、
                どんなことでもお気軽にご連絡ください。
                24時間以内にお返事いたします。
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email</div>
                  <a href="mailto:yancunjiantai@gmail.com" className="hover:underline">
                    yancunjiantai@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">SNS</div>
                  <div className="space-y-1">
                    <a href="https://x.com/iwamura__980" className="block hover:underline">
                      X
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">対応可能時間</p>
              <p className="text-gray-700">
                平日 10:00 - 19:00<br />
                土日祝 メールのみ対応
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  お名前 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                  placeholder="山田太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  メールアドレス *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  メッセージ *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors resize-none"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full px-6 py-4 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                  status === 'success'
                    ? 'bg-green-600 text-white'
                    : status === 'error'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status === 'sending' && (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>送信中...</span>
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span>送信完了</span>
                  </>
                )}
                {status === 'error' && (
                  <>
                    <AlertCircle className="w-4 h-4" />
                    <span>送信失敗</span>
                  </>
                )}
                {status === 'idle' && (
                  <>
                    <span>送信する</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="!mt-32 !pt-12 border-t border-gray-200 text-center"
        >
          <p className="text-sm text-gray-500">
            © 2026 Your Name. All rights reserved.
          </p>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
