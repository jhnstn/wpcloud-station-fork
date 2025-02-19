/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';

/*
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	const blockProps = useBlockProps();

	const template = [
		[
			'core/group',
			{
				className: 'wpcloud-block-site-ssh-user-list',
			},
			[
				[
					'wpcloud/form',
					{
						ajax: true,
						wpcloudAction: 'site_ssh_user_remove',
						inline: true,
						className: 'wpcloud-block-site-ssh-user--remove',
					},
					[
						[
							'wpcloud/site-detail',
							{
								label: __( 'SSH User' ),
								name: 'ssh_user',
								inline: true,
								hideLabel: true,
							},
						],
						[
							'wpcloud/button',
							{
								text: __( 'remove' ),
								icon: 'trash',
							},
						],
					],
				],
			],
		],
	];

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		template,
	} );

	return (
		<div className="wpcloud-block-site-ssh-user-list--wrapper">
			<div
				{ ...innerBlocksProps }
				className={ classNames(
					innerBlocksProps.className,
					'wpcloud-block-site-ssh-user-list'
				) }
			/>
		</div>
	);
}
