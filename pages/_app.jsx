import { Provider } from "react-redux"
import store from "../src/state/store"

import Layout from "../src/components/common/layout"
import "foundation-sites/dist/css/foundation.min.css"
import "../styles/global.scss"

const MyApp = ({ Component, pageProps, auth }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
export default MyApp