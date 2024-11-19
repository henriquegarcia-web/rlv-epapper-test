import { Footer, Header, SideMenu } from '@/components'

import { AdminProviders } from './providers'

export default function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AdminProviders>
        <main className="flex flex-col items-end w-screen h-scren">
          <Header />
          <SideMenu />
          <div className="flex flex-col border border-red-500 w-[var(--admin-content-w)] h-[var(--admin-content-h)]">
            <section className="flex flex-1 border border-blue-500">
              {children}
            </section>
            <Footer />
          </div>
        </main>
      </AdminProviders>
    </>
  )
}
