<?php

namespace App\Http\Controllers;

use App\Http\Requests\UploadRequest;
use Illuminate\Support\Facades\Storage;
use Inertia\Controller;
use Inertia\Response;
use Ramsey\Uuid\Uuid;

class UploadController extends Controller
{
    public function store(UploadRequest $request): Response
    {
        $filename = Uuid::uuid1()->toString() . '.' . $request->file('file')?->extension();

        $path = $request->file('file')?->storeAs('files', $filename, [
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
