<section class="py-20 bg-gray-900 text-white overflow-hidden">
    
    <div class="container mb-12">
        <div class="flex items-center justify-between">
            <div>
                <h2 class="text-4xl font-black mb-4">Trending Products</h2>
                <p class="text-xl text-gray-300">Popular choices from teams across the country</p>
            </div>
            <a href="<?php echo home_url('/products/'); ?>" class="btn-primary hidden md:inline-block">
                View All
            </a>
        </div>
    </div>

    <!-- Moving Products Strip -->
    <div class="relative">
        <div class="flex animate-slide-right space-x-8" style="width: 200%;">
            
            <?php
            // Get trending products
            $trending_products = new WP_Query(array(
                'post_type' => 'product',
                'posts_per_page' => 10,
                'meta_key' => '_product_sales',
                'orderby' => 'meta_value_num',
                'order' => 'DESC'
            ));

            // Default products if no custom products exist
            $default_products = array(
                array(
                    'name' => 'Elite Basketball Jersey',
                    'price' => '54.99',
                    'rating' => '4.9',
                    'badge' => 'Trending',
                    'image' => get_template_directory_uri() . '/assets/jersey-basketball.jpg'
                ),
                array(
                    'name' => 'Pro Football Jersey',
                    'price' => '48.99',
                    'rating' => '4.8',
                    'badge' => 'Best Seller',
                    'image' => get_template_directory_uri() . '/assets/jersey-football.jpg'
                ),
                array(
                    'name' => 'Soccer Team Kit',
                    'price' => '52.99',
                    'rating' => '4.7',
                    'badge' => 'Popular',
                    'image' => get_template_directory_uri() . '/assets/jersey-soccer.jpg'
                ),
                array(
                    'name' => 'Athletic Training Pants',
                    'price' => '34.99',
                    'rating' => '4.6',
                    'badge' => 'New',
                    'image' => get_template_directory_uri() . '/assets/pants-athletic.jpg'
                )
            );

            // Duplicate products for seamless loop
            $all_products = array_merge($default_products, $default_products);

            foreach ($all_products as $product) :
            ?>
                
                <div class="flex-shrink-0 w-80 bg-white text-gray-900 rounded-lg overflow-hidden shadow-lg">
                    
                    <div class="relative">
                        <img src="<?php echo esc_url($product['image']); ?>" 
                             alt="<?php echo esc_attr($product['name']); ?>"
                             class="w-full h-48 object-cover">
                        
                        <span class="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                            <?php echo esc_html($product['badge']); ?>
                        </span>
                        
                        <button class="add-to-cart absolute top-4 right-4 bg-white text-primary p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors">
                            🛒
                        </button>
                    </div>
                    
                    <div class="p-6">
                        <h3 class="text-lg font-bold mb-2"><?php echo esc_html($product['name']); ?></h3>
                        
                        <div class="flex items-center mb-3">
                            <div class="flex text-yellow-400 mr-2">
                                <?php echo gamebreaker_star_rating($product['rating']); ?>
                            </div>
                            <span class="text-sm text-gray-500">(<?php echo esc_html($product['rating']); ?>)</span>
                        </div>
                        
                        <div class="flex items-center justify-between">
                            <span class="text-xl font-bold text-primary">$<?php echo esc_html($product['price']); ?></span>
                            <a href="<?php echo home_url('/customize/'); ?>" class="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors">
                                Customize
                            </a>
                        </div>
                    </div>
                    
                </div>
                
            <?php endforeach; ?>
            
        </div>
    </div>

    <!-- Bottom CTA -->
    <div class="container mt-12 text-center">
        <div class="bg-gradient-to-r from-primary to-orange-500 rounded-lg p-8">
            <h3 class="text-2xl font-bold mb-4">Don't See What You're Looking For?</h3>
            <p class="text-lg mb-6 opacity-90">
                Our design team can create custom uniforms for any sport or activity. Let us bring your vision to life!
            </p>
            <a href="<?php echo home_url('/request-design/'); ?>" class="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Request Custom Design
            </a>
        </div>
    </div>
    
</section>