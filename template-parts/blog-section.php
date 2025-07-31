<section class="py-20 bg-white">
    <div class="container">
        
        <div class="text-center mb-12">
            <h2 class="text-4xl font-black mb-4">Latest from Our Blog</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                Expert insights, design tips, and industry news to help your team succeed
            </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
            
            <?php
            // Get latest blog posts
            $blog_posts = new WP_Query(array(
                'post_type' => 'post',
                'posts_per_page' => 3,
                'post_status' => 'publish'
            ));

            if ($blog_posts->have_posts()) :
                $post_count = 0;
                while ($blog_posts->have_posts()) : $blog_posts->the_post();
                    $post_count++;
                    $is_featured = ($post_count === 1);
                    $card_class = $is_featured ? 'lg:col-span-2' : '';
            ?>
                
                <article class="blog-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 <?php echo $card_class; ?>">
                    
                    <div class="<?php echo $is_featured ? 'lg:flex' : ''; ?>">
                        
                        <div class="<?php echo $is_featured ? 'lg:w-1/2' : ''; ?>">
                            <?php if (has_post_thumbnail()) : ?>
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('blog-thumb', array('class' => 'w-full h-48 ' . ($is_featured ? 'lg:h-full' : '') . ' object-cover')); ?>
                                </a>
                            <?php else : ?>
                                <div class="w-full h-48 bg-gray-200 flex items-center justify-center">
                                    <span class="text-gray-500">📝</span>
                                </div>
                            <?php endif; ?>
                        </div>
                        
                        <div class="p-6 <?php echo $is_featured ? 'lg:w-1/2 lg:flex lg:flex-col lg:justify-center' : ''; ?>">
                            
                            <div class="flex items-center gap-4 mb-3">
                                <span class="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                    <?php 
                                    $categories = get_the_category();
                                    echo $categories ? esc_html($categories[0]->name) : 'General';
                                    ?>
                                </span>
                                <?php if ($is_featured) : ?>
                                    <span class="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                                        Featured
                                    </span>
                                <?php endif; ?>
                            </div>
                            
                            <div class="text-sm text-gray-500 mb-3">
                                <span>By <?php the_author(); ?></span>
                                <span class="mx-2">•</span>
                                <span><?php echo get_the_date(); ?></span>
                                <span class="mx-2">•</span>
                                <span><?php echo reading_time(); ?> min read</span>
                            </div>
                            
                            <h3 class="<?php echo $is_featured ? 'text-2xl' : 'text-xl'; ?> font-bold mb-3 line-clamp-2">
                                <a href="<?php the_permalink(); ?>" class="text-gray-900 hover:text-primary">
                                    <?php the_title(); ?>
                                </a>
                            </h3>
                            
                            <p class="text-gray-600 mb-4 <?php echo $is_featured ? 'text-lg' : ''; ?> line-clamp-3">
                                <?php echo wp_trim_words(get_the_excerpt(), $is_featured ? 25 : 15); ?>
                            </p>
                            
                            <a href="<?php the_permalink(); ?>" class="inline-flex items-center text-primary font-medium hover:text-primary/80">
                                Read More
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </a>
                            
                        </div>
                        
                    </div>
                    
                </article>
                
            <?php 
                endwhile;
                wp_reset_postdata();
            else :
                // Default blog posts if none exist
                $default_blogs = array(
                    array(
                        'title' => 'The Ultimate Guide to Custom Sports Uniform Design',
                        'excerpt' => 'Discover the key elements that make a sports uniform both functional and visually striking. From color psychology to fabric selection.',
                        'image' => get_template_directory_uri() . '/assets/blog-design-process.jpg',
                        'author' => 'Design Team',
                        'date' => 'March 15, 2024',
                        'category' => 'Design Tips',
                        'featured' => true
                    ),
                    array(
                        'title' => 'How Our Team Ensures Quality in Every Stitch',
                        'excerpt' => 'Behind the scenes look at our quality control process and commitment to excellence in every custom uniform we create.',
                        'image' => get_template_directory_uri() . '/assets/blog-team-action.jpg',
                        'author' => 'Quality Team',
                        'date' => 'March 10, 2024',
                        'category' => 'Behind the Scenes'
                    ),
                    array(
                        'title' => 'Sublimation vs Screen Printing: Which is Right for Your Team?',
                        'excerpt' => 'Understanding the differences between printing methods to make the best choice for your custom uniforms.',
                        'image' => get_template_directory_uri() . '/assets/blog-design-process.jpg',
                        'author' => 'Production Team',
                        'date' => 'March 5, 2024',
                        'category' => 'Education'
                    )
                );

                foreach ($default_blogs as $index => $blog) :
                    $is_featured = isset($blog['featured']) && $blog['featured'];
                    $card_class = $is_featured ? 'lg:col-span-2' : '';
            ?>
                
                <article class="blog-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 <?php echo $card_class; ?>">
                    <div class="<?php echo $is_featured ? 'lg:flex' : ''; ?>">
                        <div class="<?php echo $is_featured ? 'lg:w-1/2' : ''; ?>">
                            <img src="<?php echo esc_url($blog['image']); ?>" 
                                 alt="<?php echo esc_attr($blog['title']); ?>"
                                 class="w-full h-48 <?php echo $is_featured ? 'lg:h-full' : ''; ?> object-cover">
                        </div>
                        <div class="p-6 <?php echo $is_featured ? 'lg:w-1/2 lg:flex lg:flex-col lg:justify-center' : ''; ?>">
                            <div class="flex items-center gap-4 mb-3">
                                <span class="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                    <?php echo esc_html($blog['category']); ?>
                                </span>
                                <?php if ($is_featured) : ?>
                                    <span class="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">Featured</span>
                                <?php endif; ?>
                            </div>
                            <div class="text-sm text-gray-500 mb-3">
                                <span>By <?php echo esc_html($blog['author']); ?></span>
                                <span class="mx-2">•</span>
                                <span><?php echo esc_html($blog['date']); ?></span>
                                <span class="mx-2">•</span>
                                <span>5 min read</span>
                            </div>
                            <h3 class="<?php echo $is_featured ? 'text-2xl' : 'text-xl'; ?> font-bold mb-3">
                                <a href="<?php echo home_url('/blog/'); ?>" class="text-gray-900 hover:text-primary">
                                    <?php echo esc_html($blog['title']); ?>
                                </a>
                            </h3>
                            <p class="text-gray-600 mb-4 <?php echo $is_featured ? 'text-lg' : ''; ?>">
                                <?php echo esc_html($blog['excerpt']); ?>
                            </p>
                            <a href="<?php echo home_url('/blog/'); ?>" class="inline-flex items-center text-primary font-medium hover:text-primary/80">
                                Read More
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>
                
            <?php endforeach; ?>
            <?php endif; ?>
            
        </div>
        
        <div class="text-center mt-12">
            <a href="<?php echo home_url('/blog/'); ?>" class="btn-primary">
                View All Articles
            </a>
        </div>
        
    </div>
</section>

<?php
// Helper function for reading time
if (!function_exists('reading_time')) {
    function reading_time() {
        $content = get_post_field('post_content', get_the_ID());
        $word_count = str_word_count(strip_tags($content));
        $reading_time = ceil($word_count / 200); // Average reading speed
        return max(1, $reading_time); // Minimum 1 minute
    }
}
?>