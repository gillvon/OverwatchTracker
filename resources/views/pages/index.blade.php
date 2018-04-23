@extends('layouts.master')

@section('styles')
    <link href="{{ asset('css/index.css') }}" rel="stylesheet">
@endsection

@section('title')
    Search Your Overwatch Stats!
@endsection

@section('content')
    <div id="blur-top-left"></div>
    <div id="blur-bottom-right"></div>
  
    <div id="small-logo-container" >
        <img id="small-logo" src="{{ asset('images/small-logo.png') }}">
        <img id="small-logo-black" src="{{ asset('images/small-logo-black.png') }}">
    </div>
    <div id="search-label-container">
        <h3 id="search-label">Overwatch Statistics & Leaderboards</h3>
    </div>
    <div id="search-input-container">
        <form id="search-form">
            <div class="form-group has-feedback">
                <input type="text" id="search-form-input" class="form-control" placeholder="Search Player...">
                <i class="fas fa-search form-control-feedback"></i>
            </div>
        </form>
    </div>

@endsection

