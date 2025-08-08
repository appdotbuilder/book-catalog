<?php

namespace Tests\Feature;

use App\Models\Book;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BookTest extends TestCase
{
    use RefreshDatabase;

    public function test_book_catalog_page_displays_correctly(): void
    {
        // Create some sample books
        Book::factory(5)->create();

        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => 
            $page->component('books/index')
                ->has('books.data', 5)
        );
    }

    public function test_book_detail_page_displays_correctly(): void
    {
        $book = Book::factory()->create([
            'title' => 'Test Book Title',
            'author' => 'Test Author',
            'description' => 'This is a test book description.',
        ]);

        $response = $this->get("/books/{$book->id}");

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => 
            $page->component('books/show')
                ->has('book')
                ->where('book.title', 'Test Book Title')
                ->where('book.author', 'Test Author')
        );
    }

    public function test_book_factory_creates_valid_books(): void
    {
        $book = Book::factory()->create();

        $this->assertNotNull($book->title);
        $this->assertNotNull($book->author);
        $this->assertNotNull($book->description);
        $this->assertIsString($book->title);
        $this->assertIsString($book->author);
        $this->assertIsString($book->description);
    }

    public function test_book_model_has_correct_attributes(): void
    {
        $book = Book::factory()->create([
            'title' => 'Sample Title',
            'author' => 'Sample Author',
            'description' => 'Sample description.',
            'pages' => 300,
            'published_year' => 2023,
            'genre' => 'Fiction',
        ]);

        $this->assertEquals('Sample Title', $book->title);
        $this->assertEquals('Sample Author', $book->author);
        $this->assertEquals('Sample description.', $book->description);
        $this->assertEquals(300, $book->pages);
        $this->assertEquals(2023, $book->published_year);
        $this->assertEquals('Fiction', $book->genre);
    }
}