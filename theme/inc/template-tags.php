<?php
/**
 * Custom template tags for this theme
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package WP_Cloud_Dashboard
 */

 if ( ! function_exists( 'wpcloud_show_logo' ) ) {
	function wpcloud_show_logo() {
		if ( has_custom_logo() ) {
			the_custom_logo();
		} else {
			$home_link = esc_url( home_url( '/' ) );
			$name = get_bloginfo( 'name' );
			$default_logo = get_template_directory_uri() . '/assets/wpcloud.svg';
			printf( '<a href="%s" rel="home"><img src="%s" alt="%s" /></a>', $home_link, $default_logo, $name ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
 	}
}

if ( ! function_exists( 'wpcloud_dashboard_list_site_card' ) ) :
	/**
	 * Prints HTML with meta information for the current post-date/time.
	 */
	function wpcloud_dashboard_list_site_card() {
		$site_url = get_the_title();
		$site_name = get_the_title();
		$view_url = get_the_permalink();
		$site_name = get_post_meta( get_the_ID(), 'name', true );

		if ( empty( $site_name ) ) {
			$site_name = $site_url;
		}

		// @TODO get real site thumbnail
		$site_thumbnail = get_theme_file_uri( '/assets/Gravatar_filled_' . get_the_ID() % 5 . '.png' );

		$ex_link = get_theme_file_uri( '/assets/external-link.svg' );

		$site_card = <<<SITE
		<div class="site-card">
			<img src="$site_thumbnail" />
			<h2 class="site-title">
				<a href="$site_url">$site_name</a>
			</h2>
			<h3 class="site-url">
				<a href="https://$site_url" target="_blank"><span>$site_url</span><img src="$ex_link"/></a>
			</h3>
		</div>
SITE;

		echo $site_card; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
endif;

if ( ! function_exists( 'wpcloud_dashboard_list_owner' ) ) :
	/**
	 * Prints HTML with meta information for the current post-date/time.
	 */
	function wpcloud_dashboard_list_owner() {
		$owner = get_the_author_meta( 'user_login' );
		$link = get_edit_user_link( get_the_author_meta( 'ID' ) );

		echo '<span class="site-owner"><a href=" ' . $link . ' ">' . $owner . '</a></span>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
endif;

if ( ! function_exists( 'wpcloud_dashboard_site_status' ) ) :
	/**
	 * Prints HTML with meta information for the current post-date/time.
	 */
	function wpcloud_dashboard_list_status() {
		$status = get_post_status() === 'publish' ? 'Live' : 'Provisioning';

		echo '<span class="site-status">' . $status . '</span>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
endif;

if ( ! function_exists( 'wpcloud_dashboard_performance_excerpt' ) ) :
	/**
	 * Prints HTML with meta information for the current post-date/time.
	 */
	function wpcloud_dashboard_list_performance() {

		if ( get_post_status() !== 'publish' ) {
			echo '<span class="wpcloud-performance"><span>–</span></span>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			return;
		}

		// @TODO: get real performance data
		$mobile = rand( 80, 100 );
		$mobile_trend = rand( -1, 2 ) > 0 ? 'up' : 'down';
		$mobile_icon = get_theme_file_uri( '/assets/phone_android_24px.svg' );
		$mobile_trend_icon = get_theme_file_uri( '/assets/trending_' . $mobile_trend . '_24px.svg' );

		$desktop = rand( 80, 100 );
		$desktop_trend = rand( -1, 2 ) > 0 ? 'up' : 'down';
		$desktop_icon = get_theme_file_uri( '/assets/laptop_24px.svg' );
		$desktop_trend_icon = get_theme_file_uri( '/assets/trending_' . $desktop_trend . '_24px.svg' );

		$perf = <<<PERF
		<span class="wpcloud-performance">
			<span class="wpcloud-performance-mobile">
				<img src="$mobile_icon" alt="mobile-trends" />
				<span> $mobile </span>
				<img src="$mobile_trend_icon" alt="trending $mobile_trend"/>
			</span>
			<span class="wpcloud-performance-desktop">
				<img src="$desktop_icon" alt="desktop-trends" />
				<span> $desktop </span>
				<img src="$desktop_trend_icon" alt="trending $desktop_trend"/>
			</span>
		</span>

		PERF;

		echo $perf; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
endif;

if ( ! function_exists( 'wpcloud_dashboard_list_ip_addresses' ) ) :
	/**
	 * Prints HTML with meta information for the current post-date/time.
	 */
	function wpcloud_dashboard_list_ip_addresses($site_details = array()) {
		$ip_addresses =  $site_details[ 'ip_addresses' ] ?? array( '–' );

		echo '<span class="ip-addresses">' . implode('<br />', $ip_addresses ) . '</span>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
endif;

if ( ! function_exists( 'wpcloud_dashboard_wp_admin_button' ) ) :
	/**
	 * Prints HTML with meta information for the current post-date/time.
	 */
	function wpcloud_dashboard_wp_admin_button() {

		$wp_icon = get_theme_file_uri( '/assets/wordpress.svg' );
		$ex_link = get_theme_file_uri( '/assets/external-link.svg' );
		echo '<a class="wpcloud-list-wpadmin-button" target="_blank" href="https://' . get_the_title() . '/wp-admin" class="button"><img src="'. $wp_icon . '" /><span>WP Admin</span><img src="' . $ex_link . '"/></a>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
endif;

if ( ! function_exists( 'wpcloud_dashboard_list_is_favorite' ) ) :
	/**
	 * Prints HTML with meta information for the current post-date/time.
	 */
	function wpcloud_dashboard_list_is_favorite() {
		// @TODO: get real favorite data
		$is_favorite = rand( -2, 1 ) > 0;

		$classnames = $is_favorite ? ' is-favorite' : '';
		echo '<span class="wpcloud-list-favorite ' . $classnames  . '"></span>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
endif;

if ( ! function_exists( 'wpcloud_dashboard_list_php_version' ) ) :
	/**
	 * Prints HTML with meta information for the current post-date/time.
	 */
	function wpcloud_dashboard_list_php_version( $site_details ) {
		$php_version = $site_details['php_version'] ?? '–';

		echo '<span class="php-version">' . $php_version . '</span>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
endif;

if ( ! function_exists( 'wpcloud_dashboard_list_datacenter' ) ) :
	/**
	 * Prints HTML with meta information for the current post-date/time.
	 */
	function wpcloud_dashboard_list_datacenter( $site_details ) {
		$data_center = $site_details['datacenter'] ?? '–';

		echo '<span class="data-center">' . $data_center . '</span>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
endif;

if ( ! function_exists( 'wpcloud_dashboard_posted_on' ) ) :
	/**
	 * Prints HTML with meta information for the current post-date/time.
	 */
	function wpcloud_dashboard_list_created_on() {
		$time_string = '<time class="entry-date created" datetime="%1$s">%2$s</time>';
		$time_string = sprintf(
			$time_string,
			esc_attr( get_the_date( DATE_W3C ) ),
			esc_html( get_the_date('Y/m/d') ),
		);
		echo '<span class="posted-on">' . $time_string . '</span>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

	}
endif;

if ( ! function_exists( 'wpcloud_dashboard_posted_by' ) ) :
	/**
	 * Prints HTML with meta information for the current author.
	 */
	function wpcloud_dashboard_posted_by() {
		$byline = sprintf(
			/* translators: %s: post author. */
			esc_html_x( 'by %s', 'post author', 'wpcloud-dashboard' ),
			'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
		);

		echo '<span class="byline"> ' . $byline . '</span>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

	}
endif;

if ( ! function_exists( 'wpcloud_dashboard_entry_footer' ) ) :
	/**
	 * Prints HTML with meta information for the categories, tags and comments.
	 */
	function wpcloud_dashboard_entry_footer() {
		// Hide category and tag text for pages.
		if ( 'post' === get_post_type() ) {
			/* translators: used between list items, there is a space after the comma */
			$categories_list = get_the_category_list( esc_html__( ', ', 'wpcloud-dashboard' ) );
			if ( $categories_list ) {
				/* translators: 1: list of categories. */
				printf( '<span class="cat-links">' . esc_html__( 'Posted in %1$s', 'wpcloud-dashboard' ) . '</span>', $categories_list ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			}

			/* translators: used between list items, there is a space after the comma */
			$tags_list = get_the_tag_list( '', esc_html_x( ', ', 'list item separator', 'wpcloud-dashboard' ) );
			if ( $tags_list ) {
				/* translators: 1: list of tags. */
				printf( '<span class="tags-links">' . esc_html__( 'Tagged %1$s', 'wpcloud-dashboard' ) . '</span>', $tags_list ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			}
		}

		if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
			echo '<span class="comments-link">';
			comments_popup_link(
				sprintf(
					wp_kses(
						/* translators: %s: post title */
						__( 'Leave a Comment<span class="screen-reader-text"> on %s</span>', 'wpcloud-dashboard' ),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					),
					wp_kses_post( get_the_title() )
				)
			);
			echo '</span>';
		}

		edit_post_link(
			sprintf(
				wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers */
					__( 'Edit <span class="screen-reader-text">%s</span>', 'wpcloud-dashboard' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				wp_kses_post( get_the_title() )
			),
			'<span class="edit-link">',
			'</span>'
		);
	}
endif;

if ( ! function_exists( 'wpcloud_dashboard_post_thumbnail' ) ) :
	/**
	 * Displays an optional post thumbnail.
	 *
	 * Wraps the post thumbnail in an anchor element on index views, or a div
	 * element when on single views.
	 */
	function wpcloud_dashboard_post_thumbnail() {
		if ( post_password_required() || is_attachment() || ! has_post_thumbnail() ) {
			return;
		}

		if ( is_singular() ) :
			?>

			<div class="post-thumbnail">
				<?php the_post_thumbnail(); ?>
			</div><!-- .post-thumbnail -->

		<?php else : ?>

			<a class="post-thumbnail" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
				<?php
					the_post_thumbnail(
						'post-thumbnail',
						array(
							'alt' => the_title_attribute(
								array(
									'echo' => false,
								)
							),
						)
					);
				?>
			</a>

			<?php
		endif; // End is_singular().
	}
endif;

if ( ! function_exists( 'wp_body_open' ) ) :
	/**
	 * Shim for sites older than 5.2.
	 *
	 * @link https://core.trac.wordpress.org/ticket/12563
	 */
	function wp_body_open() {
		do_action( 'wp_body_open' );
	}
endif;