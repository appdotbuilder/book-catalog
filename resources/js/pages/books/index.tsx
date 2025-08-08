import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';

interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    isbn?: string;
    pages?: number;
    published_year?: number;
    genre?: string;
    cover_image_url?: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Props {
    books: {
        data: Book[];
        links: PaginationLink[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
    [key: string]: unknown;
}

export default function BooksIndex({ books }: Props) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="📚 Book Catalog - Discover Amazing Books" />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                {/* Header */}
                <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50 dark:bg-gray-900/80 dark:border-gray-700/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">📚</span>
                                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Book Catalog</h1>
                            </div>
                            <nav className="flex items-center gap-4">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            📖 Discover Your Next Great Read
                        </h1>
                        <p className="text-xl md:text-2xl text-indigo-100 mb-8">
                            Explore our curated collection of amazing books from various genres
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">✨ Fiction</span>
                            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">🔍 Mystery</span>
                            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">💖 Romance</span>
                            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">🚀 Sci-Fi</span>
                            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">🏰 Fantasy</span>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="py-12 bg-white dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
                                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{books.total}</div>
                                <div className="text-gray-600 dark:text-gray-300 mt-2">📚 Books Available</div>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
                                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">15+</div>
                                <div className="text-gray-600 dark:text-gray-300 mt-2">🎭 Genres</div>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
                                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">New</div>
                                <div className="text-gray-600 dark:text-gray-300 mt-2">✨ Daily Updates</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Books Grid */}
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {books.data.map((book) => (
                            <Link
                                key={book.id}
                                href={route('books.show', book.id)}
                                className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                            >
                                <div className="aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-700">
                                    {book.cover_image_url ? (
                                        <img
                                            src={book.cover_image_url}
                                            alt={book.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-600 dark:to-gray-500">
                                            <span className="text-6xl">📖</span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        {book.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                        👤 {book.author}
                                    </p>
                                    {book.genre && (
                                        <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs px-2 py-1 rounded-full">
                                            {book.genre}
                                        </span>
                                    )}
                                    {book.published_year && (
                                        <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs px-2 py-1 rounded-full ml-2">
                                            📅 {book.published_year}
                                        </span>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    {books.last_page > 1 && (
                        <div className="flex justify-center items-center space-x-2 mt-12">
                            {books.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url || '#'}
                                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                                        link.active
                                            ? 'bg-indigo-600 text-white'
                                            : link.url
                                            ? 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
                                            : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                                    }`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            ))}
                        </div>
                    )}
                </main>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="flex justify-center items-center space-x-2 mb-4">
                            <span className="text-2xl">📚</span>
                            <h3 className="text-xl font-bold">Book Catalog</h3>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Your gateway to discovering amazing books and stories
                        </p>
                        <p className="text-sm text-gray-500">
                            Built with ❤️ by{" "}
                            <a 
                                href="https://app.build" 
                                target="_blank" 
                                className="font-medium text-indigo-400 hover:text-indigo-300"
                            >
                                app.build
                            </a>
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}