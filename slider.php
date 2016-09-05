<?php
//用query_posts获取幻灯片数据
query_posts("post_type=slider&posts_per_page=-1&post_status=publish");

if( have_posts() ):

?>
<div class="slider-wrapper theme-theme1210">

	<!-- 输出幻灯片的图片部分 -->
	<div id="slider" class="nivoSlider">
	
	<?php 
	
  	$posts_counter = 0;
	
 	while ( have_posts() ) : the_post(); 
	
		$posts_counter++;

		$sl_image_url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'slider-post-thumbnail');
		
		if(has_post_thumbnail( $the_ID) ) 
			
			echo "<img src='".$sl_image_url[0]."' alt='".get_the_title()."' title='#sliderCaption".$posts_counter."' />"; 
		
	endwhile;
 
	rewind_posts(); 
	
	?> 
	
	</div>
	
	<!--  输出幻灯片的图片部分 结束 -->
	
	<!--  输出幻灯片文字部分-->
	
	<?php
	
	$posts_counter = 0;
	
	while ( have_posts() ) : the_post(); $posts_counter++;
	
		$custom = get_post_custom($post->ID);
	
	?>
	
	<div id="sliderCaption<?php echo $posts_counter ?>" class="nivo-html-caption">
	
	  <?php the_content(); ?>
	  
	</div>
	
	<?php endwhile; ?>
	
	<!--  输出幻灯片文字部分 结束-->
	
</div>

<!-- 幻灯片结构全部输出 -->

<?php else: ?>

<!-- 用户还没有创建任何幻灯片，输出一些提示信息 -->
<p style=" position:absolute; top:0; left:0; width:988px;padding:5px; border:2px dashed #99FF00; background:#FFFF99; text-align:center;">访问仪表盘->幻灯片添加幻灯片。为获得最佳展示效果，图片尺寸应为1000×165像素<br />
要禁用幻灯片，编辑主题目录下的header.php，删除代码<span style="color:#FF0000">&lt;?php include &quot;slideshow/slider.php&quot; ?&gt;</span></p>

<?php endif; ?>

<?php
/**
  *使用query_posts查询数据，一定要在使用结束后调用wp_reset_query()将全局变量复位
  */
?>
<?php wp_reset_query();?>