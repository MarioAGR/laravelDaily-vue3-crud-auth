<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = Role::create(['name' => 'Administrator']);
        $admin->permissions()->attach(Permission::pluck('id'));

        $editor = Role::create(['name' => 'Editor']);
        $editor->permissions()->attach(Permission::whereNot('name', 'posts.delete')->pluck('id'));

        $postDeleter = Role::create(['name' => 'Post Deleter']);
        $postDeleter->permissions()->attach(Permission::where('name', 'posts.delete')->pluck('id'));
    }
}
