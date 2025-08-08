import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="📚 Book Catalog - Discover Amazing Books">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 text-gray-900 lg:justify-center lg:p-8 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-lg border border-gray-300 px-5 py-2.5 text-sm leading-normal text-gray-700 bg-white hover:bg-gray-50 shadow-sm dark:border-gray-600 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-lg px-5 py-2.5 text-sm leading-normal text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-lg border border-transparent px-5 py-2.5 text-sm leading-normal text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
                
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">
                        <div className="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-center shadow-xl border border-gray-200 lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-gray-800 dark:text-white dark:border-gray-700">
                            <div className="mb-6 text-6xl">📚</div>
                            <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                                Welcome to Book Catalog
                            </h1>
                            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                                Discover amazing books from various genres and authors. Browse our curated collection and find your next great read!
                            </p>
                            
                            {/* Features */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-lg">
                                    <div className="text-2xl mb-2">🔍</div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Browse Books</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Explore our extensive catalog</p>
                                </div>
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-lg">
                                    <div className="text-2xl mb-2">📖</div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Detailed Info</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Complete book descriptions</p>
                                </div>
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-lg">
                                    <div className="text-2xl mb-2">🎭</div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Multiple Genres</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Fiction, mystery, romance & more</p>
                                </div>
                                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-lg">
                                    <div className="text-2xl mb-2">✨</div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Fresh Updates</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">New books added regularly</p>
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="space-y-4">
                                <Link
                                    href={route('home')}
                                    className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg transform transition hover:scale-105"
                                >
                                    📚 Explore Book Catalog
                                </Link>
                                
                                {!auth.user && (
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        <Link href={route('register')} className="text-indigo-600 hover:text-indigo-500 font-medium">
                                            Sign up
                                        </Link> to save your favorite books
                                    </p>
                                )}
                            </div>

                            <footer className="mt-12 text-sm text-gray-500 dark:text-gray-400">
                                Built with ❤️ by{" "}
                                <a 
                                    href="https://app.build" 
                                    target="_blank" 
                                    className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                                >
                                    app.build
                                </a>
                            </footer>
                        </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}