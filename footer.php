    <footer id="colophon" class="site-footer bg-gamebreaker-dark text-white py-12">
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                <!-- Company Info -->
                <div class="footer-column">
                    <h3 class="text-2xl font-black text-primary mb-4">
                        GAME<span class="text-white">BREAKER</span>
                    </h3>
                    <p class="text-white/80 mb-4">
                        Creating custom sports uniforms and team apparel with expert design and premium materials.
                    </p>
                    
                    <!-- Social Media Links -->
                    <div class="social-links flex gap-4">
                        <?php 
                        $social_links = gamebreaker_get_social_links();
                        $social_icons = array(
                            'facebook' => '📘',
                            'twitter' => '🐦', 
                            'instagram' => '📷',
                            'youtube' => '📺'
                        );
                        
                        foreach ($social_links as $network => $url) : 
                            $icon = isset($social_icons[$network]) ? $social_icons[$network] : '🔗';
                        ?>
                            <a href="<?php echo esc_url($url); ?>" 
                               class="text-white hover:text-primary text-xl" 
                               target="_blank" 
                               rel="noopener"
                               aria-label="<?php echo ucfirst($network); ?>">
                                <?php echo $icon; ?>
                            </a>
                        <?php endforeach; ?>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="footer-column">
                    <h4 class="font-bold mb-4">Quick Links</h4>
                    <ul class="space-y-2 text-white/80">
                        <li><a href="<?php echo home_url('/products/'); ?>" class="hover:text-primary transition-colors">All Products</a></li>
                        <li><a href="<?php echo home_url('/customize/'); ?>" class="hover:text-primary transition-colors">Custom Design</a></li>
                        <li><a href="<?php echo home_url('/quote/'); ?>" class="hover:text-primary transition-colors">Get Quote</a></li>
                        <li><a href="<?php echo home_url('/blog/'); ?>" class="hover:text-primary transition-colors">Blog</a></li>
                        <li><a href="<?php echo home_url('/checkout/'); ?>" class="hover:text-primary transition-colors">Cart</a></li>
                    </ul>
                </div>

                <!-- Sports Categories -->
                <div class="footer-column">
                    <h4 class="font-bold mb-4">Sports</h4>
                    <ul class="space-y-2 text-white/80">
                        <li><a href="<?php echo home_url('/collection/football/'); ?>" class="hover:text-primary transition-colors">Football</a></li>
                        <li><a href="<?php echo home_url('/collection/basketball/'); ?>" class="hover:text-primary transition-colors">Basketball</a></li>
                        <li><a href="<?php echo home_url('/collection/baseball/'); ?>" class="hover:text-primary transition-colors">Baseball</a></li>
                        <li><a href="<?php echo home_url('/collection/soccer/'); ?>" class="hover:text-primary transition-colors">Soccer</a></li>
                        <li><a href="<?php echo home_url('/collection/hockey/'); ?>" class="hover:text-primary transition-colors">Hockey</a></li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div class="footer-column">
                    <h4 class="font-bold mb-4">Contact Info</h4>
                    <div class="space-y-2 text-white/80">
                        <p><?php echo esc_html(get_theme_mod('contact_phone', '1-800-GAMEBREAKER')); ?></p>
                        <p><?php echo esc_html(get_theme_mod('contact_email', 'info@gamebreaker.com')); ?></p>
                        <p>123 Sports Drive<br />Athletic City, AC 12345</p>
                    </div>
                </div>
                
            </div>

            <!-- Footer Bottom -->
            <div class="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved. | 
                   <a href="<?php echo home_url('/privacy-policy/'); ?>" class="hover:text-primary">Privacy Policy</a> | 
                   <a href="<?php echo home_url('/terms-of-service/'); ?>" class="hover:text-primary">Terms of Service</a>
                </p>
            </div>
            
        </div>
    </footer>

</div><!-- #page -->

<?php wp_footer(); ?>

<script>
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navigation = document.querySelector('.main-navigation');
    
    if (mobileToggle && navigation) {
        mobileToggle.addEventListener('click', function() {
            navigation.classList.toggle('mobile-open');
        });
    }
    
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = this.dataset.productId;
            
            // AJAX call to add product to cart
            fetch('<?php echo admin_url("admin-ajax.php"); ?>', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    action: 'add_to_cart',
                    product_id: productId,
                    nonce: '<?php echo wp_create_nonce("gamebreaker_nonce"); ?>'
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Update cart count
                    const cartCount = document.querySelector('.cart-count');
                    if (cartCount) {
                        cartCount.textContent = parseInt(cartCount.textContent) + 1;
                    }
                    
                    // Show success message
                    alert('Product added to cart successfully!');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    });
});
</script>

<style>
/* Mobile Menu Styles */
.mobile-menu-toggle {
    display: flex;
    flex-direction: column;
    width: 24px;
    height: 24px;
    justify-content: space-between;
    background: none;
    border: none;
    cursor: pointer;
}

.hamburger-line {
    width: 100%;
    height: 3px;
    background-color: #333;
    transition: all 0.3s ease;
}

@media (max-width: 767px) {
    .main-navigation {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        z-index: 1000;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .main-navigation.mobile-open {
        display: block;
    }
    
    .main-navigation ul {
        flex-direction: column;
        space-x: 0;
        padding: 1rem;
    }
    
    .main-navigation li {
        margin: 0.5rem 0;
    }
}

/* Star Rating Styles */
.star {
    color: #ddd;
    font-size: 1.2em;
}

.star.filled {
    color: #ffc107;
}
</style>

</body>
</html>