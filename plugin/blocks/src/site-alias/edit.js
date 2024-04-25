/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { useMemo } from '@wordpress/element';

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

	// @TODO: Make sure the required fields are not mutable.
	const template = useMemo(
		() => [
			[
				'core/group',
				{},
				[
					[
						'core/heading',
						{
							level: 3,
							content: __( 'Domains' ),
							className: 'wpcloud-block-site-alias-heading',
						},
					],
					[
						'core/group',
						{
							className: 'wpcloud-block-site-alias-list',
						},
						[
							[
								'wpcloud/site-detail',
								{
									label: __( 'Primary Domain' ),
									name: 'domain_name',
									inline: true,
									hideLabel: true,
									className:
										'wpcloud-block-site-alias-list__item--primary',
								},
							],
							[
								'wpcloud/form',
								{
									ajax: true,
									wpcloudAction: 'site_alias_remove',
									inline: true,
									className:
										'wpcloud-block-site-alias-form-remove',
								},
								[
									[
										'wpcloud/site-detail',
										{
											label: __( 'Domain Alias' ),
											name: 'site_alias',
											inline: true,
											hideLabel: true,
										},
									],
									[
										'wpcloud/button',
										{
											text: __( 'make primary' ),
											type: 'button',
											className:
												'wpcloud-block-site-alias-make-primary',
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
					[
						'wpcloud/form',
						{
							ajax: true,
							wpcloudAction: 'site_alias_add',
							inline: true,
							className: 'wpcloud-block-site-alias-form-add',
						},
						[
							[
								'wpcloud/form-input',
								{
									type: 'text',
									label: __( 'Add a Domain' ),
									name: 'site_alias',
									placeholder: __( 'new.example.com' ),
									required: true,
									inline: true,
								},
							],
							[
								'wpcloud/button',
								{
									text: __( 'Add' ),
									inline: true,
								},
							],
						],
					],
				],
			],
		],
		[]
	);

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		template,
	} );

	return <div { ...innerBlocksProps } className="wpcloud-block-site-alias" />;
}