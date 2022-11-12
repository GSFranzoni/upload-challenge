<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UploadRequest extends FormRequest
{
    public const MAX_FILE_SIZE_1_MB = 1024 * 1024;

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'file' => 'required|file|mimes:jpg,jpeg,png,gif|max:' . self::MAX_FILE_SIZE_1_MB,
        ];
    }
}
