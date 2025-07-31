<section class="py-20 bg-gradient-to-br from-primary to-orange-500 text-white">
    <div class="container">
        
        <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-black mb-6">
                Ready to Elevate Your Team's Look?
            </h2>
            <p class="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Join thousands of teams who trust GameBreaker for their custom uniform needs. 
                Get started with a free design consultation today!
            </p>
        </div>

        <!-- Newsletter Signup -->
        <div class="max-w-2xl mx-auto mb-12">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 class="text-2xl font-bold mb-4 text-center">Stay Updated</h3>
                <p class="text-center mb-6 opacity-90">
                    Get design tips, exclusive offers, and new product announcements
                </p>
                
                <form action="<?php echo admin_url('admin-ajax.php'); ?>" method="post" class="newsletter-form">
                    <div class="flex flex-col md:flex-row gap-4">
                        
                        <div class="flex-1">
                            <input type="email" 
                                   name="email" 
                                   placeholder="Enter your email address" 
                                   required
                                   class="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white">
                        </div>
                        
                        <div class="flex-1">
                            <select name="sport" 
                                    class="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white">
                                <option value="">Select your sport</option>
                                <option value="football">Football</option>
                                <option value="basketball">Basketball</option>
                                <option value="baseball">Baseball</option>
                                <option value="soccer">Soccer</option>
                                <option value="hockey">Hockey</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        
                        <button type="submit" 
                                class="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
                            Subscribe
                        </button>
                        
                    </div>
                    
                    <input type="hidden" name="action" value="newsletter_signup">
                    <?php wp_nonce_field('newsletter_signup', 'newsletter_nonce'); ?>
                </form>
            </div>
        </div>

        <!-- Call to Action Buttons -->
        <div class="flex flex-col lg:flex-row gap-8 justify-center items-center">
            
            <div class="text-center lg:text-left lg:flex-1">
                <h3 class="text-2xl font-bold mb-4">Get a Free Quote</h3>
                <p class="text-lg opacity-90 mb-6">
                    Quick and easy pricing for your custom uniform project. 
                    No commitment required.
                </p>
                <a href="<?php echo home_url('/quote/'); ?>" 
                   class="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-block">
                    Get Free Quote
                </a>
            </div>
            
            <div class="hidden lg:block w-px h-32 bg-white/30"></div>
            <div class="lg:hidden w-full h-px bg-white/30"></div>
            
            <div class="text-center lg:text-right lg:flex-1">
                <h3 class="text-2xl font-bold mb-4">Request Custom Design</h3>
                <p class="text-lg opacity-90 mb-6">
                    Work with our expert designers to create the perfect 
                    uniform for your team.
                </p>
                <a href="<?php echo home_url('/request-design/'); ?>" 
                   class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-colors inline-block">
                    Request Free Design
                </a>
            </div>
            
        </div>

        <!-- Contact Information -->
        <div class="text-center mt-16 pt-8 border-t border-white/20">
            <h4 class="text-xl font-bold mb-4">Questions? We're Here to Help!</h4>
            <div class="flex flex-col md:flex-row gap-6 justify-center items-center text-lg">
                <a href="tel:<?php echo esc_attr(str_replace(array(' ', '-', '(', ')'), '', get_theme_mod('contact_phone', '1-800-GAMEBREAKER'))); ?>" 
                   class="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                    <span>📞</span>
                    <span><?php echo esc_html(get_theme_mod('contact_phone', '1-800-GAMEBREAKER')); ?></span>
                </a>
                <a href="mailto:<?php echo esc_attr(get_theme_mod('contact_email', 'info@gamebreaker.com')); ?>" 
                   class="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                    <span>✉️</span>
                    <span><?php echo esc_html(get_theme_mod('contact_email', 'info@gamebreaker.com')); ?></span>
                </a>
            </div>
        </div>
        
    </div>
</section>

<script>
// Newsletter signup handling
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Subscribing...';
            submitButton.disabled = true;
            
            fetch('<?php echo admin_url("admin-ajax.php"); ?>', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Thank you for subscribing! Check your email for confirmation.');
                    this.reset();
                } else {
                    alert('Sorry, there was an error. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Sorry, there was an error. Please try again.');
            })
            .finally(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
        });
    }
});
</script>