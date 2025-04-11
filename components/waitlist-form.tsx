import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

interface WaitlistFormProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export default function WaitlistForm({ isOpen, onOpenChange }: WaitlistFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

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

      setMessage({ type: 'success', text: 'Thank you for joining our waitlist!' })
      setTimeout(() => {
        onOpenChange(false)
      }, 2000)
    } catch {
      setMessage({ type: 'error', text: 'Failed to submit the form' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#F8F7F3] p-8 shadow-xl">
          <Dialog.Title className="text-2xl font-semibold text-[#2F2C28] mb-2">
            Join the Waitlist
          </Dialog.Title>
          <Dialog.Description className="text-[#767676] mb-6">
            Be the first to know when we launch and get early access to our products.
          </Dialog.Description>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#2F2C28] mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#978163] focus:outline-none focus:ring-1 focus:ring-[#978163]"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#2F2C28] mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#978163] focus:outline-none focus:ring-1 focus:ring-[#978163]"
                placeholder="Enter your email"
              />
            </div>

            {message && (
              <div className={`p-3 rounded-lg ${
                message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
              }`}>
                {message.text}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-[#2F2C28] px-8 py-3 text-white hover:bg-[#3F3F3B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
            </button>
          </form>

          <Dialog.Close className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
} 