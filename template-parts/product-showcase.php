<section class="py-20 bg-white">
    <div class="container">
        
        <div class="text-center mb-12">
            <h2 class="text-4xl font-black mb-4">Featured Products</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our premium collection of custom sports uniforms and team apparel
            </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <?php
            // Query for featured products
            $featured_products = new WP_Query(array(
                'post_type' => 'product',
                'posts_per_page' => 6,
                'meta_query' => array(
                    array(
                        'key' => '_featured_product',
                        'value' => 'yes',
                        'compare' => '='
                    )
                )
            ));

            // If no featured products, show regular products
            if (!$featured_products->have_posts()) {
                $featured_products = new WP_Query(array(
                    'post_type' => 'product',
                    'posts_per_page' => 6
                ));
            }

            if ($featured_products->have_posts()) :
                while ($featured_products->have_posts()) : $featured_products->the_post();
                    $price = get_post_meta(get_the_ID(), '_product_price', true);
                    $rating = get_post_meta(get_the_ID(), '_product_rating', true);
                    $badge = get_post_meta(get_the_ID(), '_product_badge', true);
            ?>
                
                <div class="product-card bg-white rounded-lg shadow-lg overflow-hidden group">
                    
                    <div class="relative overflow-hidden">
                        <?php if (has_post_thumbnail()) : ?>
                            <?php the_post_thumbnail('product-thumb', array('class' => 'w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300')); ?>
                        <?php else : ?>
                            <div class="w-full h-64 bg-gray-200 flex items-center justify-center">
                                <span class="text-gray-500">No Image</span>
                            </div>
                        <?php endif; ?>
                        
                        <?php if ($badge) : ?>
                            <span class="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                                <?php echo esc_html($badge); ?>
                            </span>
                        <?php endif; ?>
                        
                        <button class="add-to-cart absolute top-4 right-4 bg-white text-primary p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-white"
                                data-product-id="<?php the_ID(); ?>"
                                title="Add to Cart">
                            🛒
                        </button>
                    </div>
                    
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2"><?php the_title(); ?></h3>
                        
                        <p class="text-gray-600 mb-4 line-clamp-2">
                            <?php echo wp_trim_words(get_the_excerpt(), 15); ?>
                        </p>
                        
                        <?php if ($rating) : ?>
                            <div class="flex items-center mb-3">
                                <div class="flex text-yellow-400 mr-2">
                                    <?php echo gamebreaker_star_rating($rating); ?>
                                </div>
                                <span class="text-sm text-gray-500">(<?php echo esc_html($rating); ?>)</span>
                            </div>
                        <?php endif; ?>
                        
                        <div class="flex items-center justify-between">
                            <?php if ($price) : ?>
                                <span class="text-2xl font-bold text-primary">
                                    $<?php echo esc_html($price); ?>
                                </span>
                            <?php endif; ?>
                            
                            <div class="flex gap-2">
                                <a href="<?php echo home_url('/customize/?product=' . get_the_ID()); ?>" 
                                   class="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors">
                                    Customize Now
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            <?php 
                endwhile;
                wp_reset_postdata();
            else :
                // Show default products if no custom products exist
                $default_products = array(
                    array(
                        'name' => 'Custom Football Jersey',
                        'price' => '45.99',
                        'rating' => '4.8',
                        'badge' => 'Best Seller',
                        'image' => get_template_directory_uri() . '/assets/jersey-football.jpg'
                    ),
                    array(
                        'name' => 'Basketball Team Uniform',
                        'price' => '52.99',
                        'rating' => '4.9',
                        'badge' => 'Premium',
                        'image' => get_template_directory_uri() . '/assets/jersey-basketball.jpg'
                    ),
                    array(
                        'name' => 'Soccer Team Kit',
                        'price' => '48.99',
                        'rating' => '4.7',
                        'badge' => 'Popular',
                        'image' => get_template_directory_uri() . '/assets/jersey-soccer.jpg'
                    )
                );
                
                foreach ($default_products as $product) :
            ?>
                
                <div class="product-card bg-white rounded-lg shadow-lg overflow-hidden group">
                    <div class="relative overflow-hidden">
                        <img src="<?php echo esc_url($product['image']); ?>" 
                             alt="<?php echo esc_attr($product['name']); ?>"
                             class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300">
                        
                        <span class="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                            <?php echo esc_html($product['badge']); ?>
                        </span>
                        
                        <button class="add-to-cart absolute top-4 right-4 bg-white text-primary p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-white">
                            🛒
                        </button>
                    </div>
                    
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2"><?php echo esc_html($product['name']); ?></h3>
                        <p class="text-gray-600 mb-4">High-quality custom uniform with premium materials and expert craftsmanship.</p>
                        
                        <div class="flex items-center mb-3">
                            <div class="flex text-yellow-400 mr-2">
                                <?php echo gamebreaker_star_rating($product['rating']); ?>
                            </div>
                            <span class="text-sm text-gray-500">(<?php echo esc_html($product['rating']); ?>)</span>
                        </div>
                        
                        <div class="flex items-center justify-between">
                            <span class="text-2xl font-bold text-primary">$<?php echo esc_html($product['price']); ?></span>
                            <a href="<?php echo home_url('/customize/'); ?>" class="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors">
                                Customize Now
                            </a>
                        </div>
                    </div>
                </div>
                
            <?php endforeach; ?>
            <?php endif; ?>
            
        </div>
        
        <div class="text-center mt-12">
            <a href="<?php echo home_url('/products/'); ?>" class="btn-primary text-lg px-8 py-4 rounded-lg">
                View All Products
            </a>
        </div>
        
    </div>
</section>