import React, { useState, useEffect } from 'react'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { generateSignature } from "../lib/signerconnect"

const theme = { type: 'light' }

function MyApp({ Component, pageProps }) {
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const connectUser = async () => {
      const { seed, wallet } = await generateSignature();
      setProvider(wallet);
    }
    connectUser();
  }, []);

  return (
    <GeistProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} provider={provider} />
    </GeistProvider>
  )
}

export default React.memo(MyApp);
