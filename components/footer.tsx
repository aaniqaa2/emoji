import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            © 2025 EmojiExplorer. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4 text-sm">
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms and Conditions
          </Link>
          <Link href="/policy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
