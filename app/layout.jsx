import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
// see how @ is able to not mention the path
export const metadata = {
    title: "Promptopia",
    description: 'Discover and Share AI Prompts',
    icons: {
        icon: 'assets/images/logo.svg', // /public path
      },
}
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient'/>
                </div>
                <main className='app'>
                    <Nav/>
                    {children}
                </main>

            </Provider>
        </body>
    </html>
  )
}

export default RootLayout
