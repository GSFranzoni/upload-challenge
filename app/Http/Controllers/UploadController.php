<?php

namespace App\Http\Controllers;

use App\Http\Requests\UploadRequest;
use Illuminate\Support\Facades\Storage;
use Inertia\Controller;
use Inertia\Response;

class UploadController extends Controller
{
    public function store(UploadRequest $request): Response
    {
        $path = $request->file('file')?->store('files', [
            'disk' => 's3',
            'expires' => now()->addMinutes(5),
        ]);

        $url = Storage::disk('s3')->temporaryUrl($path, now()->addMinutes(5));

        return inertia('Upload', [
            'fileUrl' => $url,
        ]);
    }

    public function index(): Response
    {
        return inertia('Upload');
    }
}
