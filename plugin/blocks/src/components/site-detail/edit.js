/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';

/**
 *
 * Internal dependencies
 */
import DetailSelectControl from '../controls/site/detailSelect';

function SiteDetailBlock( { attributes, setAttributes, className } ) {
	const { label, adminOnly, inline, hideLabel } = attributes;
	const blockProps = useBlockProps();

	const controls = (
		<>
			<InspectorControls>
				<PanelBody label={ __( 'Settings' ) }>
					<DetailSelectControl
						attributes={ attributes }
						setAttributes={ setAttributes }
					/>
					<ToggleControl
						label={ __( 'Display Inline' ) }
						checked={ inline }
						onChange={ ( newVal ) => {
							setAttributes( { inline: newVal } );
						} }
					/>
					<ToggleControl
						label={ __( 'Show Value only' ) }
						checked={ hideLabel }
						onChange={ ( newVal ) => {
							setAttributes( {
								hideLabel: newVal,
							} );
						} }
						help={ __(
							'Only show the value of the site detail. The label will be hidden.'
						) }
					/>
					<ToggleControl
						label={ __( 'Limit to Admins' ) }
						checked={ adminOnly }
						onChange={ ( newVal ) => {
							setAttributes( {
								adminOnly: newVal,
							} );
						} }
						help={ __(
							'Only admins will see this field. Inputs marked as admin only will appear with a dashed border in the editor'
						) }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);

	return (
		<span { ...blockProps }>
			<div
				className={ classNames(
					className,
					'wpcloud-block-site-detail',
					{
						'is-inline': inline,
						'is-admin-only': adminOnly,
					}
				) }
			>
				{ controls }
				{ hideLabel ? null : (
					<div
						className={ classNames(
							className,
							'wpcloud-block-site-detail__title'
						) }
					>
						<RichText
							tagName="h5"
							className={
								'wpcloud-block-site-detail__title-content'
							}
							value={ label }
							onChange={ ( newTitle ) => {
								setAttributes( { label: newTitle } );
							} }
							placeholder={ __( 'label' ) }
						/>
					</div>
				) }
				<div className={ 'wpcloud-block-site-detail__value' }>
					{ `{ ${ label } }` }
				</div>
			</div>
		</span>
	);
}

export default SiteDetailBlock;
