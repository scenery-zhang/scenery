<?php
/* 注册名为slider的custom post type  */
function my_post_type_slider() {
	register_post_type( 'slider',
                array( 
				'label' => __('幻灯片'), 
				'singular_label' => __('幻灯片', 'twentyeleven'),
				'_builtin' => false,
				'exclude_from_search' => true, // Exclude from Search Results
				'capability_type' => 'page',
				'public' => true, 
				'show_ui' => true,
				'show_in_nav_menus' => false,
				'rewrite' => array(
					'slug' => 'slide-view',
					'with_front' => FALSE,
				),
				'query_var' => "slide", // This goes to the WP_Query schema
				'menu_icon' => get_bloginfo('stylesheet_directory') . '/slideshow/images/icon_slides.png',
				'supports' => array(
						'title',
						'custom-fields',
						'editor',
            			'thumbnail')
					) 
				);
}

add_action('init', 'my_post_type_slider');

/* 引入nivo slider脚本 */
function load_script() {
	wp_enqueue_script('jquery');	
	wp_enqueue_script('nivo', get_bloginfo('stylesheet_directory').'/slideshow/jquery.nivo.slider.pack.js', array('jquery'), '2.7.1',1,true);
	wp_enqueue_script('nivo-init', get_bloginfo('stylesheet_directory').'/slideshow/nivo-slider-init.js', array('jquery', 'nivo'), '2.7.1',1,true);		
}
add_action('wp_enqueue_scripts', 'load_script');

function load_stylesheet() {
	wp_enqueue_style('nivo-slider',get_bloginfo('stylesheet_directory').'/slideshow/theme1210.css');
}
add_action('wp_print_styles','load_stylesheet');

//设置主题
add_action( 'after_setup_theme', 'my_setup' );

if ( ! function_exists( 'my_setup' ) ):

function my_setup() {

	// This theme uses post thumbnails
	if ( function_exists( 'add_theme_support' ) ) { // Added in 2.9
		add_theme_support( 'post-thumbnails' );
		add_image_size( 'slider-post-thumbnail', 1000, 165, true ); // Slider Thumbnail
	}
}
endif;
?>