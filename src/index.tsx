import { createRoot } from 'react-dom/client';
import { App } from './app/app';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss'
import './shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

const root = createRoot(document.getElementById('root'));
root.render(
    <StoreProvider>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </StoreProvider>
)