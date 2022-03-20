import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Input } from './TextField.styled';

const TextField = ({ value, placeholder, onChange }) => {
    return (
        <Wrapper>
            <Input value={value} placeholder={placeholder} onChange={onChange} />
        </Wrapper>
    );
};

TextField.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};

TextField.defaultProps = {
    value: '',
    placeholder: '',
    onChange: () => null,
};

export default TextField;
