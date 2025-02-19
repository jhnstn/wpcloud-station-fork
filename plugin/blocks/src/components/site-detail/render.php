<?php
/*
 * The site detail block is only rendered when the current post is a `wpcloud_site` post.
 * If we're not on a `wpcloud_site` post, we should return early.
 * But we can still render the block in demo mode.
 */
if ( ! is_wpcloud_site_post() ) {
	return;
}

/* Return early if the user is not an admin and the block is admin only */
if ( $attributes[ 'adminOnly' ] && ! current_user_can( 'manage_options' ) ) {
	return;
}
$name = $attributes[ 'name' ] ?? '';
$detail = wpcloud_get_site_detail( get_the_ID(), $name ) ?? '';
if ( is_wp_error( $detail ) ) {
	error_log( 'WP Cloud Site Detail Block: ' . $detail->get_error_message() );
	return '' ;
}

if ( $name === 'domain_name' || $name === 'site_url') {
	$detail = "<a href='https://$detail' >$detail <span class='dashicons dashicons-external'></a>";
}

if ( is_array( $detail ) ) {
	$list = "<ul class='wpcloud_block_site_detail__value__list'>";
	foreach ( $detail as $key => $value ) {
		$list .= "<li>$value</li>";
	}
	$list .= "</ul>";
	$detail = $list;
}

if (str_starts_with($detail, 'http')) {
	$detail = sprintf('<a href="%s" ><span class="dashicons dashicons-external"></span></a>', $detail, $detail);
}

// match the placeholder which is in the last set of curly braces  { The placeholder }
$regex = '/\{[^{}]*\}(?=[^{}]*$)/';

$detail = preg_replace($regex, $detail, $content);


$layout = $block->context['wpcloud/layout'] ?? '';

if ('table' === $layout) {
	$wrapper = 'td';
	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => 'wpcloud-block-table-cell' ) );
} else {
	$wrapper = 'div';
	$wrapper_attributes = get_block_wrapper_attributes();
}

printf('<%1$s %2$s>%3$s</%1$s>', $wrapper, $wrapper_attributes, $detail);