<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UploadRequest extends FormRequest
{
    public const MAX_FILE_SIZE_5_MB = 1024 * 1024 * 5;

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'file' => 'required|file|mimes:jpg,jpeg,png,gif|max:' . self::MAX_FILE_SIZE_5_MB,
        ];
    }
}
