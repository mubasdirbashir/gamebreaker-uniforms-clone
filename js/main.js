/**
 * GameBreaker Theme JavaScript
 */

(function($) {
    'use strict';

    // Document Ready
    $(document).ready(function() {
        
        // Mobile Menu Toggle
        $('.mobile-menu-toggle').on('click', function() {
            $('.main-navigation').toggleClass('mobile-open');
            $(this).toggleClass('active');
        });

        // Smooth Scrolling for Anchor Links
        $('a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 100
                    }, 1000);
                    return false;
                }
            }
        });

        // Add to Cart AJAX
        $(document).on('click', '.add-to-cart', function(e) {
            e.preventDefault();
            
            var button = $(this);
            var productId = button.data('product-id') || 0;
            var originalText = button.html();
            
            // Show loading state
            button.html('🔄').prop('disabled', true);
            
            $.ajax({
                url: gamebreaker_ajax.ajax_url,
                type: 'POST',
                data: {
                    action: 'add_to_cart',
                    product_id: productId,
                    nonce: gamebreaker_ajax.nonce
                },
                success: function(response) {
                    if (response.success) {
                        // Update cart count
                        var cartCount = $('.cart-count');
                        var currentCount = parseInt(cartCount.text()) || 0;
                        cartCount.text(currentCount + 1);
                        
                        // Show success message
                        showNotification('Product added to cart!', 'success');
                        
                        // Reset button
                        button.html('✓ Added').addClass('added');
                        setTimeout(function() {
                            button.html(originalText).removeClass('added').prop('disabled', false);
                        }, 2000);
                    } else {
                        showNotification('Error adding product to cart.', 'error');
                        button.html(originalText).prop('disabled', false);
                    }
                },
                error: function() {
                    showNotification('Error adding product to cart.', 'error');
                    button.html(originalText).prop('disabled', false);
                }
            });
        });

        // Newsletter Signup
        $('.newsletter-form').on('submit', function(e) {
            e.preventDefault();
            
            var form = $(this);
            var submitButton = form.find('button[type="submit"]');
            var originalText = submitButton.text();
            
            submitButton.text('Subscribing...').prop('disabled', true);
            
            $.ajax({
                url: gamebreaker_ajax.ajax_url,
                type: 'POST',
                data: form.serialize(),
                success: function(response) {
                    if (response.success) {
                        showNotification('Thank you for subscribing!', 'success');
                        form[0].reset();
                    } else {
                        showNotification('Error subscribing. Please try again.', 'error');
                    }
                },
                error: function() {
                    showNotification('Error subscribing. Please try again.', 'error');
                },
                complete: function() {
                    submitButton.text(originalText).prop('disabled', false);
                }
            });
        });

        // Search Enhancement
        $('.header-search input').on('focus', function() {
            $(this).parent().addClass('focused');
        }).on('blur', function() {
            $(this).parent().removeClass('focused');
        });

        // Scroll to Top Button
        var scrollToTopButton = $('<button class="scroll-to-top" title="Back to Top">↑</button>');
        $('body').append(scrollToTopButton);
        
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 300) {
                scrollToTopButton.fadeIn();
            } else {
                scrollToTopButton.fadeOut();
            }
        });
        
        scrollToTopButton.on('click', function() {
            $('html, body').animate({scrollTop: 0}, 600);
        });

        // Image Lazy Loading Fallback
        $('img').on('error', function() {
            var defaultImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"%3E%3Crect width="300" height="200" fill="%23f0f0f0"/%3E%3Ctext x="150" y="100" text-anchor="middle" dy=".3em" font-family="Arial" font-size="14" fill="%23999"%3EImage not found%3C/text%3E%3C/svg%3E';
            $(this).attr('src', defaultImage);
        });

        // Product Filter (if on products page)
        $('.product-filter').on('change', function() {
            var filterValue = $(this).val();
            var productGrid = $('.product-grid');
            
            if (filterValue === 'all') {
                productGrid.find('.product-card').show();
            } else {
                productGrid.find('.product-card').hide();
                productGrid.find('.product-card[data-category="' + filterValue + '"]').show();
            }
        });

        // Initialize tooltips if available
        if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });
        }

    });

    // Notification System
    function showNotification(message, type) {
        var notification = $('<div class="notification notification-' + type + '">' + message + '</div>');
        
        if ($('.notification-container').length === 0) {
            $('body').append('<div class="notification-container"></div>');
        }
        
        $('.notification-container').append(notification);
        
        setTimeout(function() {
            notification.addClass('show');
        }, 100);
        
        setTimeout(function() {
            notification.removeClass('show');
            setTimeout(function() {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Intersection Observer for Animations
    if ('IntersectionObserver' in window) {
        var animationObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe elements for animation
        document.querySelectorAll('.product-card, .feature-card, .blog-card').forEach(function(el) {
            animationObserver.observe(el);
        });
    }

    // Window Load Event
    $(window).on('load', function() {
        // Hide loading spinner if present
        $('.loading-spinner').fadeOut();
        
        // Initialize any additional plugins
        initializePlugins();
    });

    // Initialize Additional Plugins
    function initializePlugins() {
        // Add any third-party plugin initialization here
        console.log('GameBreaker Theme Loaded Successfully');
    }

})(jQuery);

// Vanilla JS for better performance on certain features
document.addEventListener('DOMContentLoaded', function() {
    
    // Preload critical images
    var criticalImages = [
        '/assets/sports-collage-hero.jpg',
        '/assets/jersey-football.jpg',
        '/assets/jersey-basketball.jpg'
    ];
    
    criticalImages.forEach(function(src) {
        var img = new Image();
        img.src = src;
    });
    
    // Add smooth reveal animation to elements
    var revealElements = document.querySelectorAll('.product-card, .feature-card');
    revealElements.forEach(function(el, index) {
        el.style.animationDelay = (index * 0.1) + 's';
        el.classList.add('reveal-animation');
    });
});

// Service Worker Registration (if available)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful');
        }, function(err) {
            console.log('ServiceWorker registration failed');
        });
    });
}