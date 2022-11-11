<?php

namespace App\Http\Controllers;

use App\Http\Requests\UploadRequest;
use Inertia\Controller;
use Inertia\Response;
use Ramsey\Uuid\Uuid;

class UploadController extends Controller
{
    public function store(UploadRequest $request): Response
    {
        $filename = Uuid::uuid1()->toString() . '.' . $request->file('file')?->extension();

        $request->file('file')?->storeAs('public', $filename);

        return inertia('Upload', [
            'fileUrl' => asset('storage/' . $filename),
        ]);
    }

    public function index(): Response
    {
        return inertia('Upload');
    }
}
