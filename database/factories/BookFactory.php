<?php

namespace Database\Factories;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $genres = [
            'Fiction', 'Mystery', 'Romance', 'Science Fiction', 'Fantasy',
            'Biography', 'History', 'Self-Help', 'Business', 'Philosophy',
            'Technology', 'Health', 'Travel', 'Cooking', 'Art'
        ];

        $bookTitles = [
            'The Silent Echo', 'Midnight Whispers', 'Ocean of Dreams', 'The Last Guardian',
            'Shadows of Tomorrow', 'Heart of Stone', 'The Broken Crown', 'Dancing with Fire',
            'The Empty Throne', 'Beyond the Horizon', 'The Crystal Palace', 'Whispers in Time',
            'The Golden Path', 'Secrets of the Deep', 'The Forgotten Realm', 'Echoes of Eternity',
            'The Mystic Journey', 'Twilight Chronicles', 'The Sacred Bond', 'Rivers of Memory'
        ];

        return [
            'title' => fake()->randomElement($bookTitles),
            'author' => fake()->firstName() . ' ' . fake()->lastName(),
            'description' => fake()->paragraphs(3, true),
            'isbn' => fake()->isbn13(),
            'pages' => fake()->numberBetween(150, 800),
            'published_year' => fake()->numberBetween(1950, 2024),
            'genre' => fake()->randomElement($genres),
            'cover_image_url' => 'https://picsum.photos/400/600?random=' . fake()->numberBetween(1, 1000),
        ];
    }
}