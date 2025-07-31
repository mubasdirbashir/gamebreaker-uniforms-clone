<section class="py-12 bg-gray-50">
    <div class="container">
        
        <!-- Top Banners -->
        <div class="grid md:grid-cols-2 gap-8 mb-12">
            
            <!-- Sale Banner -->
            <div class="relative rounded-lg overflow-hidden shadow-lg">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/banner-sale.jpg" 
                     alt="Summer Sale Banner" 
                     class="w-full h-64 object-cover">
                <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div class="text-center text-white">
                        <h3 class="text-3xl font-black mb-2">SUMMER SALE</h3>
                        <p class="text-lg mb-4">Up to 30% off selected items</p>
                        <a href="<?php echo home_url('/products/?sale=true'); ?>" class="btn-primary">
                            Shop Sale Items
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- New Arrivals Banner -->
            <div class="relative rounded-lg overflow-hidden shadow-lg">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/banner-new.jpg" 
                     alt="New Arrivals Banner" 
                     class="w-full h-64 object-cover">
                <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div class="text-center text-white">
                        <h3 class="text-3xl font-black mb-2">NEW ARRIVALS</h3>
                        <p class="text-lg mb-4">Latest collection now available</p>
                        <a href="<?php echo home_url('/products/?new=true'); ?>" class="btn-secondary text-white border-white hover:bg-white hover:text-gray-900">
                            Explore New Styles
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
        
        <!-- Full Width Promotional Banner -->
        <div class="bg-gradient-to-r from-primary to-orange-500 rounded-lg p-8 md:p-12 text-center text-white">
            <h2 class="text-3xl md:text-4xl font-black mb-4">
                FREE Design Consultation Available!
            </h2>
            <p class="text-lg md:text-xl mb-6 opacity-90">
                Work with our expert designers to create the perfect custom uniform for your team. 
                No obligation, completely free consultation.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="<?php echo home_url('/request-design/'); ?>" class="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                    Request Free Design
                </a>
                <div class="flex items-center gap-2 text-lg">
                    <span>📞</span>
                    <span><?php echo esc_html(get_theme_mod('contact_phone', '1-800-GAMEBREAKER')); ?></span>
                </div>
            </div>
        </div>
        
    </div>
</section>