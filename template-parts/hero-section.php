<section class="hero-section relative" style="background-image: url('<?php echo esc_url(get_theme_mod('hero_background', get_template_directory_uri() . '/assets/sports-collage-hero.jpg')); ?>');">
    <div class="hero-overlay"></div>
    
    <div class="container relative z-10 text-center text-white">
        <div class="max-w-4xl mx-auto">
            
            <h1 class="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                <?php echo esc_html(get_theme_mod('hero_title', 'GAMEBREAKER')); ?>
            </h1>
            
            <p class="text-xl md:text-2xl mb-8 text-white/90">
                <?php echo esc_html(get_theme_mod('hero_subtitle', 'Request a Free Custom Uniform Design')); ?>
            </p>
            
            <h2 class="text-2xl md:text-3xl font-bold mb-6 text-white">
                <?php echo esc_html(get_theme_mod('hero_heading', 'Transform Your Team with Expert Custom Apparel Design')); ?>
            </h2>
            
            <p class="text-lg mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
                <?php echo esc_html(get_theme_mod('hero_description', 'From concept to creation, our expert designers bring your vision to life with premium materials, cutting-edge sublimation technology, and unlimited design possibilities. Join thousands of teams who trust GameBreaker for their custom uniform needs.')); ?>
            </p>
            
            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="<?php echo home_url('/request-design/'); ?>" class="btn-primary text-lg px-8 py-4 rounded-lg">
                    Request a Free Custom Uniform Design
                </a>
                <a href="<?php echo home_url('/quote/'); ?>" class="btn-secondary text-lg px-8 py-4 rounded-lg text-white border-white hover:bg-white hover:text-gray-900">
                    Get a Free Quote
                </a>
            </div>
            
        </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div class="animate-bounce">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
    </div>
    
</section>