<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title')->comment('The book title');
            $table->string('author')->comment('The book author');
            $table->text('description')->comment('The book description');
            $table->string('isbn')->unique()->nullable()->comment('The book ISBN');
            $table->integer('pages')->nullable()->comment('Number of pages');
            $table->year('published_year')->nullable()->comment('Year of publication');
            $table->string('genre')->nullable()->comment('Book genre');
            $table->string('cover_image_url')->nullable()->comment('URL to cover image');
            $table->timestamps();
            
            // Add indexes for performance
            $table->index('title');
            $table->index('author');
            $table->index('genre');
            $table->index(['published_year', 'created_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};