import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSetTheme } from "./ui/useSetTheme";
import { Toaster } from "./ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";

import AppLayout from "./AppLayout";
import FullPageSpinner from "./ui/FullPageSpinner";
import CoreLayout from "./ui/CoreLayout";

const queryClient = new QueryClient();

const Home = lazy(() => import("./pages/Home"));
const Create = lazy(() => import("./pages/Create"));

const Join = lazy(() => import("./pages/Join"));

const WelcomeName = lazy(() => import("./pages/WelcomeName"));
const WelcomeUsername = lazy(() => import("./pages/WelcomeUsername"));
const WelcomeFavoriteLanguage = lazy(
    () => import("./pages/WelcomeFavoriteLanguage"),
);
const WelcomeBio = lazy(() => import("./pages/WelcomeBio"));
const WelcomeAvatar = lazy(() => import("./pages/WelcomeAvatar"));
const WelcomeSubmit = lazy(() => import("./pages/WelcomeSubmit"));

const App = () => {
    useSetTheme();

    return (
        <>
            <Toaster position="top-center" />

            <QueryClientProvider client={queryClient}>
                <Suspense fallback={<FullPageSpinner />}>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<AppLayout />}>
                                <Route element={<CoreLayout />}>
                                    <Route index element={<Home />} />
                                    <Route
                                        path="/create"
                                        element={<Create />}
                                    />
                                </Route>

                                <Route path="/join" element={<Join />} />

                                <Route
                                    path="/welcome/name"
                                    element={<WelcomeName />}
                                />
                                <Route
                                    path="/welcome/username"
                                    element={<WelcomeUsername />}
                                />
                                <Route
                                    path="/welcome/favorite-language"
                                    element={<WelcomeFavoriteLanguage />}
                                />
                                <Route
                                    path="/welcome/bio"
                                    element={<WelcomeBio />}
                                />
                                <Route
                                    path="/welcome/avatar"
                                    element={<WelcomeAvatar />}
                                />
                                <Route
                                    path="/welcome/submit"
                                    element={<WelcomeSubmit />}
                                />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </Suspense>
            </QueryClientProvider>
        </>
    );
};

export default App;
