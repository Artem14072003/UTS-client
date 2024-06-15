import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import './assets/fonts/style.css'
import './assets/style/style.scss'
import {PopappProvider} from "./context/popappContext.tsx";
import Provider from "./Provider.tsx";
import Route from "./route/Route.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider>
            <PopappProvider>
                <Route/>
            </PopappProvider>
        </Provider>
    </StrictMode>,
)
