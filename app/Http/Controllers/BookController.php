<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index(Request $request)
    {
        $search = request('search');

        if ($search) {
            $books = Book::where([
                ['title', 'like', '%' . $search],
            ])
                ->orWhere([
                    ['author', 'like', '%' . $search],
                ])
                ->get();
        } else {
            $books = Book::all();
        }

        $data = [
            'books' => $books,
            'search' => $search,
        ];

        if ($request->expectsJson()) {
            return response()->json($data);
        }

        return view('livros');
    }

    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        //
    }


    public function show(string $id, Request $request)
    {
        $book = Book::findOrFail($id);

        if ($request->expectsJson()) {
            return response()->json($book);
        }

        return view('livro', [
            'book' => $book,
        ]);
    }


    public function edit(string $id)
    {
        //
    }


    public function update(Request $request, string $id)
    {
        //
    }


    public function destroy(string $id)
    {
        //
    }
}
