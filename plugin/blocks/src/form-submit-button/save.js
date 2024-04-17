import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = () => {
	const blockProps = useBlockProps.save();
	return (
		<div className="wpcloud-block-form-submit-wrapper" { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
};
export default Save;
