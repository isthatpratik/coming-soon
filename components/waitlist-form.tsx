'use client'

import { useState, useCallback, useRef } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import ReactCanvasConfetti from 'react-canvas-confetti'
import type { CreateTypes } from 'canvas-confetti'

interface WaitlistFormProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 9999
} as const

export default function WaitlistForm({ isOpen, onOpenChange }: WaitlistFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const refAnimationInstance = useRef<CreateTypes | null>(null)

  const getInstance = useCallback((instance: { confetti: CreateTypes }) => {
    refAnimationInstance.current = instance.confetti
  }, [])

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#978163', '#2F2C28', '#767676', '#F8F7F3', '#343434'],
      })
    }
  }, [])

  const fireConfetti = useCallback(() => {
    const timer = setInterval(nextTickAnimation, 400)
    setTimeout(() => {
      clearInterval(timer)
    }, 2000)
  }, [nextTickAnimation])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      })

      const data = await response.json()

      if (!response.ok) {
        setMessage({ type: 'error', text: data.error || 'Something went wrong' })
        return
      }

      setIsSuccess(true)
      // Fire confetti immediately after success
      fireConfetti()
      
      setTimeout(() => {
        onOpenChange(false)
        // Reset the form state after closing
        setTimeout(() => {
          setIsSuccess(false)
        }, 300)
      }, 5000)
    } catch {
      setMessage({ type: 'error', text: 'Failed to submit the form' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <ReactCanvasConfetti
        onInit={getInstance}
        style={canvasStyles}
        className="pointer-events-none"
      />
      <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]" />
          <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md lg:max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#F8F7F3] p-8 lg:p-12 shadow-xl z-[101]">
            {!isSuccess ? (
              <>
                <Dialog.Title className="text-2xl lg:text-4xl font-semibold text-[#2F2C28] mb-2 lg:mb-4">
                  Join the Waitlist
                </Dialog.Title>
                <Dialog.Description className="text-[#767676] mb-6 lg:mb-8 lg:text-lg">
                  Be the first to know when we launch and get early access to our products.
                </Dialog.Description>

                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm lg:text-base font-medium text-[#2F2C28] mb-1 lg:mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 lg:px-6 lg:py-3 text-base lg:text-lg focus:border-[#978163] focus:outline-none focus:ring-1 focus:ring-[#978163]"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm lg:text-base font-medium text-[#2F2C28] mb-1 lg:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 lg:px-6 lg:py-3 text-base lg:text-lg focus:border-[#978163] focus:outline-none focus:ring-1 focus:ring-[#978163]"
                      placeholder="Enter your email"
                    />
                  </div>

                  {message && (
                    <div className={`p-3 lg:p-4 rounded-lg text-sm lg:text-base ${
                      message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {message.text}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-[#2F2C28] px-8 py-3 lg:px-10 lg:py-4 text-base lg:text-lg text-white hover:bg-[#3F3F3B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
                  >
                    {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8 lg:py-12">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-4xl font-semibold text-[#2F2C28] mb-2 lg:mb-4">
                  Welcome Aboard! 🎉
                </h3>
                <p className="text-[#767676] mb-4 lg:mb-6 lg:text-lg">
                  Thank you for joining our waitlist. We&apos;re excited to have you with us!
                </p>
                <p className="text-sm lg:text-base text-[#978163]">
                  Check your email for confirmation and updates.
                </p>
              </div>
            )}

            <Dialog.Close className="absolute right-4 top-4 lg:right-6 lg:top-6 text-gray-400 hover:text-gray-600 hover:cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
} 