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
          <div className="flex w-admin-content h-admin-content overflow-auto">
            <div className="flex flex-col w-full h-fit min-h-full">
              <section className="flex flex-1">{children}</section>
              <Footer />
            </div>
          </div>
        </main>
      </AdminProviders>
    </>
  )
}
