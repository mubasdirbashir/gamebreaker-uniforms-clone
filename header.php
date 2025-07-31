<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    
    <!-- Top Bar -->
    <div class="bg-gamebreaker-dark text-white py-2">
        <div class="container">
            <div class="flex justify-between items-center text-sm">
                <div class="contact-info">
                    <span>📞 <?php echo esc_html(get_theme_mod('contact_phone', '1-800-GAMEBREAKER')); ?></span>
                    <span class="ml-4">✉️ <?php echo esc_html(get_theme_mod('contact_email', 'info@gamebreaker.com')); ?></span>
                </div>
                <div class="user-actions">
                    <a href="<?php echo wp_login_url(); ?>" class="hover:text-primary mr-4">Login</a>
                    <a href="<?php echo wp_registration_url(); ?>" class="hover:text-primary mr-4">Sign Up</a>
                    <a href="<?php echo home_url('/checkout/'); ?>" class="hover:text-primary">
                        🛒 Cart <span class="cart-count bg-primary rounded-full px-2 py-1 text-xs ml-1">0</span>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Main Header -->
    <header id="masthead" class="site-header bg-white shadow-lg">
        <div class="container">
            <div class="flex items-center justify-between py-4">
                
                <!-- Logo -->
                <div class="site-branding">
                    <?php if (has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <h1 class="site-title text-2xl font-black">
                            <a href="<?php echo esc_url(home_url('/')); ?>" class="text-primary">
                                GAME<span class="text-gray-900">BREAKER</span>
                            </a>
                        </h1>
                    <?php endif; ?>
                </div>

                <!-- Search Bar -->
                <div class="header-search hidden md:block flex-1 max-w-md mx-8">
                    <form role="search" method="get" action="<?php echo esc_url(home_url('/')); ?>" class="flex">
                        <input type="search" 
                               name="s" 
                               placeholder="Search products..." 
                               value="<?php echo get_search_query(); ?>"
                               class="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-primary">
                        <button type="submit" class="bg-primary text-white px-6 py-2 rounded-r-lg hover:bg-opacity-90">
                            🔍
                        </button>
                    </form>
                </div>

                <!-- Mobile Menu Toggle -->
                <button class="mobile-menu-toggle md:hidden" aria-label="Toggle mobile menu">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>

            </div>

            <!-- Navigation -->
            <nav id="site-navigation" class="main-navigation">
                <div class="nav-wrapper bg-gray-100 py-3 rounded-lg">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_id'        => 'primary-menu',
                        'menu_class'     => 'flex flex-wrap justify-center space-x-8',
                        'container'      => false,
                        'fallback_cb'    => 'gamebreaker_default_menu',
                    ));
                    ?>
                </div>
            </nav>

        </div>
    </header>

<?php
// Default menu fallback
function gamebreaker_default_menu() {
    echo '<ul class="flex flex-wrap justify-center space-x-8">';
    echo '<li><a href="' . home_url('/') . '" class="text-gray-700 hover:text-primary font-medium">Home</a></li>';
    echo '<li><a href="' . home_url('/products/') . '" class="text-gray-700 hover:text-primary font-medium">All Products</a></li>';
    echo '<li><a href="' . home_url('/collection/football/') . '" class="text-gray-700 hover:text-primary font-medium">Football</a></li>';
    echo '<li><a href="' . home_url('/collection/basketball/') . '" class="text-gray-700 hover:text-primary font-medium">Basketball</a></li>';
    echo '<li><a href="' . home_url('/collection/baseball/') . '" class="text-gray-700 hover:text-primary font-medium">Baseball</a></li>';
    echo '<li><a href="' . home_url('/collection/soccer/') . '" class="text-gray-700 hover:text-primary font-medium">Soccer</a></li>';
    echo '<li><a href="' . home_url('/collection/hockey/') . '" class="text-gray-700 hover:text-primary font-medium">Hockey</a></li>';
    echo '<li><a href="' . home_url('/customize/') . '" class="text-gray-700 hover:text-primary font-medium">Customize</a></li>';
    echo '<li><a href="' . home_url('/blog/') . '" class="text-gray-700 hover:text-primary font-medium">Blog</a></li>';
    echo '<li><a href="' . home_url('/quote/') . '" class="text-gray-700 hover:text-primary font-medium">Get Quote</a></li>';
    echo '</ul>';
}
?>