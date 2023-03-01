<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $posts = Post::with('category:id,name')
            ->when(request('category'), function ($query) {
                $query->where('category_id', request('category'));
            })
            ->paginate(2);
        return PostResource::collection($posts);
    }
}
