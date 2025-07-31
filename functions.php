<?php
/**
 * GameBreaker Theme Functions
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function gamebreaker_setup() {
    // Add theme support for various features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    add_theme_support('custom-logo');
    add_theme_support('custom-background');
    add_theme_support('customize-selective-refresh-widgets');

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'gamebreaker'),
        'footer' => __('Footer Menu', 'gamebreaker'),
    ));

    // Add image sizes
    add_image_size('product-thumb', 300, 300, true);
    add_image_size('hero-bg', 1920, 1080, true);
    add_image_size('blog-thumb', 400, 250, true);
}
add_action('after_setup_theme', 'gamebreaker_setup');

/**
 * Enqueue Scripts and Styles
 */
function gamebreaker_scripts() {
    // Enqueue styles
    wp_enqueue_style('gamebreaker-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap', array(), null);
    wp_enqueue_style('lucide-icons', 'https://unpkg.com/lucide@latest/dist/umd/lucide.js', array(), null);

    // Enqueue scripts
    wp_enqueue_script('gamebreaker-main', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('gamebreaker-main', 'gamebreaker_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('gamebreaker_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'gamebreaker_scripts');

/**
 * Register Widget Areas
 */
function gamebreaker_widgets_init() {
    register_sidebar(array(
        'name'          => __('Footer Widget Area 1', 'gamebreaker'),
        'id'            => 'footer-1',
        'description'   => __('Add widgets here to appear in your footer.', 'gamebreaker'),
        'before_widget' => '<div class="widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
}
add_action('widgets_init', 'gamebreaker_widgets_init');

/**
 * Customizer Settings
 */
function gamebreaker_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('hero_section', array(
        'title' => __('Hero Section', 'gamebreaker'),
        'priority' => 30,
    ));

    $wp_customize->add_setting('hero_title', array(
        'default' => 'GAMEBREAKER',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_title', array(
        'label' => __('Hero Title', 'gamebreaker'),
        'section' => 'hero_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('hero_subtitle', array(
        'default' => 'Request a Free Custom Uniform Design',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_subtitle', array(
        'label' => __('Hero Subtitle', 'gamebreaker'),
        'section' => 'hero_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('hero_background', array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'hero_background', array(
        'label' => __('Hero Background Image', 'gamebreaker'),
        'section' => 'hero_section',
    )));

    // Contact Information
    $wp_customize->add_section('contact_info', array(
        'title' => __('Contact Information', 'gamebreaker'),
        'priority' => 35,
    ));

    $wp_customize->add_setting('contact_phone', array(
        'default' => '1-800-GAMEBREAKER',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('contact_phone', array(
        'label' => __('Phone Number', 'gamebreaker'),
        'section' => 'contact_info',
        'type' => 'text',
    ));

    $wp_customize->add_setting('contact_email', array(
        'default' => 'info@gamebreaker.com',
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('contact_email', array(
        'label' => __('Email Address', 'gamebreaker'),
        'section' => 'contact_info',
        'type' => 'email',
    ));

    // Social Media
    $wp_customize->add_section('social_media', array(
        'title' => __('Social Media', 'gamebreaker'),
        'priority' => 40,
    ));

    $social_networks = array('facebook', 'twitter', 'instagram', 'youtube');
    
    foreach ($social_networks as $network) {
        $wp_customize->add_setting("social_{$network}", array(
            'default' => '',
            'sanitize_callback' => 'esc_url_raw',
        ));

        $wp_customize->add_control("social_{$network}", array(
            'label' => sprintf(__('%s URL', 'gamebreaker'), ucfirst($network)),
            'section' => 'social_media',
            'type' => 'url',
        ));
    }
}
add_action('customize_register', 'gamebreaker_customize_register');

/**
 * Custom Post Types
 */
function gamebreaker_custom_post_types() {
    // Products Post Type
    register_post_type('product', array(
        'labels' => array(
            'name' => 'Products',
            'singular_name' => 'Product',
            'add_new_item' => 'Add New Product',
            'edit_item' => 'Edit Product',
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-products',
        'rewrite' => array('slug' => 'products'),
    ));

    // Testimonials Post Type
    register_post_type('testimonial', array(
        'labels' => array(
            'name' => 'Testimonials',
            'singular_name' => 'Testimonial',
            'add_new_item' => 'Add New Testimonial',
            'edit_item' => 'Edit Testimonial',
        ),
        'public' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-testimonial',
    ));
}
add_action('init', 'gamebreaker_custom_post_types');

/**
 * Custom Meta Boxes
 */
function gamebreaker_add_meta_boxes() {
    add_meta_box(
        'product_details',
        'Product Details',
        'gamebreaker_product_meta_box',
        'product',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'gamebreaker_add_meta_boxes');

function gamebreaker_product_meta_box($post) {
    wp_nonce_field('gamebreaker_save_product_meta', 'gamebreaker_product_nonce');
    
    $price = get_post_meta($post->ID, '_product_price', true);
    $rating = get_post_meta($post->ID, '_product_rating', true);
    $badge = get_post_meta($post->ID, '_product_badge', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="product_price">Price</label></th>';
    echo '<td><input type="text" id="product_price" name="product_price" value="' . esc_attr($price) . '" /></td></tr>';
    echo '<tr><th><label for="product_rating">Rating (1-5)</label></th>';
    echo '<td><input type="number" id="product_rating" name="product_rating" min="1" max="5" step="0.1" value="' . esc_attr($rating) . '" /></td></tr>';
    echo '<tr><th><label for="product_badge">Badge Text</label></th>';
    echo '<td><input type="text" id="product_badge" name="product_badge" value="' . esc_attr($badge) . '" /></td></tr>';
    echo '</table>';
}

function gamebreaker_save_product_meta($post_id) {
    if (!isset($_POST['gamebreaker_product_nonce']) || !wp_verify_nonce($_POST['gamebreaker_product_nonce'], 'gamebreaker_save_product_meta')) {
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    if (isset($_POST['product_price'])) {
        update_post_meta($post_id, '_product_price', sanitize_text_field($_POST['product_price']));
    }
    
    if (isset($_POST['product_rating'])) {
        update_post_meta($post_id, '_product_rating', floatval($_POST['product_rating']));
    }
    
    if (isset($_POST['product_badge'])) {
        update_post_meta($post_id, '_product_badge', sanitize_text_field($_POST['product_badge']));
    }
}
add_action('save_post', 'gamebreaker_save_product_meta');

/**
 * AJAX Handlers
 */
function gamebreaker_add_to_cart() {
    check_ajax_referer('gamebreaker_nonce', 'nonce');
    
    $product_id = intval($_POST['product_id']);
    
    // Add your cart logic here
    
    wp_send_json_success(array(
        'message' => 'Product added to cart successfully!'
    ));
}
add_action('wp_ajax_add_to_cart', 'gamebreaker_add_to_cart');
add_action('wp_ajax_nopriv_add_to_cart', 'gamebreaker_add_to_cart');

/**
 * Helper Functions
 */
function gamebreaker_get_social_links() {
    $social_networks = array('facebook', 'twitter', 'instagram', 'youtube');
    $links = array();
    
    foreach ($social_networks as $network) {
        $url = get_theme_mod("social_{$network}");
        if ($url) {
            $links[$network] = $url;
        }
    }
    
    return $links;
}

function gamebreaker_star_rating($rating) {
    $stars = '';
    for ($i = 1; $i <= 5; $i++) {
        if ($i <= $rating) {
            $stars .= '<span class="star filled">★</span>';
        } else {
            $stars .= '<span class="star">☆</span>';
        }
    }
    return $stars;
}
?>