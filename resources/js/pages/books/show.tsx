import React from 'react';
import { Head, Link } from '@inertiajs/react';

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

interface Props {
    book: Book;
    [key: string]: unknown;
}

export default function BookShow({ book }: Props) {
    return (
        <>
            <Head title={`📖 ${book.title} - Book Details`} />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                {/* Header */}
                <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50 dark:bg-gray-900/80 dark:border-gray-700/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <Link
                                href={route('home')}
                                className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                            >
                                <span className="text-2xl">📚</span>
                                <span className="text-xl font-bold">Book Catalog</span>
                            </Link>
                            <Link
                                href={route('home')}
                                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                            >
                                ← Back to Catalog
                            </Link>
                        </div>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                            {/* Book Cover */}
                            <div className="flex justify-center lg:justify-start">
                                <div className="max-w-md w-full">
                                    <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-lg bg-gray-100 dark:bg-gray-700">
                                        {book.cover_image_url ? (
                                            <img
                                                src={book.cover_image_url}
                                                alt={book.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-600 dark:to-gray-500">
                                                <span className="text-8xl">📖</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Book Details */}
                            <div className="space-y-6">
                                <div>
                                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                        {book.title}
                                    </h1>
                                    <div className="flex items-center space-x-2 text-xl text-gray-600 dark:text-gray-400 mb-6">
                                        <span>👤</span>
                                        <span className="font-medium">by {book.author}</span>
                                    </div>
                                </div>

                                {/* Book Meta Information */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {book.genre && (
                                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-lg">
                                            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Genre</div>
                                            <div className="font-semibold text-indigo-600 dark:text-indigo-400 flex items-center">
                                                <span className="mr-2">🎭</span>
                                                {book.genre}
                                            </div>
                                        </div>
                                    )}

                                    {book.published_year && (
                                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-lg">
                                            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Published</div>
                                            <div className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center">
                                                <span className="mr-2">📅</span>
                                                {book.published_year}
                                            </div>
                                        </div>
                                    )}

                                    {book.pages && (
                                        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-lg">
                                            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Pages</div>
                                            <div className="font-semibold text-orange-600 dark:text-orange-400 flex items-center">
                                                <span className="mr-2">📄</span>
                                                {book.pages} pages
                                            </div>
                                        </div>
                                    )}

                                    {book.isbn && (
                                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-lg">
                                            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">ISBN</div>
                                            <div className="font-semibold text-purple-600 dark:text-purple-400 flex items-center">
                                                <span className="mr-2">🔢</span>
                                                {book.isbn}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Description */}
                                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                        <span className="mr-2">📝</span>
                                        Description
                                    </h3>
                                    <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                                        {book.description}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                    <Link
                                        href={route('home')}
                                        className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
                                    >
                                        ← Back to Catalog
                                    </Link>
                                    <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200">
                                        ❤️ Add to Favorites
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Books Section */}
                    <div className="mt-16">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                📚 Explore More Books
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                                Discover more amazing books in our catalog
                            </p>
                        </div>
                        <div className="text-center">
                            <Link
                                href={route('home')}
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                View All Books →
                            </Link>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12 mt-16">
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