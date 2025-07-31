<section class="py-20 bg-white">
    <div class="container">
        
        <div class="text-center mb-16">
            <h2 class="text-4xl font-black mb-6">Why Choose GameBreaker?</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional quality, unmatched customization, and outstanding service that sets your team apart
            </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <?php
            $features = array(
                array(
                    'icon' => '🎨',
                    'title' => 'Unlimited Possibilities',
                    'description' => 'Complete creative freedom with our advanced design tools and expert team support'
                ),
                array(
                    'icon' => '💎',
                    'title' => 'Premium Materials',
                    'description' => 'Only the finest fabrics and materials for durability, comfort, and performance'
                ),
                array(
                    'icon' => '🌈',
                    'title' => 'Vibrant Sublimation',
                    'description' => 'State-of-the-art sublimation printing for colors that never fade or crack'
                ),
                array(
                    'icon' => '⚡',
                    'title' => 'Fast Turnaround',
                    'description' => 'Quick production times without compromising on quality or attention to detail'
                ),
                array(
                    'icon' => '🎯',
                    'title' => 'Fully Customizable',
                    'description' => 'Every element can be personalized - colors, logos, names, numbers, and more'
                ),
                array(
                    'icon' => '💰',
                    'title' => 'Competitive Pricing',
                    'description' => 'Professional quality at prices that work for teams of all sizes and budgets'
                ),
                array(
                    'icon' => '🏆',
                    'title' => 'Expert Designers',
                    'description' => 'Professional design team with years of experience in sports apparel'
                ),
                array(
                    'icon' => '📞',
                    'title' => '24/7 Support',
                    'description' => 'Dedicated customer service team ready to help with any questions or concerns'
                )
            );

            foreach ($features as $index => $feature) :
                // Show only 4 features on smaller screens, all 8 on larger screens
                $visibility_class = $index >= 4 ? 'hidden lg:block' : '';
            ?>
                
                <div class="feature-card text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 <?php echo $visibility_class; ?>">
                    
                    <div class="feature-icon text-5xl mb-4">
                        <?php echo $feature['icon']; ?>
                    </div>
                    
                    <h3 class="text-xl font-bold mb-3 text-gray-900">
                        <?php echo esc_html($feature['title']); ?>
                    </h3>
                    
                    <p class="text-gray-600 leading-relaxed">
                        <?php echo esc_html($feature['description']); ?>
                    </p>
                    
                </div>
                
            <?php endforeach; ?>
            
        </div>

        <!-- Call to Action -->
        <div class="text-center mt-16">
            <h3 class="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p class="text-gray-600 mb-8">Join thousands of satisfied teams who trust GameBreaker for their custom uniforms</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="<?php echo home_url('/request-design/'); ?>" class="btn-primary">
                    Request Free Design
                </a>
                <a href="<?php echo home_url('/quote/'); ?>" class="btn-secondary">
                    Get Instant Quote
                </a>
            </div>
        </div>
        
    </div>
</section>