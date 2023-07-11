<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{

    public function index()
    {
        $search = request('search');

        if ($search) {
            $events = Book::where([
                ['title', 'like', '%' . $search],
            ])
                ->orWhere([
                    ['city', 'like', '%' . $search],
                ])
                ->get();
        } else {
            $events = Book::all();
        }


        return view('welcome', [
            'events' => $events,
            'search' => $search,
        ]);
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        //
    }


    public function show(string $id)
    {
        //
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
