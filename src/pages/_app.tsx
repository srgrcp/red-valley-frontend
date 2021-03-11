import { grommet, Grommet } from 'grommet'
import { AppProps } from 'next/app'

const myApp = ({ Component, pageProps}: AppProps) => {
    return <Grommet theme={grommet} themeMode='dark' full><Component { ...pageProps } /></Grommet>
}

export default myApp
