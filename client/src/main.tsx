import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/main.scss';
import {RouterProvider} from 'react-router-dom'; // Import the RouterProvider component from the react-router-dom package
import {router} from './Router';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {AuthProvider} from "./contexts/authContext.tsx"; // Import the router object from the Router module

ReactDOM.createRoot(document.getElementById('root')!).render(

    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <AuthProvider>
                <RouterProvider router={router}/>
            </AuthProvider>

        </DevSupport>
    </React.StrictMode>
);
