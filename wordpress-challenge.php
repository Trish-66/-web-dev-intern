<?php

// Function to handle the shortcode
function greeting_shortcode() {
    return "Welcome to My Site!";
}

// Register the shortcode
add_shortcode('greeting', 'greeting_shortcode');