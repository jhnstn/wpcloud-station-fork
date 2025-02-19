/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = () => {
	const blockProps = useBlockProps.save();

	return (
		<div
			{ ...blockProps }
			className={ classNames(
				blockProps.className,
				'wpcloud-block-site-ssh-user-list--wrapper'
			) }
		>
			<InnerBlocks.Content />
		</div>
	);
};
export default Save;
