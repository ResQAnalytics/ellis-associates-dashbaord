"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Eye, EyeOff, LogOut, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function EllisAssociatesDashboard() {
  const [currentView, setCurrentView] = useState<'landing' | 'auth' | 'dashboard'>('landing')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [attemptCount, setAttemptCount] = useState(0)

  // Password configuration - Change this to your desired password
  const CORRECT_PASSWORD = 'ellis2024'
  const MAX_ATTEMPTS = 5

  // PowerBI Dashboard URL - Replace with your actual PowerBI public link
  const POWERBI_URL = 'https://app.powerbi.com/view?r=eyJrIjoiNTFhZTNmZGEtOWJkZi00YzkxLWI2NTUtYTFmMmMxYzdjMDk5IiwidCI6ImI4MDM2M2IxLWE1NzAtNDAwMi05YzI4LTg2YzUxY2EwOTEzOCIsImMiOjZ9'

  const handleContinue = () => {
    setCurrentView('auth')
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (attemptCount >= MAX_ATTEMPTS) {
      setError('Too many failed attempts. Please refresh the page.')
      return
    }

    setIsLoading(true)
    setError('')

    setTimeout(() => {
      if (password === CORRECT_PASSWORD) {
        setCurrentView('dashboard')
        setPassword('')
        setAttemptCount(0)
      } else {
        setError('Incorrect password. Please try again.')
        setAttemptCount(prev => prev + 1)
        setPassword('')
      }
      setIsLoading(false)
    }, 800)
  }

  const handleLogout = () => {
    setCurrentView('landing')
    setPassword('')
    setError('')
    setAttemptCount(0)
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-teal-600">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-400 animate-wave"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-teal-400 to-blue-400 animate-wave-slow"></div>
        </div>
      </div>

      <div className="relative z-10 min-h-screen">
        <AnimatePresence mode="wait">
          {currentView === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center min-h-screen px-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center mb-8"
              >
                <div className="bg-white rounded-2xl p-8 shadow-2xl mb-6 inline-block">
                  <Image
                    src="https://eaisafety.com/wp-content/uploads/2022/03/cropped-EAI-Safety-Logo-1.png"
                    alt="Ellis and Associates Safety Logo"
                    width={300}
                    height={120}
                    className="w-auto h-24 md:h-32"
                    priority
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Ellis & Associates Safety Consultants
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-4">
                  Business Intelligence Dashboard
                </p>
                <a
                  href="https://eaisafety.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors text-lg"
                >
                  Visit eaisafety.com
                  <ExternalLink className="w-5 h-5" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="max-w-2xl mx-auto mb-8"
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardContent className="pt-6">
                    <p className="text-white text-center leading-relaxed">
                      This dashboard contains confidential business intelligence data. 
                      By accessing this system, you acknowledge that all information is 
                      proprietary and subject to applicable data protection regulations. 
                      Unauthorized access, use, or distribution is strictly prohibited.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Button
                  onClick={handleContinue}
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Access Dashboard
                </Button>
              </motion.div>
            </motion.div>
          )}

          {currentView === 'auth' && (
            <motion.div
              key="auth"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center min-h-screen px-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="w-full max-w-md"
              >
                <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-blue-900 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <Lock className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-blue-900">
                      Secure Access
                    </CardTitle>
                    <CardDescription>
                      Enter your password to access the dashboard
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handlePasswordSubmit} className="space-y-4">
                      <div className="relative">
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pr-10"
                          disabled={isLoading || attemptCount >= MAX_ATTEMPTS}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>

                      {error && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-600 text-sm text-center"
                        >
                          {error}
                        </motion.p>
                      )}

                      {attemptCount > 0 && attemptCount < MAX_ATTEMPTS && (
                        <p className="text-amber-600 text-sm text-center">
                          Attempts remaining: {MAX_ATTEMPTS - attemptCount}
                        </p>
                      )}

                      <Button
                        type="submit"
                        className="w-full bg-blue-900 hover:bg-blue-800"
                        disabled={isLoading || !password || attemptCount >= MAX_ATTEMPTS}
                      >
                        {isLoading ? 'Verifying...' : 'Access Dashboard'}
                      </Button>

                      <Button
                        type="button"
                        variant="ghost"
                        className="w-full"
                        onClick={() => setCurrentView('landing')}
                      >
                        Back to Home
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}

          {currentView === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen"
            >
              <div className="fixed top-4 right-4 z-50">
                <Button
                  onClick={handleLogout}
                  variant="secondary"
                  className="bg-white/90 hover:bg-white shadow-lg"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>

              <div className="w-full h-screen">
                <iframe
                  src={POWERBI_URL}
                  className="w-full h-full border-0"
                  title="PowerBI Dashboard"
                  allowFullScreen
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: translateX(-50%) translateY(-50%) rotate(0deg);
          }
          50% {
            transform: translateX(-30%) translateY(-60%) rotate(180deg);
          }
        }

        @keyframes wave-slow {
          0%, 100% {
            transform: translateX(-50%) translateY(-50%) rotate(0deg);
          }
          50% {
            transform: translateX(-70%) translateY(-40%) rotate(-180deg);
          }
        }

        .animate-wave {
          animation: wave 20s ease-in-out infinite;
        }

        .animate-wave-slow {
          animation: wave-slow 25s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
