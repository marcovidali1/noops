import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSetTheme } from "./features/theme/useSetTheme";
import { Toaster } from "./ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from "./ui/AppLayout";
import Join from "./pages/Join";
import UserProtectedRoute from "./features/auth/UserProtectedRoute";

const queryClient = new QueryClient();

const App = () => {
    useSetTheme();

    return (
        <>
            <Toaster />

            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route element={<AppLayout />}>
                            <Route
                                index
                                element={
                                    <UserProtectedRoute>
                                        <h1>home</h1>
                                    </UserProtectedRoute>
                                }
                            />
                            <Route path="/join" element={<Join />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </>
    );
};

export default App;
