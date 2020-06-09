import React from 'react';
import '../../../dist/info-label.css';
import tagData from './tags.json';

const InfoLabel = ({ tag }) => {
    return (
        <span title={tagData[tag]?.title} className={`fd-info-label fd-info-label--accent-color-${tagData[tag]?.color}`}>{tagData[tag]?.name}</span>
    )
}

InfoLabel.displayName = 'InfoLabel';

export default InfoLabel;