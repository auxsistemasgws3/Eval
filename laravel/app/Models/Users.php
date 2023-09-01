<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
//Hii
class Users extends Model
{
    protected $table = 'users';
    
    use SoftDeletes;

    /**
     * Get the notes for the users.
     */
    public function notes()
    {
        return $this->hasMany('App\Notes');
    }

    protected $dates = [
        'deleted_at'
    ];
}